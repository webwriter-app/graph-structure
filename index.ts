import { LitElementWw } from "@webwriter/lit";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import "./algo_index.ts";
import "./manual_index";

@customElement("ww-manualgraphviz")
export class TestGraphViz extends LitElementWw {
  //@state() private type: boolean = false;
  //@state() private editable_state: boolean = false;

  render() {
    return html`
      ${
        /*this.type
        ? */ html`<graph-viz-manual id="submain"></graph-viz-manual>`
        /*: html`<graph-viz-algo
            id="submain"
            ?editable=${this.editable_state}
      ></graph-viz-algo>`*/
      }
    `;
  }
}
