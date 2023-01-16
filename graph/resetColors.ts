export function resetColors(svg) {
  let gnode = svg.selectAll("g");
  let x = gnode.selectAll(".node");
  x.transition().style("fill", "red");
}
