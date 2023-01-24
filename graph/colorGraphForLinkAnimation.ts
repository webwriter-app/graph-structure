import * as d3 from "d3";

export async function colorGraphForLinkAnimation(svg, links, colors) {
  let gnode = svg.selectAll("g");
  let nodes = gnode.selectAll(".node");
  nodes.style("fill", "red");
  gnode.selectAll(".link").each(function (d, _) {
    if (
      links.every(
        (link) => link.source !== d.source.name || link.target !== d.target.name
      )
    ) {
      d3.select(this).attr("stroke", "black");
    }
  });
  for (let i = 0; i < links.length; i++) {
    let x = gnode.selectAll(
      ".link." +
        links[i].source +
        links[i].target +
        ", .link." +
        links[i].target +
        links[i].source
    );
    x.transition().attr("stroke", colors[i]);
  }
}
