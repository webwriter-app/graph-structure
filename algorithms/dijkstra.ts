export const dijkstra = async (start, graph, animateNodeByName) => {
  var dist = {};
  var prev = {};

  var neighbors = {};

  var q = [];

  for (var node of graph.nodes) {
    dist[node.name] = Infinity;
    prev[node.name] = [];
    neighbors[node.name] = [];
    q.push(node);
  }

  for (var link of graph.links) {
    neighbors[link.source.name].push({
      name: link.target.name,
      weight: link.weight,
    });
    neighbors[link.target.name].push({
      name: link.source.name,
      weight: link.weight,
    });
  }

  dist[start.name] = 0;

  while (q.length > 0) {
    var u = getNodeWithLowestDist(q, dist);
    await animateNodeByName(u.name);
    q = q.filter((e) => e.name !== u.name);

    for (var n of neighbors[u.name]) {
      var alt = dist[u.name] + n.weight;
      if (alt < dist[n.name]) {
        dist[n.name] = alt;
        prev[n.name] = u.name;
      }
    }
  }

  console.log(dist);
  console.log(prev);
};

function getNodeWithLowestDist(q, dist) {
  var currentMin = q[0];
  for (var node of q) {
    if (dist[node.name] < dist[currentMin.name]) {
      currentMin = node;
    }
  }

  return currentMin;
}
