import { delay } from "../utils/sleep";

export async function animateLinkBySourceTarget(svg, source, target) {
  const translate_speed = 1000;
  let gnode = svg.selectAll("g");
  let x = gnode.selectAll(
    ".link." + source + target + ", .link." + target + source
  );
  x.transition()
    .delay((translate_speed * 2) / 5)
    .duration(translate_speed / 5)
    .attr("stroke", "red")
    .attr("stroke-width", function (d) {
      return 1;
    })
    .transition()
    .duration(translate_speed / 5)
    .attr("stroke-width", function (d) {
      return 3;
    });

  await delay(translate_speed);
}
