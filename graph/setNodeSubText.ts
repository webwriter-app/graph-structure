export function setNodeSubText(svg, node, text) {
  let gnode = svg.selectAll("g");
  let x = gnode.selectAll(".nodesubtext." + node);
  x.text(function (d) {
    return text;
  });
}
