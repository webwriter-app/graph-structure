import { LitElementWw } from "@webwriter/lit";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import "./components/dfs_component.ts";
import "./components/dijkstra_component.ts";

@customElement("graph-viz")
export class GraphViz extends LitElementWw {
  render() {
    //return html`<dfs-graph />`;
    return html`<dfs-graph />`;
  }
}
