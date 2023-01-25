import { AnimationType } from "..";

export function coloring(graph) {
  let animation: AnimationType = [];

  let colors = [];

  for (let i = 0; i < graph.nodes.length; i++) {
    colors[i] = 0;
  }

  let adjacent = {};
  for (let n of graph.nodes) {
    adjacent[n.name] = [];
  }
  for (let l of graph.links) {
    adjacent[l.source.name].push(l.target);
    adjacent[l.target.name].push(l.source);
  }

  if (graph.nodes.length == 1) return;

  for (let maxColors = 2; maxColors <= graph.nodes.length; maxColors++) {
    if (coloredRight(colors, graph, adjacent)) break;
    while (
      !coloredRight(colors, graph, adjacent) &&
      colors.some((el) => el < maxColors - 1)
    ) {
      const data = nextColoring(colors, maxColors, graph);
      colors = data.colors;
      animation = [...animation, ...data.animation];
    }
  }
  return animation;
}

function nextColoring(colors, maxColors, graph) {
  let newColoring = [...colors];
  let animation: AnimationType = [
    {
      type: "NODE",
      data: { names: [], colors: [] },
    },
  ];
  for (let i = 0; i < colors.length; i++) {
    if (colors[i] < maxColors - 1) {
      newColoring[i] = colors[i] + 1;

      animation[0].data.names.push(graph.nodes[i].name as string);

      animation[0].data.colors.push(mapNumberToColor(colors[i] + 1));

      for (let j = 0; j < i; j++) {
        newColoring[j] = 0;

        animation[0].data.names.push(graph.nodes[j].name);

        animation[0].data.colors.push("red");
      }

      break;
    }
  }
  return { colors: newColoring, animation };
}

function coloredRight(colors, graph, adjacent) {
  for (let i = 0; i < graph.nodes.length; i++) {
    for (let neigh of adjacent[graph.nodes[i].name]) {
      if (
        colors[i] ===
        colors[graph.nodes.map((node) => node.name).indexOf(neigh.name)]
      ) {
        return false;
      }
    }
  }
  return true;
}

function mapNumberToColor(number) {
  if (number == 0) return "red";
  if (number == 1) return "yellow";
  if (number == 2) return "blue";
  if ((number = 3)) return "green";
}
