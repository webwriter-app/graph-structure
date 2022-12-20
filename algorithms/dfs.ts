export async function dfs(
  start,
  graph,
  target,
  animateNodeByName,
  animateNodeByNamev2
) {
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
    await animateNodeByName(current.name);
    if (current.name == target) {
      await animateNodeByNamev2(current.name);

      return;
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
}
