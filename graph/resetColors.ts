export function resetColors(svg) {
  let gnode = svg.selectAll("g");
  let nodes = gnode.selectAll(".node");
  nodes.style("fill", "red");
  let links = gnode.selectAll(".link");
  links.attr("stroke", "black");
}
