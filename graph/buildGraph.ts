import * as d3 from "d3";

export const initSize = 26;
export const emphSize = 28;

export function buildChart(svg, width, height, graph) {
  let radius = initSize;

  var simulation = d3
    .forceSimulation(graph.nodes)
    .force("charge", d3.forceManyBody().strength(-250))
    .force("center", d3.forceCenter(width / 2, height / 2))
    .force(
      "collision",
      d3.forceCollide().radius(function (d) {
        return d.radius;
      })
    )
    .force(
      "link",
      d3
        .forceLink()
        .id(function (d) {
          return d.name;
        })
        .distance(function () {
          return 150;
        })
        .links(graph.links)
    )

    .on("tick", ticked);

  svg
    .append("line")
    .style("stroke", "lightgreen")
    .style("stroke-width", 0)
    .attr("class", "newlink");

  svg.on("mousemove", function (event) {
    const link = svg.select(".newlink");
    if (graph.newLink) {
      link.style("stroke-width", 10);
      const source = graph.nodes.filter(
        (node) => node.name == graph.newLink
      )[0];
      link.attr("x1", source.x);
      link.attr("y1", source.y);
      link.attr("x2", d3.pointer(event)[0]);
      link.attr("y2", d3.pointer(event)[1]);
    } else {
      link.style("stroke-width", 0);
    }
  });

  var glink = svg
    .on("mousedown", async (d, i) => dispatchEvent(d, i, "SVG"))
    .append("g")
    .attr("class", "links")
    .selectAll(".link")
    .data(graph.links)
    .enter();

  var link = glink
    .append("line")
    .attr("class", function (d) {
      return "link " + d.source.name + d.target.name;
    })
    .attr("stroke", "black")
    .attr("stroke-width", function (d) {
      return 3;
    })
    .on("mousedown", async (d, i) => dispatchEvent(d, i, "LINK"));

  var linktext = glink
    .append("text")
    .attr("class", function (d) {
      return "linktext " + d.source.name + d.target.name;
    })

    .on("mousedown", async (d, i) => dispatchEvent(d, i, "LINK"))

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
    .attr("r", radius - 0.75)
    .attr("fill", "red")
    .on("mousedown", async (d, i) => dispatchEvent(d, i, "NODE"))
    .call(
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    )
    .on("mouseout", function (d) {
      d3.select(this).attr("r", initSize);
    })
    .on("mouseover", function (d) {
      d3.select(this).attr("r", emphSize);
    });

  var nodetext = gnode
    .append("text")
    .attr("text-anchor", "middle")
    .attr("class", function (d) {
      return "nodetext " + d.name;
    })
    .text(function (d) {
      return d.name;
    })
    .on("mousedown", async (d, i) => dispatchEvent(d, i, "NODE"))
    .on("mouseover", function (d, i) {
      gnode.selectAll(".node." + i.name).attr("r", emphSize);
    })
    .on("mouseout", function (d, i) {
      gnode.selectAll(".node." + i.name).attr("r", initSize);
    })
    .call(
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    );

  var nodesubtext = gnode
    .append("text")
    .attr("text-anchor", "middle")
    .attr("dy", "0.8em")
    .attr("class", function (d) {
      return "nodesubtext " + d.name;
    })

    .on("mousedown", async (d, i) => dispatchEvent(d, i, "NODE"))
    .on("mouseover", function (d, i) {
      gnode.selectAll(".node." + i.name).attr("r", emphSize);
    })
    .on("mouseout", function (d, i) {
      gnode.selectAll(".node." + i.name).attr("r", initSize);
    })
    .call(
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    );
  function ticked() {
    nodetext
      .attr("x", function (d) {
        return d.x;
      })
      .attr("y", function (d) {
        return d.y;
      });
    nodesubtext
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
        return (d.x = Math.max(radius, Math.min(width - radius, d.x)));
      })
      .attr("cy", function (d) {
        return (d.y = Math.max(radius, Math.min(height - radius, d.y)));
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

function dispatchEvent(d, i, type) {
  const event = new CustomEvent("svg-graph-event", {
    bubbles: true,
    composed: true,
    detail: { data: i, type },
  });
  d.srcElement.dispatchEvent(event);
}
