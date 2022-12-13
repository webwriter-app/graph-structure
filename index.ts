import { LitElementWw } from "@webwriter/lit";
import { css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { property } from "lit/decorators/property.js";
import { dfs } from "./algorithms/dfs";
import { dijkstra } from "./algorithms/dijkstra";
import "./components/graph_component.ts";
import { animateNodeByName } from "./graph/buildGraph";

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
  @state() private svg: any = null;
  @state() private action: string = "";
  constructor() {
    super();
    this.addEventListener("my-event", (e: CustomEvent) => {
      if (this.action == "delete") {
        (this.graph as unknown as iGraphAfterRender) = {
          nodes: this.graph.nodes.filter((node) => node.name !== e.detail.name),
          links: (this.graph as unknown as iGraphAfterRender).links.filter(
            (link) =>
              link.source.name !== e.detail.name &&
              link.target.name !== e.detail.name
          ),
        };
        this.action = "";
        document.body.style.cursor = "auto";
        return;
      }
      if (this.action == "add link") {
        this.action = "add link 2";
        this.selectedNode = e.detail.name;
        return;
      }
      if (this.action == "add link 2") {
        if (
          (this.graph as unknown as iGraphAfterRender).links.filter(
            (link) =>
              link.source.name === this.selectedNode &&
              link.target.name === e.detail.name
          ).length < 1 &&
          this.selectedNode !== e.detail.name
        ) {
          this.graph = {
            nodes: this.graph.nodes,
            links: [
              ...this.graph.links,
              {
                source: this.selectedNode,
                target: e.detail.name,
                weight: this.newLinkWeight,
              },
            ],
          };
        }

        this.action = "";
        document.body.style.cursor = "auto";
        return;
      }
      if (this.action == "execute") {
        if (this.algorithm == "DFS") {
          dfs(e.detail, this.graph, (name) =>
            animateNodeByName(this.svg, name)
          );
        }
        if (this.algorithm == "DIJKSTRA") {
          dijkstra(e.detail, this.graph, (name) =>
            animateNodeByName(this.svg, name)
          );
        }

        this.action = "";
        document.body.style.cursor = "auto";
        return;
      }
    });

    this.addEventListener("svg-update", (e: CustomEvent) => {
      this.svg = e.detail;
    });
  }

  static styles = css`
    #subcontainer {
      width: 50%;
    }
    #container {
      display: flex;
      flex-direction: row;
      width: 100%;
    }
  `;

  @state() private selectedNode: string = "";
  @state() private newLinkWeight: number = 1;

  @state() private algorithm: "DFS" | "DIJKSTRA" = "DIJKSTRA";
  @state() private newNode: string = "";

  render() {
    return html`<div>
      <sl-tab-group>
        <sl-tab slot="nav" panel="algo">Algorithm</sl-tab>
        <sl-tab slot="nav" panel="graph">Graph</sl-tab>

        <sl-tab-panel name="algo">
          <sl-select
            value=${this.algorithm}
            @sl-change=${(e) => (this.algorithm = e.target.value)}
            label="Select Algorithm"
          >
            <sl-menu-item value="DFS">DFS</sl-menu-item>
            <sl-menu-item value="DIJKSTRA">DIJKSTRA</sl-menu-item>
          </sl-select>
          <p></p>
          <sl-button
            @click="${() => {
              this.action = "execute";
              document.body.style.cursor = "crosshair";
            }}"
            >Execute</sl-button
          >
        </sl-tab-panel>
        <sl-tab-panel name="graph">
          <sl-card class="card">
            <p>Add Node</p>

            <sl-input
              @input="${(e) => (this.newNode = e.target.value)}"
              label="Name of Node?"
            ></sl-input>
            <sl-button
              @click="${() => {
                if (
                  !this.graph.nodes
                    .map((node) => node.name)
                    .includes(this.newNode) &&
                  this.newNode
                )
                  this.graph = {
                    nodes: [...this.graph.nodes, { name: this.newNode }],
                    links: this.graph.links,
                  };
              }}"
              >Add Node</sl-button
            >
          </sl-card>

          <sl-card class="card">
            <p>Add Link</p>

            <sl-input
              @input="${(e) => (this.newLinkWeight = e.target.value)}"
              type="number"
              label="Weight of Link?"
            ></sl-input>

            <sl-button
              @click="${() => {
                this.action = "add link";
                document.body.style.cursor = "crosshair";
              }}"
              >Add Link</sl-button
            >
          </sl-card>
          <sl-card class="card">
            <p>Delete Node</p>
            <sl-button
              @click="${() => {
                document.body.style.cursor = "crosshair";

                this.action = "delete";
              }}"
              >Delete Node</sl-button
            >
          </sl-card>
        </sl-tab-panel>
      </sl-tab-group>

      <graph-graph .graph=${this.graph} />
    </div>`;
  }
}
