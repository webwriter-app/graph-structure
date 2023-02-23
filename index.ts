import { LitElementWw } from "@webwriter/lit";
import { html } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "./algo_index.ts";
import "./manual_index";

@customElement("ww-manualgraphviz")
export default class TestGraphViz extends LitElementWw {
  //@state() private type: boolean = false;
  @state() private editable_state: boolean = false;
  @property({ type: Boolean }) editable: boolean = true;

  render() {
    return html`<sl-switch
        @sl-change=${(e) => {
          this.editable_state = e.target.checked;
        }}
        >Checked</sl-switch
      >
      ${
        /*this.type
        ? */ html`<graph-viz-manual
          ?editable=${this.editable_state}
        ></graph-viz-manual>`
        /*: html`<graph-viz-algo
            ?editable=${this.editable}
      ></graph-viz-algo>`*/
      } `;
  }
}
