import { AnimationType } from "..";

export const dijkstra = (start, graph) => {
  let animation: AnimationType = [];
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
  animation.push({
    type: "SetNodeSubText",
    data: { node: start.name as string, text: 0 },
  });
  while (q.length > 0) {
    var u = getNodeWithLowestDist(q, dist);
    animation.push({
      type: "NODE",
      data: { names: [u.name], colors: ["green"] },
    });
    q = q.filter((e) => e.name !== u.name);

    for (var n of neighbors[u.name]) {
      var alt = dist[u.name] + n.weight;
      animation.push({
        type: "LINK",
        data: {
          links: [{ source: u.name, target: n.name }],
          colors: ["green"],
        },
      });

      if (alt < dist[n.name]) {
        dist[n.name] = alt;
        animation.push({
          type: "SetNodeSubText",
          data: { node: n.name as string, text: alt },
        });

        prev[n.name] = u.name;
      }
    }
  }
  return animation;
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
