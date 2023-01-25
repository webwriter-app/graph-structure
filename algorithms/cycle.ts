import { AnimationType } from "..";

export function cycle(graph) {
  let animation: AnimationType = [];

  let visited = {};
  let finished = {};
  let adjacent = {};
  for (let n of graph.nodes) {
    adjacent[n.name] = [];
    visited[n.name] = false;
  }
  for (let l of graph.links) {
    adjacent[l.source.name].push(l.target);
    adjacent[l.target.name].push(l.source);
  }

  function dfs(current, parent, start, path) {
    if (finished[current.name]) return;
    if (visited[current.name]) {
      if (current.name == start) {
        animation.push({
          type: "NODE",
          data: { names: path, colors: path.map((x) => "#32CD32") },
        });
      }
      return;
    }
    animation.push({
      type: "NODE",
      data: { names: [current.name], colors: ["green"] },
    });

    visited[current.name] = true;
    for (let node = 0; node < adjacent[current.name].length; node++) {
      if (adjacent[current.name][node].name !== parent)
        dfs(adjacent[current.name][node], current.name, start, [
          ...path,
          current.name,
        ]);
    }
    finished[current.name] = true;
  }

  for (let node of graph.nodes) {
    finished = {};
    visited = {};
    dfs(node, node.name, node.name, []);

    animation.push({ type: "RESET", data: {} });
  }

  return animation;
}
