import { LitElementWw } from "@webwriter/lit";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { property } from "lit/decorators/property.js";

import { select } from "d3-selection";
import { dfs } from "../algorithms/dfs";
import { buildChart } from "../graph/buildGraph";

const graph = {
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
    { source: "Chen", target: "Frank", weight: 4 },
    { source: "Hanes", target: "Frank", weight: 4 },
    { source: "Hanes", target: "George", weight: 2 },
    { source: "Dawg", target: "Ethan", weight: 1 },
  ],
};

@customElement("dfs-graph")
export class DfsGraph extends LitElementWw {
  @property() width: number = 960;
  @property() height: number = 800;

  firstUpdated() {
    let svg = select(this.shadowRoot.querySelectorAll(".chart")[0])
      .attr("width", this.width)
      .attr("height", this.height);
    buildChart(svg, this.width, this.height, graph, (i) => {
      dfs("Ina", i, graph, this);
    });
  }

  render() {
    return html`<svg class="chart" />`;
  }
}
