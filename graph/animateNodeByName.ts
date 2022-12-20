import { delay } from "../utils/sleep";
import { initSize } from "./buildGraph";

export async function animateNodeByName(svg, name) {
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
    .style("fill", "#D0E1C3")
    .style("stroke-width", "0");

  await delay(translate_speed);
}
