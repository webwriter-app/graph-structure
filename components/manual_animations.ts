import { LitElementWw } from "@webwriter/lit";
import { html, PropertyValueMap } from "lit";
import { customElement, state } from "lit/decorators.js";
import { property } from "lit/decorators/property.js";
import { colorGraphForLinkAnimation } from "../graph/colorGraphForLinkAnimation";
import { colorGraphForNodeAnimation } from "../graph/colorGraphForNodeAnimation";
import { AnimationStatusType } from "../types";
import {
  dispatchAnimationEvent,
  dispatchGraphReset,
  setAnimation,
  setAnimationPosition,
  setAnimationStatus,
} from "../utils/events";
import { delay } from "../utils/sleep";

export type AnimationType = {
  type: "SetNodeSubText" | "RESET" | "NODE" | "LINK";
  data: any;
}[];

@customElement("manual-animations")
export class ManualAnimations extends LitElementWw {
  @property({ type: Object }) svg: any = null;

  @property({ type: String }) currentTab: string = "algo";
  @property({ type: String }) animationStatus: AnimationStatusType = "STOP";
  @property({ type: Object }) event: CustomEvent = null;

  @state() action: string = "";
  @state() recordedAnimation: AnimationType = [];
  @state() animationColor: string = "#4a90e2";
  @state() recording: "NODE" | "LINK" | "" = "";
  @state() currentAnimationBeingEditet: undefined | number = undefined;

