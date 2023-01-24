import { LitElementWw } from "@webwriter/lit";
import { css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { property } from "lit/decorators/property.js";
import { bfs } from "./algorithms/bfs";
import { coloring } from "./algorithms/coloring";
import { cycle } from "./algorithms/cycle";
import { dfs } from "./algorithms/dfs";
import { dijkstra } from "./algorithms/dijkstra";
import { spanTree } from "./algorithms/spanTree";
import "./components/graph_component.ts";
import { animateLinkBySourceTarget } from "./graph/animateLinkBySourceTarget";
import { animateMultipleLinksBySourceTargetAndColor } from "./graph/animateMultipleLinksBySourceTargetAndColor";

import { animateMultipleNodesByNameAndColor } from "./graph/animateMultipleNodesByNameAndColor";
import { animateNodeByName } from "./graph/animateNodeByName";
import { animateNodeByNameAndColor } from "./graph/animateNodeByNameAndColor";
import { colorGraphForLinkAnimation } from "./graph/colorGraphForLinkAnimation";
import { colorGraphForNodeAnimation } from "./graph/colorGraphForNodeAnimation";
import { resetColors } from "./graph/resetColors";
import { setNodeSubText } from "./graph/setNodeSubText";
import { delay } from "./utils/sleep";
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

export type AnimationType = {
  type:
    | "Link"
    | "Node1"
    | "Node2"
    | "SetNodeSubText"
    | "RESET"
    | "MULTI"
    | "MULTILINK";
  data: any;
}[];

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

  @state() private animation: AnimationType = [];
  @state() private animationStatus: "STOP" | "RUN" | "PAUSE" = "STOP";
  @state() private animationPosition: number = 0;

  async animateGraph() {
    if (this.animationStatus === "RUN") {
      if (this.animationPosition < this.animation.length) {
        const currentStep = this.animation[this.animationPosition];
        if (currentStep.type == "Link")
          animateLinkBySourceTarget(
            this.svg,
            currentStep.data.source,
            currentStep.data.target
          );
        if (currentStep.type == "RESET") resetColors(this.svg);
        if (currentStep.type == "Node1")
          animateNodeByName(this.svg, currentStep.data);
        if (currentStep.type == "Node2")
          animateNodeByNameAndColor(
            this.svg,
            currentStep.data.name,
            currentStep.data.color
          );
        if (currentStep.type == "MULTI")
          animateMultipleNodesByNameAndColor(
            this.svg,
            currentStep.data.names,
            currentStep.data.colors
          );
        if (currentStep.type == "MULTILINK")
          animateMultipleLinksBySourceTargetAndColor(
            this.svg,
            currentStep.data.links,
            currentStep.data.colors
          );
        if (currentStep.type == "SetNodeSubText")
          setNodeSubText(
            this.svg,
            currentStep.data.node,
            currentStep.data.text
          );
        this.animationPosition = this.animationPosition + 1;
        await delay(2000);
        this.animateGraph();
      } else {
        this.animationPosition = 0;
        this.animationStatus = "STOP";
      }
    }
  }

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
        if (this.action == "RECORDING" && this.recording == "LINK") {
          let updatedAnimation;
          if (
            this.recordedAnimation[
              this.currentAnimationBeingEditet
            ].data.links.every(
              (link) =>
                link.source !== e.detail.data.source.name ||
                link.target !== e.detail.data.target.name
            )
          ) {
            updatedAnimation = {
              type: "MULTILINK" as const,
              data: {
                links: [
                  ...this.recordedAnimation[this.currentAnimationBeingEditet]
                    .data.links,
                  {
                    source: e.detail.data.source.name,
                    target: e.detail.data.target.name,
                  },
                ],
                colors: [
                  ...this.recordedAnimation[this.currentAnimationBeingEditet]
                    .data.colors,
                  this.animationColor,
                ],
              },
            };
          } else {
            let indexToRemove = -1;
            updatedAnimation = {
              type: "MULTILINK" as const,
              data: {
                links: [
                  ...this.recordedAnimation[
                    this.currentAnimationBeingEditet
                  ].data.links.filter((link, index) => {
                    if (
                      link.source !== e.detail.data.source.name ||
                      link.target !== e.detail.data.target.name
                    ) {
                      return true;
                    } else {
                      indexToRemove = index;
                      return false;
                    }
                  }),
                ],
                colors: [
                  ...this.recordedAnimation[
                    this.currentAnimationBeingEditet
                  ].data.colors.filter((_, index) => index !== indexToRemove),
                ],
              },
            };
          }

          const newRecordedAnimations = [...this.recordedAnimation];
          newRecordedAnimations[this.currentAnimationBeingEditet] =
            updatedAnimation;
          this.recordedAnimation = [...newRecordedAnimations];

          colorGraphForLinkAnimation(
            this.svg,
            updatedAnimation.data.links,
            updatedAnimation.data.colors
          );
          return;
        }
        if (this.action == "deleteLink") {
          (this.graph as unknown as iGraphAfterRender) = deleteLink(
            this.graph,
            e.detail.data.source.name,
            e.detail.data.target.name
          );
        }
      }
      if (e.detail.type == "NODE") {
        if (this.action == "RECORDING" && this.recording == "NODE") {
          let updatedAnimation;
          if (
            !this.recordedAnimation[
              this.currentAnimationBeingEditet
            ].data.names.includes(e.detail.data.name)
          ) {
            updatedAnimation = {
              type: "MULTI" as const,
              data: {
                names: [
                  ...this.recordedAnimation[this.currentAnimationBeingEditet]
                    .data.names,
                  e.detail.data.name,
                ],
                colors: [
                  ...this.recordedAnimation[this.currentAnimationBeingEditet]
                    .data.colors,
                  this.animationColor,
                ],
              },
            };
          } else {
            let indexToRemove = -1;
            updatedAnimation = {
              type: "MULTI" as const,
              data: {
                names: [
                  ...this.recordedAnimation[
                    this.currentAnimationBeingEditet
                  ].data.names.filter((node, index) => {
                    if (node == e.detail.data.name) {
                      indexToRemove = index;
                      return false;
                    } else {
                      return true;
                    }
                  }),
                ],
                colors: this.recordedAnimation[
                  this.currentAnimationBeingEditet
                ].data.colors.filter((_, index) => index !== indexToRemove),
              },
            };
          }

          const newRecordedAnimations = [...this.recordedAnimation];
          newRecordedAnimations[this.currentAnimationBeingEditet] =
            updatedAnimation;
          this.recordedAnimation = [...newRecordedAnimations];

          colorGraphForNodeAnimation(
            this.svg,
            updatedAnimation.data.names,
            updatedAnimation.data.colors
          );
          return;
        }
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
          if (this.algorithm == "BFS") {
            this.animation = bfs(e.detail.data, this.graph, this.dfsTarget);
          }
          if (this.algorithm == "DFS") {
            this.animation = dfs(e.detail.data, this.graph, this.dfsTarget);
          }
          if (this.algorithm == "DIJKSTRA") {
            this.animation = dijkstra(e.detail.data, this.graph);
          }
          this.animationStatus = "RUN";
          this.animateGraph();

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

  @state() private algorithm:
    | "DFS"
    | "SPANTREE"
    | "DIJKSTRA"
    | "CYCLE"
    | "BFS"
    | "COLORING" = "SPANTREE";
  @state() private newNode: string = "";

  resetGraph() {
    const temp = { ...this.graph };
    this.graph = undefined;
    this.graph = temp;
  }

  @state() recordedAnimation: AnimationType = [];
  @state() animationColor: string = "#4a90e2";
  @state() recording: "NODE" | "LINK" | "" = "";
  @state() currentAnimationBeingEditet: undefined | number = undefined;

  render() {
    return html`<div>
      <sl-tab-group>
        <sl-tab slot="nav" panel="algo">Algorithm</sl-tab>
        <sl-tab slot="nav" panel="manual">Manual Animations</sl-tab>
        <sl-tab slot="nav" panel="graph">Graph</sl-tab>

        <sl-tab-panel name="manual">
          <sl-button
            @click="${() => {
              this.action = "RECORDING";
              this.recording = "LINK";
              document.body.style.cursor = "crosshair";

              this.recordedAnimation.push({
                type: "MULTILINK",
                data: { links: [], colors: [] },
              });
              this.currentAnimationBeingEditet =
                this.recordedAnimation.length - 1;

              colorGraphForLinkAnimation(this.svg, [], []);
            }}"
          >
            Add LINK Animation</sl-button
          >
          <sl-button
            @click="${() => {
              this.action = "RECORDING";
              this.recording = "NODE";
              document.body.style.cursor = "crosshair";

              this.recordedAnimation.push({
                type: "MULTI",
                data: { names: [], colors: [] },
              });
              this.currentAnimationBeingEditet =
                this.recordedAnimation.length - 1;
              colorGraphForNodeAnimation(this.svg, [], []);
            }}"
            >Add NODE Animation</sl-button
          ><sl-color-picker
            value=${this.animationColor}
            label="Select a color"
            @sl-change=${(e) => (this.animationColor = e.target.value)}
          ></sl-color-picker>

          <p></p>

          ${this.recordedAnimation.map(
            (animation, index) => html`<div>
              <p>
                <sl-button
                  variant=${this.currentAnimationBeingEditet == index
                    ? "danger"
                    : "default"}
                  @click="${() => {
                    this.animationStatus = "STOP";
                    this.currentAnimationBeingEditet = index;
                    if (animation.type == "MULTI") {
                      this.recording = "NODE";
                      colorGraphForNodeAnimation(
                        this.svg,
                        animation.data.names,
                        animation.data.colors
                      );
                    }
                    if (animation.type == "MULTILINK") {
                      this.recording = "LINK";
                      colorGraphForLinkAnimation(
                        this.svg,
                        animation.data.links,
                        animation.data.colors
                      );
                    }
                    document.body.style.cursor = "crosshair";
                  }}"
                  >Select</sl-button
                >${JSON.stringify(animation)}
                <sl-button
                  @click="${() => {
                    this.recordedAnimation = [
                      ...this.recordedAnimation.filter((_, i) => i !== index),
                    ];
                    this.currentAnimationBeingEditet = undefined;
                    this.recording = "";
                    document.body.style.cursor = "auto";
                  }}"
                  >Remove</sl-button
                >
              </p>
            </div>`
          )}

          <p></p>
          <sl-button
            @click="${async () => {
              if (this.animationStatus === "STOP") {
                document.body.style.cursor = "auto";
                this.currentAnimationBeingEditet = undefined;
                this.animationStatus = "RUN";
                this.resetGraph();
                await delay(200);
                this.animationPosition = 0;
                this.animation = [...this.recordedAnimation];
                this.animateGraph();

                this.action = "";
              }
            }}"
            >Execute</sl-button
          >

          <sl-button
            @click="${() => {
              this.animationStatus = "STOP";
            }}"
            >Stop</sl-button
          >
          <sl-button
            @click="${() => {
              if (this.animationStatus === "RUN") {
                this.animationStatus = "PAUSE";
                return;
              }
              if (this.animationStatus === "PAUSE") {
                this.animationStatus = "RUN";
                this.animateGraph();
              }
            }}"
            >${this.animationStatus == "PAUSE" ? "Play" : "Pause"}</sl-button
          >
        </sl-tab-panel>

        <sl-tab-panel name="algo">
          <sl-select
            value=${this.algorithm}
            @sl-change=${(e) => (this.algorithm = e.target.value)}
            label="Select Algorithm"
          >
            <sl-menu-item value="SPANTREE">Span Tree</sl-menu-item>
            <sl-menu-item value="COLORING"
              >Graph Coloring (Brute Force)</sl-menu-item
            >
            <sl-menu-item value="CYCLE">Cycle Detection</sl-menu-item>
            <sl-menu-item value="BFS">BFS</sl-menu-item>
            <sl-menu-item value="DFS">DFS</sl-menu-item>
            <sl-menu-item value="DIJKSTRA">DIJKSTRA</sl-menu-item>
          </sl-select>
          <p></p>
          ${this.algorithm == "DFS" || this.algorithm == "BFS"
            ? html`<sl-input
                  @input="${(e) => (this.dfsTarget = e.target.value)}"
                  label="Target"
                ></sl-input>
                <p></p>`
            : ""}
          <sl-button
            @click="${async () => {
              if (this.animationStatus === "STOP") {
                this.animationStatus = "RUN";
                this.resetGraph();
                await delay(200);
                this.animationPosition = 0;
                if (
                  this.algorithm == "CYCLE" ||
                  this.algorithm == "COLORING" ||
                  this.algorithm == "SPANTREE"
                ) {
                  if (this.algorithm == "CYCLE")
                    this.animation = cycle(this.graph);
                  if (this.algorithm == "SPANTREE")
                    this.animation = spanTree(this.graph);
                  if (this.algorithm == "COLORING")
                    this.animation = coloring(this.graph);
                  this.animateGraph();

                  this.action = "";
                } else {
                  this.action = "execute";
                  document.body.style.cursor = "crosshair";
                }
              }
            }}"
            >Execute</sl-button
          >

          <sl-button
            @click="${() => {
              this.animationStatus = "STOP";
            }}"
            >Stop</sl-button
          >
          <sl-button
            @click="${() => {
              if (this.animationStatus === "RUN") {
                this.animationStatus = "PAUSE";
                return;
              }
              if (this.animationStatus === "PAUSE") {
                this.animationStatus = "RUN";
                this.animateGraph();
              }
            }}"
            >${this.animationStatus == "PAUSE" ? "Play" : "Pause"}</sl-button
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
                this.animationStatus = "STOP";
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
                this.animationStatus = "STOP";
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
                this.animationStatus = "STOP";
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
                this.animationStatus = "STOP";
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
