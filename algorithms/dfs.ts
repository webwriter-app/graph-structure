import { AnimationType } from "iGraph";

export function dfs(start, graph, target) {
  let animation: AnimationType = [];

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
    animation.push({
      type: "NODE",
      data: { names: [current.name], colors: ["green"] },
    });

    if (current.name == target) {
      animation.push({
        type: "NODE",
        data: { names: [current.name], colors: ["#32CD32"] },
      });
      return animation;
    }
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
  return animation;
}
