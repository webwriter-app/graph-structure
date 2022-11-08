import * as d3 from "d3";

export function buildChart(svg, width, height, graph, onclick) {
  var simulation = d3
    .forceSimulation(graph.nodes)
    .force("charge", d3.forceManyBody().strength(-300))
    .force("center", d3.forceCenter(width / 2, height / 2))
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
      onclick(i);
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
