import { LitElementWw } from "@webwriter/lit";
import { css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { property } from "lit/decorators/property.js";
import "./components/algo_selection";
import "./components/edit_graph.ts";
import "./components/graph_component.ts";
import "./components/manual_animations.ts";
import { animateMultipleLinksBySourceTargetAndColor } from "./graph/animateMultipleLinksBySourceTargetAndColor";
import { animateMultipleNodesByNameAndColor } from "./graph/animateMultipleNodesByNameAndColor";
import { resetColors } from "./graph/resetColors";
import { setNodeSubText } from "./graph/setNodeSubText";
import { AnimationStatusType, AnimationType, iGraph } from "./types";
import { delay } from "./utils/sleep";

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
  @state() private animation: AnimationType = [];
  @state() private animationStatus: AnimationStatusType = "STOP";
  @state() private animationPosition: number = 0;
  @state() private currentTab: string = "algo";

  async animateGraph() {
    if (this.animationStatus === "RUN") {
      if (this.animationPosition < this.animation.length) {
        const currentStep = this.animation[this.animationPosition];

        if (currentStep.type == "RESET") resetColors(this.svg);

        if (currentStep.type == "NODE")
          animateMultipleNodesByNameAndColor(
            this.svg,
            currentStep.data.names,
            currentStep.data.colors
          );
        if (currentStep.type == "LINK")
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

    this.addEventListener("svg-update", (e: CustomEvent) => {
      this.svg = e.detail;
    });

    this.addEventListener("animation-status-update", (e: CustomEvent) => {
      this.animationStatus = e.detail;
    });

    this.addEventListener("animate-graph", this.animateGraph);

    this.addEventListener("graph-update", (e: CustomEvent) => {
      this.graph = e.detail;
    });

    this.addEventListener("animation-position-update", (e: CustomEvent) => {
      this.animationPosition = e.detail;
    });

    this.addEventListener("animation-update", (e: CustomEvent) => {
      this.animation = e.detail;
    });

    this.addEventListener("reset-graph", this.resetGraph);
  }

  resetGraph() {
    const temp = { ...this.graph };
    this.graph = undefined;
    this.graph = temp;
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

  render() {
    return html`<div>
      <sl-tab-group
        @sl-tab-show=${(e) => {
          this.animationStatus = "STOP";
          this.resetGraph();
          this.currentTab = e.detail.name;
          document.body.style.cursor = "auto";
        }}
      >
        <sl-tab slot="nav" panel="algo">Algorithm</sl-tab>
        <sl-tab slot="nav" panel="manual">Manual Animations</sl-tab>
        <sl-tab slot="nav" panel="graph">Graph</sl-tab>
        <sl-tab-panel name="manual">
          <manual-animations
            currentTab=${this.currentTab}
            animationStatus=${this.animationStatus}
            .svg=${this.svg}
          ></manual-animations>
        </sl-tab-panel>

        <sl-tab-panel name="algo">
          <algo-selection
            currentTab=${this.currentTab}
            animationStatus=${this.animationStatus}
            .graph=${this.graph}
          ></algo-selection>
        </sl-tab-panel>
        <sl-tab-panel name="graph">
          <edit-graph .graph=${this.graph}></edit-graph>
        </sl-tab-panel>
      </sl-tab-group>

      <graph-graph .graph=${this.graph}></graph-graph>
    </div>`;
  }
}
