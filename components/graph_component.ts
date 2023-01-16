import { LitElementWw } from "@webwriter/lit";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { property } from "lit/decorators/property.js";
import { iGraph } from "./../index";

import { select } from "d3-selection";
import { buildChart } from "../graph/buildGraph";

@customElement("graph-graph")
export class Graph extends LitElementWw {
  @property() width: number = 600;
  @property() height: number = 600;

  @property({ type: Object }) graph: iGraph = {
    newLink: "",
    nodes: [],
    links: [],
  };

  updated() {
    let svg = select(this.shadowRoot.querySelectorAll(".chart")[0])
      .attr("width", this.width)
      .attr("height", this.height);

    svg.selectAll("*").remove();

    buildChart(svg, this.width, this.height, this.graph);

    const event = new CustomEvent("svg-update", {
      bubbles: true,
      composed: true,
      detail: svg,
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`<svg class="chart" />`;
  }
}
