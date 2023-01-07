import { LitElementWw } from "@webwriter/lit";
import { css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { property } from "lit/decorators/property.js";
import { dfs } from "./algorithms/dfs";
import { dijkstra } from "./algorithms/dijkstra";
import "./components/graph_component.ts";
import { animateLinkBySourceTarget } from "./graph/animateLinkBySourceTarget";
import { animateNodeByName } from "./graph/animateNodeByName";
import { animateNodeByNamev2 } from "./graph/animateNodeByNamev2";
import { setNodeSubText } from "./graph/setNodeSubText";
import {
  addLink,
  addNode,
  containsLink,
  deleteLink,
  deleteNode,
  iGraphAfterRender,
} from "./utils/updateGraph";

export type iGraph = {
  newLink: string;
  nodes: { name: string }[];
  links: {
    source: string;
    target: string;
    weight: number;
  }[];
};

@customElement("graph-viz")
export class GraphViz extends LitElementWw {
  @property() graph: iGraph = {
    newLink: "",
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
      console.log(e);

      if (this.action == "add node") {
        this.graph = addNode(this.graph, this.newNode);
        this.action = "";
        document.body.style.cursor = "auto";
        return;
      }
      if (e.detail.type == "LINK") {
        if (this.action == "deleteLink") {
          (this.graph as unknown as iGraphAfterRender) = deleteLink(
            this.graph,
            e.detail.data.source.name,
            e.detail.data.target.name
          );
        }
      }
      if (e.detail.type == "NODE") {
        if (this.action == "delete") {
          (this.graph as unknown as iGraphAfterRender) = deleteNode(
            this.graph,
            e.detail.data.name
          );
          this.action = "";
          document.body.style.cursor = "auto";
          return;
        }
        if (this.action == "add link") {
          this.graph.newLink = e.detail.data.name;
          this.action = "add link 2";
          this.selectedNode = e.detail.data.name;
          return;
        }
        if (this.action == "add link 2") {
          if (
            !containsLink(this.graph, this.selectedNode, e.detail.data.name) &&
            this.selectedNode !== e.detail.data.name
          ) {
            this.graph = addLink(
              this.graph,
              this.selectedNode,
              e.detail.data.name,
              this.newLinkWeight
            );
          }
          this.graph.newLink = "";
          this.action = "";
          document.body.style.cursor = "auto";
          return;
        }
        if (this.action == "execute") {
          if (this.algorithm == "DFS") {
            dfs(
              e.detail.data,
              this.graph,
              this.dfsTarget,
              (name) => animateNodeByName(this.svg, name),
              (name) => animateNodeByNamev2(this.svg, name)
            );
          }
          if (this.algorithm == "DIJKSTRA") {
            dijkstra(
              e.detail.data,
              this.graph,
              (name) => animateNodeByName(this.svg, name),
              (source, target) =>
                animateLinkBySourceTarget(this.svg, source, target),
              (node, text) => setNodeSubText(this.svg, node, text)
            );
          }

          this.action = "";
          document.body.style.cursor = "auto";
          return;
        }
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

  @state() private dfsTarget: string = "";

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
          ${this.algorithm == "DFS"
            ? html`<sl-input
                  @input="${(e) => (this.dfsTarget = e.target.value)}"
                  label="Target"
                ></sl-input>
                <p></p>`
            : ""}
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
                this.action = "add node";
                document.body.style.cursor = "crosshair";
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
          <sl-card class="card">
            <p>Delete Link</p>
            <sl-button
              @click="${() => {
                document.body.style.cursor = "crosshair";

                this.action = "deleteLink";
              }}"
              >Delete Link</sl-button
            >
          </sl-card>
        </sl-tab-panel>
      </sl-tab-group>

      <graph-graph .graph=${this.graph} />
    </div>`;
  }
}
