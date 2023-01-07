type LinkNode = {
  index: number;
  name: string;
  vx: number;
  vy: number;
  x: number;
  y: number;
};

export type iGraphAfterRender = {
  nodes: { name: string }[];
  links: {
    source: LinkNode;
    target: LinkNode;
    weight: number;
  }[];
};

export function deleteLink(graph, source, target) {
  return {
    nodes: [...graph.nodes],
    links: (graph as unknown as iGraphAfterRender).links.filter(
      (link) => link.source.name !== source || link.target.name !== target
    ),
  };
}

export function deleteNode(graph, name) {
  return {
    nodes: graph.nodes.filter((node) => node.name !== name),
    links: (graph as unknown as iGraphAfterRender).links.filter(
      (link) => link.source.name !== name && link.target.name !== name
    ),
  };
}

export function containsLink(graph, source, target) {
  return (
    (graph as unknown as iGraphAfterRender).links.filter(
      (link) =>
        (link.source.name === source && link.target.name === target) ||
        (link.source.name === target && link.target.name === source)
    ).length > 0
  );
}

export function addNode(graph, name) {
  {
    if (!graph.nodes.map((node) => node.name).includes(name) && name) {
      let x = {
        newLink: "",
        nodes: [...graph.nodes, { name }],
        links: [...graph.links],
      };
      console.log(x);
      return x;
    } else {
      return graph;
    }
  }
}

export function addLink(graph, source, target, weight) {
  return {
    newLink: "",
    nodes: [...graph.nodes],
    links: [
      ...graph.links,
      {
        source,
        target,
        weight,
      },
    ],
  };
}
