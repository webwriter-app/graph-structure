import { LitElementWw } from "@webwriter/lit";
import { html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { property } from "lit/decorators/property.js";
import "./components/dfs_component.ts";
import "./components/dijkstra_component.ts";

export type iGraph = {
  nodes: { name: string }[];
  links: {
    source: string;
    target: string;
    weight: number;
  }[];
};

type LinkNode = {
  index: number;
  name: string;
  vx: number;
  vy: number;
  x: number;
  y: number;
};

type iGraphAfterRender = {
  nodes: { name: string }[];
  links: {
    source: LinkNode;
    target: LinkNode;
    weight: number;
  }[];
};

@customElement("graph-viz")
export class GraphViz extends LitElementWw {
  @property() graph: iGraph = {
    nodes: [
      { name: "Ina" },
      { name: "Bob" },
      { name: "Chen" },
      { name: "Dawg" },
      { name: "Ethan" },
      { name: "George" },
      { name: "Frank" },
      { name: "Hanes" },
    ],
    links: [
      { source: "Ina", target: "Bob", weight: 3 },
      { source: "Chen", target: "Bob", weight: 2 },
      { source: "Dawg", target: "Chen", weight: 1 },
      { source: "Dawg", target: "Frank", weight: 1 },
      { source: "Chen", target: "Frank", weight: 4 },
      { source: "Hanes", target: "Frank", weight: 4 },
      { source: "Hanes", target: "George", weight: 2 },
      { source: "Dawg", target: "Ethan", weight: 1 },
    ],
  };

  @state() private algorithm: "DFS" | "DIJKSTRA" = "DIJKSTRA";
  @state() private newNode: string = "";
  @state() private newLinkWeight: number = 0;
  @state() private newLinkSource: string = this.graph.nodes[0]
    ? this.graph.nodes[0].name
    : null;
  @state() private newLinkTarget: string = this.graph.nodes[0]
    ? this.graph.nodes[0].name
    : null;
  @state() private toDelete: string = this.graph.nodes[0]
    ? this.graph.nodes[0].name
    : null;

  render() {
    return html`<div>
      <p>${this.algorithm === "DFS" ? "DFS" : "DIJKSTRA"}</p>
      <p>Change Algorithm</p>
      <sl-button
        @click="${() =>
          (this.algorithm = this.algorithm === "DFS" ? "DIJKSTRA" : "DFS")}"
        >${this.algorithm === "DFS" ? "DIJKSTRA" : "DFS"}</sl-button
      >
      <p>Update Graph</p>
      <sl-input
        @input="${(e) => (this.newNode = e.target.value)}"
        label="Name of Node?"
      ></sl-input>
      <sl-button
        @click="${() => {
          if (
            !this.graph.nodes.map((node) => node.name).includes(this.newNode) &&
            this.newNode
          )
            this.graph = {
              nodes: [...this.graph.nodes, { name: this.newNode }],
              links: this.graph.links,
            };
        }}"
        >Add Node</sl-button
      >

      <p></p>
      <sl-input
        @input="${(e) => (this.newLinkWeight = e.target.value)}"
        type="number"
        label="Weight of Link?"
      ></sl-input>
      <p>Source</p>
      <select
        @change="${(e: Event) =>
          (this.newLinkSource = (e.target as HTMLSelectElement).value)}"
      >
        ${this.graph.nodes.map(
          (node) => html`<option value=${node.name}>${node.name}</option>`
        )}
      </select>
      <p>Target</p>
      <select
        @change="${(e: Event) =>
          (this.newLinkTarget = (e.target as HTMLSelectElement).value)}"
      >
        ${this.graph.nodes.map(
          (node) => html`<option value=${node.name}>${node.name}</option>`
        )}
      </select>
      <p></p>
      <sl-button
        @click="${() => {
          if (
            (this.graph as unknown as iGraphAfterRender).links.filter(
              (link) =>
                link.source.name === this.newLinkSource &&
                link.target.name === this.newLinkTarget
            ).length < 1 &&
            this.newLinkSource !== this.newLinkTarget
          ) {
            this.graph = {
              nodes: this.graph.nodes,
              links: [
                ...this.graph.links,
                {
                  source: this.newLinkSource,
                  target: this.newLinkTarget,
                  weight: this.newLinkWeight,
                },
              ],
            };
          }
        }}"
        >Add Link</sl-button
      >
      <p>Delete Node</p>
      <select
        @change="${(e: Event) =>
          (this.toDelete = (e.target as HTMLSelectElement).value)}"
      >
        ${this.graph.nodes.map(
          (node) => html`<option value=${node.name}>${node.name}</option>`
        )}
      </select>
      <p></p>
      <sl-button
        @click="${() => {
          (this.graph as unknown as iGraphAfterRender) = {
            nodes: this.graph.nodes.filter(
              (node) => node.name !== this.toDelete
            ),
            links: (this.graph as unknown as iGraphAfterRender).links.filter(
              (link) =>
                link.source.name !== this.toDelete &&
                link.source.name !== this.toDelete
            ),
          };
        }}"
        >Delete Node</sl-button
      >
      <p></p>
      ${this.algorithm === "DFS"
        ? html`<dfs-graph .graph=${this.graph} />`
        : html`<dijkstra-graph .graph=${this.graph} />`}
    </div>`;
  }
}
