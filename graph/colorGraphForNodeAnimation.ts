import * as d3 from "d3";

export async function colorGraphForNodeAnimation(svg, names, colors) {
  let gnode = svg.selectAll("g");
  let links = gnode.selectAll(".link");
  links.attr("stroke", "lightgray");
  gnode.selectAll(".node").each(function (d, _) {
    if (!names.includes(d.name)) {
      d3.select(this).style("fill", "white");
    }
  });
  for (let i = 0; i < names.length; i++) {
    let x = gnode.selectAll(".node." + names[i]);
    x.transition().style("fill", colors[i]);
  }
}