  protected updated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    if (_changedProperties.has("currentTab")) {
      this.currentAnimationBeingEditet = undefined;
    }
    const e = this.event;
    if (!e) return;
    if (_changedProperties.has("event")) {
      if (this.currentTab !== "manual") return;
      if (e.detail.type == "LINK") {
        if (
          this.action == "RECORDING" &&
          this.recording == "LINK" &&
          this.recordedAnimation[this.currentAnimationBeingEditet]
        ) {
          let updatedAnimation;
          if (
            this.recordedAnimation[
              this.currentAnimationBeingEditet
            ].data.links.every(
              (link) =>
                link.source !== e.detail.data.source.name ||
                link.target !== e.detail.data.target.name
            )
          ) {
            updatedAnimation = {
              type: "LINK" as const,
              data: {
                links: [
                  ...this.recordedAnimation[this.currentAnimationBeingEditet]
                    .data.links,
                  {
                    source: e.detail.data.source.name,
                    target: e.detail.data.target.name,
                  },
                ],
                colors: [
                  ...this.recordedAnimation[this.currentAnimationBeingEditet]
                    .data.colors,
                  this.animationColor,
                ],
              },
            };
          } else {
            let indexToRemove = -1;
            updatedAnimation = {
              type: "LINK" as const,
              data: {
                links: [
                  ...this.recordedAnimation[
                    this.currentAnimationBeingEditet
                  ].data.links.filter((link, index) => {
                    if (
                      link.source !== e.detail.data.source.name ||
                      link.target !== e.detail.data.target.name
                    ) {
                      return true;
                    } else {
                      indexToRemove = index;
                      return false;
                    }
                  }),
                ],
                colors: [
                  ...this.recordedAnimation[
                    this.currentAnimationBeingEditet
                  ].data.colors.filter((_, index) => index !== indexToRemove),
                ],
              },
            };
          }

          const newRecordedAnimations = [...this.recordedAnimation];
          newRecordedAnimations[this.currentAnimationBeingEditet] =
            updatedAnimation;
          this.recordedAnimation = [...newRecordedAnimations];

          colorGraphForLinkAnimation(
            this.svg,
            updatedAnimation.data.links,
            updatedAnimation.data.colors
          );
          return;
        }
      }
      if (e.detail.type == "NODE") {
        if (
          this.action == "RECORDING" &&
          this.recording == "NODE" &&
          this.recordedAnimation[this.currentAnimationBeingEditet]
        ) {
          let updatedAnimation;
          if (
            !this.recordedAnimation[
              this.currentAnimationBeingEditet
            ].data.names.includes(e.detail.data.name)
          ) {
            updatedAnimation = {
              type: "NODE" as const,
              data: {
                names: [
                  ...this.recordedAnimation[this.currentAnimationBeingEditet]
                    .data.names,
                  e.detail.data.name,
                ],
                colors: [
                  ...this.recordedAnimation[this.currentAnimationBeingEditet]
                    .data.colors,
                  this.animationColor,
                ],
              },
            };
          } else {
            let indexToRemove = -1;
            updatedAnimation = {
              type: "NODE" as const,
              data: {
                names: [
                  ...this.recordedAnimation[
                    this.currentAnimationBeingEditet
                  ].data.names.filter((node, index) => {
                    if (node == e.detail.data.name) {
                      indexToRemove = index;
                      return false;
                    } else {
                      return true;
                    }
                  }),
                ],
                colors: this.recordedAnimation[
                  this.currentAnimationBeingEditet
                ].data.colors.filter((_, index) => index !== indexToRemove),
              },
            };
          }

          const newRecordedAnimations = [...this.recordedAnimation];
          newRecordedAnimations[this.currentAnimationBeingEditet] =
            updatedAnimation;
          this.recordedAnimation = [...newRecordedAnimations];

          colorGraphForNodeAnimation(
            this.svg,
            updatedAnimation.data.names,
            updatedAnimation.data.colors
          );
          return;
        }
      }
    }
  }

  render() {
    return html`
      <sl-button
        @click="${() => {
          this.action = "RECORDING";
          this.recording = "LINK";
          document.body.style.cursor = "crosshair";

          this.recordedAnimation.push({
            type: "LINK",
            data: { links: [], colors: [] },
          });
          this.currentAnimationBeingEditet = this.recordedAnimation.length - 1;

          colorGraphForLinkAnimation(this.svg, [], []);
        }}"
      >
        Add LINK Animation</sl-button
      >
      <sl-button
        @click="${() => {
          this.action = "RECORDING";
          this.recording = "NODE";
          document.body.style.cursor = "crosshair";

          this.recordedAnimation.push({
            type: "NODE",
            data: { names: [], colors: [] },
          });
          this.currentAnimationBeingEditet = this.recordedAnimation.length - 1;
          colorGraphForNodeAnimation(this.svg, [], []);
        }}"
        >Add NODE Animation</sl-button
      ><sl-color-picker
        value=${this.animationColor}
        label="Select a color"
        @sl-change=${(e) => (this.animationColor = e.target.value)}
      ></sl-color-picker>

      <p></p>

      ${this.recordedAnimation.map(
        (animation, index) => html`<div>
          <p>
            <sl-button
              variant=${this.currentAnimationBeingEditet == index
                ? "danger"
                : "default"}
              @click="${() => {
                this.animationStatus = "STOP";
                this.currentAnimationBeingEditet = index;
                if (animation.type == "NODE") {
                  this.recording = "NODE";
                  colorGraphForNodeAnimation(
                    this.svg,
                    animation.data.names,
                    animation.data.colors
                  );
                }
                if (animation.type == "LINK") {
                  this.recording = "LINK";
                  colorGraphForLinkAnimation(
                    this.svg,
                    animation.data.links,
                    animation.data.colors
                  );
                }
                document.body.style.cursor = "crosshair";
              }}"
              >Select</sl-button
            >${JSON.stringify(animation)}
            <sl-button
              @click="${() => {
                this.recordedAnimation = [
                  ...this.recordedAnimation.filter((_, i) => i !== index),
                ];
                this.currentAnimationBeingEditet = undefined;
                this.recording = "";
                document.body.style.cursor = "auto";
              }}"
              >Remove</sl-button
            >
          </p>
        </div>`
      )}

      <p></p>
      <sl-button
        @click="${async () => {
          this.currentAnimationBeingEditet = undefined;
          if (this.animationStatus === "STOP") {
            document.body.style.cursor = "auto";
            setAnimationStatus("RUN", this);
            dispatchGraphReset(this);
            await delay(200);
            setAnimationPosition(0, this);
            setAnimation([...this.recordedAnimation], this);
            dispatchAnimationEvent(this);
          }
        }}"
        >Execute</sl-button
      >

      <sl-button
        @click="${() => {
          setAnimationStatus("STOP", this);
        }}"
        >Stop</sl-button
      >
      <sl-button
        @click="${() => {
          if (this.animationStatus === "RUN") {
            setAnimationStatus("PAUSE", this);
            return;
          }
          if (this.animationStatus === "PAUSE") {
            setAnimationStatus("RUN", this);
            dispatchAnimationEvent(this);
          }
        }}"
        >${this.animationStatus == "PAUSE" ? "Play" : "Pause"}</sl-button
      >
    `;
  }
}
