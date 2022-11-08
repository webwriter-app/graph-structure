import * as d3 from "d3";
import { delay } from "../utils/sleep";

const translate_speed = 2000;

export async function dfs(goal, start, graph, comp) {
  let visited = {};
  let adjacent = {};
  for (let n of graph.nodes) {
    adjacent[n.name] = [];
    visited[n.name] = false;
  }
  for (let l of graph.links) {
    adjacent[l.source.name].push(l.target);
    adjacent[l.target.name].push(l.source);
  }

  let stack = [];
  stack.push(start);

  while (stack.length != 0) {
    // Pop a vertex from stack and print it
    let current = stack.pop();
    let x = d3.select(comp.shadowRoot.querySelector(".node." + current.name));
    x.transition()
      .delay((translate_speed * 2) / 5)
      .duration(translate_speed / 5)
      .attr("r", 10)
      .transition()
      .duration(translate_speed / 5)
      .attr("r", 15)
      .style("fill", "#D0E1C3")
      .style("stroke-width", "0");

    await delay(translate_speed);

    // Stack may contain same vertex twice. So
    // we need to print the popped item only
    // if it is not visited.
    if (visited[current.name] == false) {
      visited[current.name] = true;
    }

    // Get all adjacent vertices of the
    // popped vertex s. If a adjacent has
    // not been visited, then push it
    // to the stack.
    for (let node = 0; node < adjacent[current.name].length; node++) {
      if (!visited[adjacent[current.name][node].name])
        stack.push(adjacent[current.name][node]);
    }
  }
}
