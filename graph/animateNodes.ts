import { delay } from "../utils/sleep";
import { initSize } from "./buildGraph";

export async function animateNodes(svg, names, colors) {
  const translate_speed = 2000;
  let gnode = svg.selectAll("g");

  for (let i = 0; i < names.length; i++) {
    let x = gnode.selectAll(".node." + names[i]);
    x.transition()
      .delay((translate_speed * 2) / 5)
      .duration(translate_speed / 5)
      .attr("r", 10)
      .transition()
      .duration(translate_speed / 5)
      .attr("r", initSize)
      .style("fill", colors[i]);
  }

  await delay(translate_speed);
}
