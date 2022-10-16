import { LitElementWw } from "@webwriter/lit";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { property } from "lit/decorators/property.js";

import * as d3 from "d3";
import { select } from "d3-selection";

const data = {
  nodes: [
    {
      name: "A",
      x: 200,
      y: 150,
    },
    {
      name: "B",
      x: 140,
      y: 300,
    },
    {
      name: "C",
      x: 300,
      y: 300,
    },
    {
      name: "D",
      x: 300,
      y: 180,
    },
  ],
  links: [
    {
      source: 0,
      target: 1,
    },
    {
      source: 1,
      target: 2,
    },
    {
      source: 2,
      target: 3,
    },
  ],
};

const c10 = d3.scaleOrdinal(d3.schemeCategory10);

@customElement("graph-viz")
export class GraphViz extends LitElementWw {
  @property() width: number = 960;
  @property() height: number = 500;

  updated() {
    let svg = select(this.shadowRoot.querySelectorAll(".chart")[0])
      .attr("width", this.width)
      .attr("height", this.height);
    this.buildChart(svg);
  }

  buildChart(svg) {
    var links = svg
      .selectAll("link")
      .data(data.links)
      .enter()
      .append("line")
      .attr("class", "link")
      .attr("x1", function (l) {
        var sourceNode = data.nodes.filter(function (d, i) {
          return i == l.source;
        })[0];
        d3.select(this).attr("y1", sourceNode.y);
        return sourceNode.x;
      })
      .attr("x2", function (l) {
        var targetNode = data.nodes.filter(function (d, i) {
          return i == l.target;
        })[0];
        d3.select(this).attr("y2", targetNode.y);
        return targetNode.x;
      })
      .attr("fill", "none")
      .attr("stroke", "white");

    var nodes = svg
      .selectAll("node")
      .data(data.nodes)
      .enter()
      .append("circle")
      .attr("class", "node")
      .attr("cx", function (d) {
        return d.x;
      })
      .attr("cy", function (d) {
        return d.y;
      })
      .attr("r", 15)
      .attr("fill", function (d, i) {
        return c10(i);
      });
  }

  render() {
    return html`<svg class="chart" />`;
  }
}
