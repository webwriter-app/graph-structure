import { delay } from "../utils/sleep";

export async function animateMultipleLinksBySourceTargetAndColor(
  svg,
  links,
  colors
) {
  const translate_speed = 1000;
  let gnode = svg.selectAll("g");
  for (let i = 0; i < links.length; i++) {
    let x = gnode.selectAll(
      ".link." +
        links[i].source +
        links[i].target +
        ", .link." +
        links[i].target +
        links[i].source
    );
    x.transition()
      .delay((translate_speed * 2) / 5)
      .duration(translate_speed / 5)
      .attr("stroke", colors[i])
      .attr("stroke-width", function (d) {
        return 1;
      })
      .transition()
      .duration(translate_speed / 5)
      .attr("stroke-width", function (d) {
        return 10;
      });
  }

  await delay(translate_speed);
}
