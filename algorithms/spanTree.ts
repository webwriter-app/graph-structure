import { AnimationType } from "../types";

export function spanTree(graph) {
  let animation: AnimationType = [];

  let done = false;

  let edgesOfSpan = [];

  let connectetComponents = [];

  for (let node of graph.nodes) {
    connectetComponents.push([node.name]);
  }

  while (!done) {
    let cheapestEdges = connectetComponents.map((x) => null);
    for (let edge of graph.links) {
      if (
        connectetComponents.some(
          (comp) =>
            comp.includes(edge.source.name) && !comp.includes(edge.target.name)
        )
      ) {
        if (
          ispreferredover(
            edge,
            cheapestEdges[
              connectetComponents
                .map((node) => node.includes(edge.source.name))
                .indexOf(true)
            ]
          )
        ) {
          cheapestEdges[
            connectetComponents
              .map((node) => node.includes(edge.source.name))
              .indexOf(true)
          ] = edge;
        }
        if (
          ispreferredover(
            edge,
            cheapestEdges[
              connectetComponents
                .map((node) => node.includes(edge.target.name))
                .indexOf(true)
            ]
          )
        ) {
          cheapestEdges[
            connectetComponents
              .map((node) => node.includes(edge.target.name))
              .indexOf(true)
          ] = edge;
        }
      }
    }
    if (cheapestEdges.every((edge) => edge == null)) {
      done = true;
    } else {
      for (let edge of cheapestEdges) {
        if (
          edge !== null &&
          edgesOfSpan.every(
            (e) =>
              e.source.name != edge.source.name ||
              e.target.name != edge.target.name
          )
        ) {
          edgesOfSpan.push(edge);
          animation.push({
            type: "LINK",
            data: {
              links: [{ source: edge.source.name, target: edge.target.name }],
              colors: ["green"],
            },
          });
        }
      }

      let newComponents = [];
      for (let edge of edgesOfSpan) {
        for (let j = 0; j < newComponents.length; j++) {
          if (
            newComponents[j].includes(edge.source.name) &&
            !newComponents[j].includes(edge.target.name)
          ) {
            newComponents[j] = [...newComponents[j], edge.target.name];
          }
          if (
            newComponents[j].includes(edge.target.name) &&
            !newComponents[j].includes(edge.source.name)
          ) {
            newComponents[j] = [...newComponents[j], edge.source.name];
          }
          if (
            newComponents[j].includes(edge.target.name) &&
            newComponents[j].includes(edge.source.name)
          ) {
          }
        }
        if (!newComponents.some((x) => x.includes(edge.source.name)))
          newComponents.push([edge.source.name, edge.target.name]);
      }

      for (let i = 0; i < newComponents.length; i++) {
        for (let j = 0; j < newComponents.length; j++) {
          if (newComponents[j].some((x) => newComponents[i].includes(x))) {
            newComponents[i] = [
              ...new Set([...newComponents[j], ...newComponents[i]]),
            ];
          }
        }
      }

      connectetComponents = [...newComponents];
    }
  }

  return animation;
}

function ispreferredover(edge1, edge2) {
  return (
    edge2 == null || edge1.weight < edge2.weight || edge1.weight == edge2.weight
  );
}
