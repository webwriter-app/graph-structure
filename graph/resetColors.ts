export function resetColors(svg) {
  let gnode = svg.selectAll("g");
  let nodes = gnode.selectAll(".node");
  nodes.style("fill", "white");
  let links = gnode.selectAll(".link");
  links.attr("stroke", "lightgray");
}
