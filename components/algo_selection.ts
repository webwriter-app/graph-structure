import { LitElementWw } from "@webwriter/lit";
import { html, PropertyValueMap } from "lit";
import { customElement, state } from "lit/decorators.js";
import { property } from "lit/decorators/property.js";
import { bfs } from "../algorithms/bfs";
import { coloring } from "../algorithms/coloring";
import { cycle } from "../algorithms/cycle";
import { dfs } from "../algorithms/dfs";
import { dijkstra } from "../algorithms/dijkstra";
import { spanTree } from "../algorithms/spanTree";
import { AnimationStatusType, iGraph } from "../types";
import {
  dispatchAnimationEvent,
  dispatchGraphReset,
  setAnimation,
  setAnimationPosition,
  setAnimationStatus,
} from "../utils/events";
import { delay } from "../utils/sleep";

@customElement("algo-selection")
export class AlgoSelection extends LitElementWw {
  @property({ type: String }) currentTab: string = "algo";
  @property({ type: String }) animationStatus: AnimationStatusType = "STOP";
  @property({ type: Object }) graph: iGraph = {
    newLink: "",
    nodes: [],
    links: [],
  };

  @state() private action: string = "";
  @state() private target: string = "";
  @state() private algorithm:
    | "DFS"
    | "SPANTREE"
    | "DIJKSTRA"
    | "CYCLE"
    | "BFS"
    | "COLORING" = "SPANTREE";

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    document
      .querySelector("#main")
      .shadowRoot.querySelector("graph-graph")
      .addEventListener("svg-graph-event", (e: CustomEvent) => {
        if (e.detail.type == "NODE") {
          if (this.action == "execute") {
            if (this.algorithm == "BFS") {
              setAnimation(bfs(e.detail.data, this.graph, this.target), this);
            }
            if (this.algorithm == "DFS") {
              setAnimation(dfs(e.detail.data, this.graph, this.target), this);
            }
            if (this.algorithm == "DIJKSTRA") {
              setAnimation(dijkstra(e.detail.data, this.graph), this);
            }
            this.animationStatus = "RUN";
            dispatchAnimationEvent(this);

            this.action = "";
            document.body.style.cursor = "auto";
            return;
          }
        }
      });
  }

  render() {
    return html`
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
              @input="${(e) => (this.target = e.target.value)}"
              label="Target"
            ></sl-input>
            <p></p>`
        : ""}
      <sl-button
        @click="${async () => {
          if (this.animationStatus === "STOP") {
            setAnimationStatus("RUN", this);
            dispatchGraphReset(this);
            await delay(200);
            setAnimationPosition(0, this);
            if (
              this.algorithm == "CYCLE" ||
              this.algorithm == "COLORING" ||
              this.algorithm == "SPANTREE"
            ) {
              if (this.algorithm == "CYCLE")
                setAnimation(cycle(this.graph), this);
              if (this.algorithm == "SPANTREE")
                setAnimation(spanTree(this.graph), this);
              if (this.algorithm == "COLORING")
                setAnimation(coloring(this.graph), this);
              dispatchAnimationEvent(this);

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
          setAnimationStatus("STOP", this);
        }}"
        >Stop</sl-button
      >
      <sl-button
        @click="${() => {
          if (this.animationStatus === "RUN") {
            setAnimationStatus("PAUSE", this);
            return;
          }
          if (this.animationStatus === "PAUSE") {
            setAnimationStatus("RUN", this);
            dispatchAnimationEvent(this);
          }
        }}"
        >${this.animationStatus == "PAUSE" ? "Play" : "Pause"}</sl-button
      >
    `;
  }
}
