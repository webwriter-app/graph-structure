import { LitElementWw } from "@webwriter/lit";
import { html } from "lit";
import { customElement, state } from "lit/decorators.js";
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
      x: 400,
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
  @property() height: number = 600;
  @state() test: number = 1;

  firstUpdated() {
    let svg = select(this.shadowRoot.querySelectorAll(".chart")[0])
      .attr("width", this.width)
      .attr("height", this.height);
    this.buildChart(svg, this);
  }

  buildChart(svg, comp) {
    //intialize data
    var graph = {
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
        { source: "Ina", target: "Bob" },
        { source: "Chen", target: "Bob" },
        { source: "Dawg", target: "Chen" },
        { source: "Chen", target: "Frank" },

        { source: "Hanes", target: "Frank" },
        { source: "Hanes", target: "George" },
        { source: "Dawg", target: "Ethan" },
      ],
    };

    var simulation = d3
      .forceSimulation(graph.nodes)

      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(this.width / 2, this.height / 2))
      .force(
        "link",
        d3
          .forceLink()
          .id(function (d) {
            return d.name;
          })
          .distance(function () {
            return 100;
          })
          .links(graph.links)
      )

      .on("tick", ticked);

    var link = svg
      .append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(graph.links)
      .enter()
      .append("line")
      .attr("stroke", "black")
      .attr("stroke-width", function (d) {
        return 3;
      });

    var node = svg
      .append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(graph.nodes)
      .enter()
      .append("circle")
      .attr("r", 5)
      .attr("fill", "red")
      .call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

    function ticked() {
      link
        .attr("x1", function (d) {
          return d.source.x;
        })
        .attr("y1", function (d) {
          return d.source.y;
        })
        .attr("x2", function (d) {
          return d.target.x;
        })
        .attr("y2", function (d) {
          return d.target.y;
        });

      node
        .attr("cx", function (d) {
          return d.x;
        })
        .attr("cy", function (d) {
          return d.y;
        });
    }

    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }

  render() {
    return html`<svg class="chart" />`;
  }
}
