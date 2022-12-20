import { delay } from "../utils/sleep";
import { initSize } from "./buildGraph";

export async function animateNodeByNamev2(svg, name) {
  const translate_speed = 2000;
  let gnode = svg.selectAll("g");
  let x = gnode.selectAll(".node." + name);
  x.transition()
    .delay((translate_speed * 2) / 5)
    .duration(translate_speed / 5)
    .attr("r", 10)
    .transition()
    .duration(translate_speed / 5)
    .attr("r", initSize)
    .style("fill", "#3BB143")
    .style("stroke-width", "0");

  await delay(translate_speed);
}
