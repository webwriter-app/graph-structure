import { LitElementWw } from "@webwriter/lit";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { property } from "lit/decorators/property.js";
import { dijkstra } from "../algorithms/dijkstra";
import { iGraph } from "./../index";

import "./graph_component.ts";

@customElement("dijkstra-graph")
export class DijkstraGraph extends LitElementWw {
  @property({ type: Object }) graph: iGraph = { nodes: [], links: [] };

  render() {
    return html`<graph-graph .callback=${(i, graph, animateNodeByName) => {
      dijkstra(i, graph, animateNodeByName);
    }} .graph=${this.graph} ></`;
  }
}
