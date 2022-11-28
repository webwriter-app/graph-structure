import { LitElementWw } from "@webwriter/lit";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { property } from "lit/decorators/property.js";
import { dfs } from "../algorithms/dfs";
import { iGraph } from "./../index";

import "./graph_component.ts";

@customElement("dfs-graph")
export class DfsGraph extends LitElementWw {
  @property({ type: Object }) graph: iGraph = { nodes: [], links: [] };

  render() {
    return html`<graph-graph .callback=${(i, graph, animateNodeByName) => {
      dfs("ina", i, graph, animateNodeByName);
    }} .graph=${this.graph} ></`;
  }
}
