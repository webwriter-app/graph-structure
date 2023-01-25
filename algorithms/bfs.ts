import { AnimationType } from "..";

export function bfs(start, graph, target) {
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

  let queue = [];
  queue.splice(0, 0, start);
  visited[start.name] = true;

  while (queue.length != 0) {
    let current = queue.pop();

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

    if (visited[current.name] == false) {
      visited[current.name] = true;
    }

    for (let node = 0; node < adjacent[current.name].length; node++) {
      if (
        !visited[adjacent[current.name][node].name] &&
        !queue
          .map((node) => node.name)
          .includes(adjacent[current.name][node].name)
      )
        queue.splice(0, 0, adjacent[current.name][node]);
    }
  }

  return animation;
}
