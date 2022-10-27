import { LitElementWw } from "@webwriter/lit";
import { html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { property } from "lit/decorators/property.js";

import * as d3 from "d3";
import { select } from "d3-selection";

async function delay(ms) {
  // return await for better async stack trace support in case of errors.
  return await new Promise((resolve) => setTimeout(resolve, ms));
}

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
        { source: "Ina", target: "Bob", weight: 3 },
        { source: "Chen", target: "Bob", weight: 2 },
        { source: "Dawg", target: "Chen", weight: 1 },
        { source: "Chen", target: "Frank", weight: 4 },
        { source: "Hanes", target: "Frank", weight: 4 },
        { source: "Hanes", target: "George", weight: 2 },
        { source: "Dawg", target: "Ethan", weight: 1 },
      ],
    };
    var translate_speed = 5000;

    async function dfs(goal, start) {
      let visited = {};
      let adjacent = {};
      for (let n of graph.nodes) {
        adjacent[n.name] = [];
        visited[n.name] = false;
      }
      for (let l of graph.links) {
        adjacent[l.source.name].push(l.target);
        adjacent[l.target.name].push(l.source);
      }

      let stack = [];
      stack.push(start);

      while (stack.length != 0) {
        // Pop a vertex from stack and print it
        let current = stack.pop();
        let x = d3.select(
          comp.shadowRoot.querySelector(".node." + current.name)
        );
        x.transition()
          .delay((translate_speed * 2) / 5)
          .duration(translate_speed / 5)
          .attr("r", 10)
          .transition()
          .duration(translate_speed / 5)
          .attr("r", 15)
          .style("fill", "#D0E1C3")
          .style("stroke-width", "0");

        await delay(translate_speed);

        // Stack may contain same vertex twice. So
        // we need to print the popped item only
        // if it is not visited.
        if (visited[current.name] == false) {
          visited[current.name] = true;
        }

        // Get all adjacent vertices of the
        // popped vertex s. If a adjacent has
        // not been visited, then push it
        // to the stack.
        for (let node = 0; node < adjacent[current.name].length; node++) {
          if (!visited[adjacent[current.name][node].name])
            stack.push(adjacent[current.name][node]);
        }
      }
    }

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

    var glink = svg
      .append("g")
      .attr("class", "links")
      .selectAll(".link")
      .data(graph.links)
      .enter();

    var link = glink
      .append("line")
      .attr("class", function (d) {
        return "link " + d.index;
      })
      .attr("stroke", "black")
      .attr("stroke-width", function (d) {
        return 3;
      });

    var linktext = glink
      .append("text")
      .attr("class", function (d) {
        return "linktext " + d.index;
      })
      .attr("text-anchor", "middle")
      .text(function (d) {
        return d.weight;
      });

    var gnode = svg
      .append("g")
      .attr("class", "nodes")
      .selectAll(".node")
      .data(graph.nodes)
      .enter();

    var node = gnode
      .append("circle")
      .attr("class", function (d) {
        return "node " + d.name;
      })
      .attr("r", 15)
      .attr("fill", "red")
      .call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

    var nodetext = gnode
      .append("text")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("class", function (d) {
        return "nodetext " + d.name;
      })
      .text(function (d) {
        return d.name;
      })
      .on("click", async (d, i) => {
        dfs("Ina", i);
      });

    function ticked() {
      nodetext
        .attr("x", function (d) {
          return d.x;
        })
        .attr("y", function (d) {
          return d.y;
        });
      linktext
        .attr("x", function (d) {
          return (d.source.x + d.target.x) / 2;
        })
        .attr("y", function (d) {
          return (d.source.y + d.target.y) / 2;
        });
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

      node.on("mouseover", function (d) {
        d3.select(this).attr("r", 16.5);
      });

      node.on("mouseout", function (d) {
        d3.select(this).attr("r", 15);
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
