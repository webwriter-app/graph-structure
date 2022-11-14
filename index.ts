import { LitElementWw } from "@webwriter/lit";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/dfs_component.ts";
import "./components/dijkstra_component.ts";

const graph = {
  nodes: [
    { name: "Ina" },
    { name: "Bob" },
    { name: "Chen" },
    { name: "Dawg" },
    { name: "Ethan" },
    { name: "George" },
    { name: "Frank" },
    { name: "Hanes" },
  ],
  links: [
    { source: "Ina", target: "Bob", weight: 3 },
    { source: "Chen", target: "Bob", weight: 2 },
    { source: "Dawg", target: "Chen", weight: 1 },
    { source: "Dawg", target: "Frank", weight: 1 },
    { source: "Chen", target: "Frank", weight: 4 },
    { source: "Hanes", target: "Frank", weight: 4 },
    { source: "Hanes", target: "George", weight: 2 },
    { source: "Dawg", target: "Ethan", weight: 1 },
  ],
};
@customElement("graph-viz")
export class GraphViz extends LitElementWw {
  render() {
    //return html`<dfs-graph graph=${JSON.stringify(graph)} />`;
    return html`<dijkstra-graph graph=${JSON.stringify(graph)} />`;
  }
}
