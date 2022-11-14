import { LitElementWw } from "@webwriter/lit";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { property } from "lit/decorators/property.js";

import { select } from "d3-selection";
import { buildChart } from "../graph/buildGraph";

@customElement("graph-graph")
export class Graph extends LitElementWw {
  @property() width: number = 960;
  @property() height: number = 800;

  @property({ type: Function }) callback = (i, graph, animateNodeByName) => {
    console.log("default callback");
  };
  @property() graph: string = "{ nodes: [], links: [] }";

  firstUpdated() {
    let svg = select(this.shadowRoot.querySelectorAll(".chart")[0])
      .attr("width", this.width)
      .attr("height", this.height);

    buildChart(
      svg,
      this.width,
      this.height,
      JSON.parse(this.graph),
      (i, graph, animateNodeByName) =>
        this.callback(i, graph, animateNodeByName)
    );
  }

  render() {
    return html`<svg class="chart" />`;
  }
}
