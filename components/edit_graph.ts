import { LitElementWw } from "@webwriter/lit";
import { html, PropertyValueMap } from "lit";
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
  @property({ type: String }) currentTab: string = "algo";
  @property({ type: Object }) event: CustomEvent = null;
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

  protected updated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    const e = this.event;
    if (!e) return;
    if (_changedProperties.has("event")) {
      if (this.currentTab !== "graph") return;

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
        }
        this.action = "";
        this.updateGraph();
        document.body.style.cursor = "auto";

        return;
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
            !containsLink(this.graph, this.selectedNode, e.detail.data.name) &&
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
    }
  }

  render() {
    return html`
      <sl-card class="card">
        <p>Add Node</p>

        <sl-input
          @input="${(e) => (this.newNode = e.target.value)}"
          label="Name of Node?"
        ></sl-input>
        <sl-button
          @click="${() => {
            this.action = "add node";
            document.body.style.cursor = "crosshair";
          }}"
          >Add Node</sl-button
        >
      </sl-card>

      <sl-card class="card">
        <p>Add Link</p>

        <sl-input
          @input="${(e) => (this.newLinkWeight = e.target.value)}"
          type="number"
          label="Weight of Link?"
        ></sl-input>

        <sl-button
          @click="${() => {
            this.action = "add link";
            document.body.style.cursor = "crosshair";
          }}"
          >Add Link</sl-button
        >
      </sl-card>
      <sl-card class="card">
        <p>Delete Node</p>
        <sl-button
          @click="${() => {
            document.body.style.cursor = "crosshair";

            this.action = "delete";
          }}"
          >Delete Node</sl-button
        >
      </sl-card>
      <sl-card class="card">
        <p>Delete Link</p>
        <sl-button
          @click="${() => {
            document.body.style.cursor = "crosshair";

            this.action = "deleteLink";
          }}"
          >Delete Link</sl-button
        >
      </sl-card>
    `;
  }
}
