import { LitElementWw } from "@webwriter/lit";
import { css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import "./algo_index.ts";
import "./manual_index";

@customElement("graph-viz-test")
export class TestGraphViz extends LitElementWw {
  @state() private type: boolean = false;
  @state() private editable_state: boolean = false;

  static styles = css`
    .switches {
      margin-bottom: 10px;
    }
  `;

  render() {
    return html`
      <div class="switches">
        <sl-switch
          style="margin-right: 10px"
          @sl-change=${(e) => {
            this.type = e.target.checked;
          }}
          >${this.type ? "Manual" : "Algos"}</sl-switch
        >
        <sl-switch
          @sl-change=${(e) => {
            this.editable_state = e.target.checked;
          }}
          >${this.editable_state ? "Teacher" : "Student"}</sl-switch
        >
      </div>
      ${this.type
        ? html`<graph-viz-manual
            id="submain"
            ?editable=${this.editable_state}
          ></graph-viz-manual>`
        : html`<graph-viz-algo
            id="submain"
            ?editable=${this.editable_state}
          ></graph-viz-algo>`}
    `;
  }
}
