import { LitElementWw } from "@webwriter/lit";
import { css, html, PropertyValueMap } from "lit";
import { customElement, state } from "lit/decorators.js";
import { property } from "lit/decorators/property.js";
import { iGraph } from "../types";
import {
  addLink,
  addNode,
  containsLink,
  deleteLink,
  deleteNode,
  iGraphAfterRender,
} from "../utils/updateGraph";

@customElement("edit-graph")
export class EditGraph extends LitElementWw {
  @property({ type: Object }) graph: iGraph = {
    newLink: "",
    nodes: [],
    links: [],
  };

  @state() action: string = "";
  @state() private selectedNode: string = "";
  @state() private newLinkWeight: number = 1;
  @state() private newNode: string = "";

  updateGraph() {
    this.dispatchEvent(
      new CustomEvent("graph-update", {
        bubbles: true,
        composed: true,
        detail: this.graph,
      })
    );
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    document
      .querySelector("#main")
      .shadowRoot.querySelector("graph-graph")
      .addEventListener("svg-graph-event", (e: CustomEvent) => {
        if (this.action == "add node") {
          this.graph = addNode(this.graph, this.newNode);
          this.updateGraph();
          this.action = "";
          document.body.style.cursor = "auto";

          return;
        }
        if (e.detail.type == "LINK") {
          if (this.action == "deleteLink") {
            (this.graph as unknown as iGraphAfterRender) = deleteLink(
              this.graph,
              e.detail.data.source.name,
              e.detail.data.target.name
            );
            this.action = "";
            this.updateGraph();
            document.body.style.cursor = "auto";

            return;
          }
        }
        if (e.detail.type == "NODE") {
          if (this.action == "delete") {
            (this.graph as unknown as iGraphAfterRender) = deleteNode(
              this.graph,
              e.detail.data.name
            );
            this.action = "";
            this.updateGraph();
            document.body.style.cursor = "auto";
            return;
          }
          if (this.action == "add link") {
            this.graph.newLink = e.detail.data.name;
            this.updateGraph();
            this.action = "add link 2";
            this.selectedNode = e.detail.data.name;
            return;
          }
          if (this.action == "add link 2") {
            if (
              !containsLink(
                this.graph,
                this.selectedNode,
                e.detail.data.name
              ) &&
              this.selectedNode !== e.detail.data.name
            ) {
              this.graph = addLink(
                this.graph,
                this.selectedNode,
                e.detail.data.name,
                this.newLinkWeight
              );
            }
            this.graph.newLink = "";
            this.updateGraph();
            this.action = "";
            document.body.style.cursor = "auto";
            return;
          }
        }
      });
  }

  static styles = css`
    .panel * {
      display: flex;
      gap: 10px;
      padding: 10px;
    }
  `;

  render() {
    return html`<sl-tab-group>
      <sl-tab slot="nav" panel="addnode">Add Node</sl-tab>
      <sl-tab slot="nav" panel="deletenode">Delete Node</sl-tab>
      <sl-tab slot="nav" panel="addlink">Add Link</sl-tab>
      <sl-tab slot="nav" panel="deletelink">Delete Link</sl-tab>

      <sl-tab-panel class="panel" name="addnode">
        <span
          >Enter a name click "Add Node" and then click the graph to add a
          node.</span
        >
        <div class="buttonAndInput">
          <sl-input
            @input="${(e) => (this.newNode = e.target.value)}"
            label="Name"
          ></sl-input>
          <sl-button
            style=${"align-items: flex-end"}
            @click="${() => {
              this.action = "add node";
              document.body.style.cursor = "crosshair";
            }}"
            >Add Node</sl-button
          >
        </div>
      </sl-tab-panel>
      <sl-tab-panel class="panel" name="deletenode">
        <span
          >Click "Delete Node" and then the Node you want to delete to delete a
          Node.</span
        >
        <div class="buttonAndInput">
          <sl-button
            @click="${() => {
              document.body.style.cursor = "crosshair";

              this.action = "delete";
            }}"
            >Delete Node</sl-button
          >
        </div>
      </sl-tab-panel>
      <sl-tab-panel class="panel" name="addlink">
        <span
          >Enter a weight click "Add Link" and then first click the source and
          then the target of the link to add a link.</span
        >
        <div class="buttonAndInput">
          <sl-input
            @input="${(e) => (this.newLinkWeight = e.target.value)}"
            type="number"
            label="Weight"
          ></sl-input>

          <sl-button
            style=${"align-items: flex-end"}
            @click="${() => {
              this.action = "add link";
              document.body.style.cursor = "crosshair";
            }}"
            >Add Link</sl-button
          >
        </div>
      </sl-tab-panel>
      <sl-tab-panel class="panel" name="deletelink">
        <span
          >Click "Delete Link" and then the Link you want to delete to delete a
          Link.</span
        >
        <div class="buttonAndInput">
          <sl-button
            @click="${() => {
              document.body.style.cursor = "crosshair";

              this.action = "deleteLink";
            }}"
            >Delete Link</sl-button
          >
        </div>
      </sl-tab-panel>
    </sl-tab-group> `;
  }
}
