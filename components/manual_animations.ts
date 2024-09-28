import { LitElementWw } from '@webwriter/lit';
import { css, html, PropertyValueMap } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { property } from 'lit/decorators/property.js';
import { colorGraphForLinkAnimation } from '../graph/colorGraphForLinkAnimation';
import { colorGraphForNodeAnimation } from '../graph/colorGraphForNodeAnimation';
import { AnimationStatusType, AnimationType } from '../types';
import {
    dispatchAnimationEvent,
    dispatchGraphReset,
    setAnimation,
    setAnimationPosition,
    setAnimationStatus,
} from '../utils/events';
import { delay } from '../utils/sleep';

import SlButton from '@shoelace-style/shoelace/dist/components/button/button.component.js';
import SlTooltip from '@shoelace-style/shoelace/dist/components/tooltip/tooltip.component.js';
import SlInput from '@shoelace-style/shoelace/dist/components/input/input.component.js';
import SlColorPicker from '@shoelace-style/shoelace/dist/components/color-picker/color-picker.component.js';
import SlIcon from '@shoelace-style/shoelace/dist/components/icon/icon.component.js';

// import pencil from '@shoelace-style/shoelace/dist/assets/icons/pencil.svg';
// import trash3 from '@shoelace-style/shoelace/dist/assets/icons/trash3.svg';

import trash3 from 'bootstrap-icons/icons/trash3.svg';

@customElement('manual-animations')
export class ManualAnimations extends LitElementWw {
    @property({ type: Object }) accessor svg: any = null;
    @property({ type: Boolean, reflect: true }) accessor editable: boolean = false;
    @property({ type: String }) accessor currentTab: string = 'algo';
    @property({ type: String }) accessor animationStatus: AnimationStatusType = 'STOP';
    @property({ type: Object }) accessor event: CustomEvent = null;
    @property() accessor oldRecordedAnimation: AnimationType = [];
    @state() accessor action: string = 'RECORDING';
    @state() accessor recordedAnimation: AnimationType = [];
    @state() accessor animationColor: string = '#4a90e2';
    @state() accessor recording: 'NODE' | 'LINK' | '' = '';
    @state() accessor currentAnimationBeingEditet: undefined | number = undefined;

    public static get scopedElements() {
        return {
            'sl-button': SlButton,
            'sl-tooltip': SlTooltip,
            'sl-input': SlInput,
            'sl-color-picker': SlColorPicker,
            'sl-icon': SlIcon,
        };
    }

    protected firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        this.recordedAnimation = [...this.oldRecordedAnimation];
    }

    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        if (_changedProperties.has('currentTab')) {
            this.currentAnimationBeingEditet = undefined;
        }
        const e = this.event;
        if (!e) return;
        if (_changedProperties.has('event')) {
            if (this.currentTab !== 'manual') return;
            if (e.detail.type == 'LINK') {
                if (
                    this.action == 'RECORDING' &&
                    this.recording == 'LINK' &&
                    this.recordedAnimation[this.currentAnimationBeingEditet]
                ) {
                    let updatedAnimation;
                    if (
                        this.recordedAnimation[this.currentAnimationBeingEditet].data.links.every(
                            (link) =>
                                link.source !== e.detail.data.source.name || link.target !== e.detail.data.target.name
                        )
                    ) {
                        updatedAnimation = {
                            type: 'LINK' as const,
                            data: {
                                links: [
                                    ...this.recordedAnimation[this.currentAnimationBeingEditet].data.links,
                                    {
                                        source: e.detail.data.source.name,
                                        target: e.detail.data.target.name,
                                    },
                                ],
                                colors: [
                                    ...this.recordedAnimation[this.currentAnimationBeingEditet].data.colors,
                                    this.animationColor,
                                ],
                            },
                        };
                    } else {
                        let indexToRemove = -1;
                        updatedAnimation = {
                            type: 'LINK' as const,
                            data: {
                                links: [
                                    ...this.recordedAnimation[this.currentAnimationBeingEditet].data.links.filter(
                                        (link, index) => {
                                            if (
                                                link.source !== e.detail.data.source.name ||
                                                link.target !== e.detail.data.target.name
                                            ) {
                                                return true;
                                            } else {
                                                indexToRemove = index;
                                                return false;
                                            }
                                        }
                                    ),
                                ],
                                colors: [
                                    ...this.recordedAnimation[this.currentAnimationBeingEditet].data.colors.filter(
                                        (_, index) => index !== indexToRemove
                                    ),
                                ],
                            },
                        };
                    }

                    const newRecordedAnimations = [...this.recordedAnimation];
                    newRecordedAnimations[this.currentAnimationBeingEditet] = updatedAnimation;
                    this.recordedAnimation = [...newRecordedAnimations];

                    colorGraphForLinkAnimation(this.svg, updatedAnimation.data.links, updatedAnimation.data.colors);
                    return;
                }
            }
            if (e.detail.type == 'NODE') {
                if (
                    this.action == 'RECORDING' &&
                    this.recording == 'NODE' &&
                    this.recordedAnimation[this.currentAnimationBeingEditet]
                ) {
                    let updatedAnimation;
                    if (
                        !this.recordedAnimation[this.currentAnimationBeingEditet].data.names.includes(
                            e.detail.data.name
                        )
                    ) {
                        updatedAnimation = {
                            type: 'NODE' as const,
                            data: {
                                names: [
                                    ...this.recordedAnimation[this.currentAnimationBeingEditet].data.names,
                                    e.detail.data.name,
                                ],
                                colors: [
                                    ...this.recordedAnimation[this.currentAnimationBeingEditet].data.colors,
                                    this.animationColor,
                                ],
                            },
                        };
                    } else {
                        let indexToRemove = -1;
                        updatedAnimation = {
                            type: 'NODE' as const,
                            data: {
                                names: [
                                    ...this.recordedAnimation[this.currentAnimationBeingEditet].data.names.filter(
                                        (node, index) => {
                                            if (node == e.detail.data.name) {
                                                indexToRemove = index;
                                                return false;
                                            } else {
                                                return true;
                                            }
                                        }
                                    ),
                                ],
                                colors: this.recordedAnimation[this.currentAnimationBeingEditet].data.colors.filter(
                                    (_, index) => index !== indexToRemove
                                ),
                            },
                        };
                    }

                    const newRecordedAnimations = [...this.recordedAnimation];
                    newRecordedAnimations[this.currentAnimationBeingEditet] = updatedAnimation;
                    this.recordedAnimation = [...newRecordedAnimations];

                    colorGraphForNodeAnimation(this.svg, updatedAnimation.data.names, updatedAnimation.data.colors);
                    return;
                }
            }
        }
    }

    static styles = css`
        td,
        th {
            padding: 4px;
        }

        td:not(:last-child) {
            border-right: 1px solid;
            border-color: lightgray;
        }
    `;

    render() {
        return html`<div style="padding: 4px">
            ${this.editable
                ? html`<div style="display: flex; gap: 8px">
                          <sl-button
                              style="margin-top: auto; margin-bottom: auto;"
                              @click="${() => {
                                  this.action = 'RECORDING';
                                  this.recording = 'LINK';
                                  document.body.style.cursor = 'crosshair';

                                  this.recordedAnimation.push({
                                      type: 'LINK',
                                      data: { links: [], colors: [] },
                                  });
                                  this.currentAnimationBeingEditet = this.recordedAnimation.length - 1;

                                  colorGraphForLinkAnimation(this.svg, [], []);
                              }}"
                          >
                              Add LINK Animation</sl-button
                          >
                          <sl-button
                              style="margin-top: auto; margin-bottom: auto;"
                              @click="${() => {
                                  this.action = 'RECORDING';
                                  this.recording = 'NODE';
                                  document.body.style.cursor = 'crosshair';

                                  this.recordedAnimation.push({
                                      type: 'NODE',
                                      data: { names: [], colors: [] },
                                  });
                                  this.currentAnimationBeingEditet = this.recordedAnimation.length - 1;
                                  colorGraphForNodeAnimation(this.svg, [], []);
                              }}"
                              >Add NODE Animation</sl-button
                          >
                          <sl-color-picker
                              value=${this.animationColor}
                              label="Select a color"
                              @sl-change=${(e) => (this.animationColor = e.target.value)}
                          ></sl-color-picker>
                      </div>

                      <p></p>
                      <table>
                          <tr>
                              ${this.recordedAnimation.map(
                                  (animation, index) => html`<th>
                                      <span>${index + 1}. ${animation.type}</span>
                                  </th>`
                              )}
                          </tr>
                          <tr>
                              ${this.recordedAnimation.map(
                                  (animation, index) => html`<td>
                                      <div style="display: flex">
                                          <sl-button
                                              variant=${this.currentAnimationBeingEditet == index
                                                  ? 'danger'
                                                  : 'default'}
                                              @click="${() => {
                                                  this.animationStatus = 'STOP';
                                                  this.currentAnimationBeingEditet = index;
                                                  if (animation.type == 'NODE') {
                                                      this.recording = 'NODE';
                                                      colorGraphForNodeAnimation(
                                                          this.svg,
                                                          animation.data.names,
                                                          animation.data.colors
                                                      );
                                                  }
                                                  if (animation.type == 'LINK') {
                                                      this.recording = 'LINK';
                                                      colorGraphForLinkAnimation(
                                                          this.svg,
                                                          animation.data.links,
                                                          animation.data.colors
                                                      );
                                                  }
                                                  document.body.style.cursor = 'crosshair';
                                              }}"
                                              ><sl-icon name="pencil"></sl-icon
                                          ></sl-button>
                                          <sl-button
                                              @click="${() => {
                                                  this.recordedAnimation = [
                                                      ...this.recordedAnimation.filter((_, i) => i !== index),
                                                  ];
                                                  this.currentAnimationBeingEditet = undefined;
                                                  this.recording = '';
                                                  document.body.style.cursor = 'auto';
                                              }}"
                                              ><sl-icon src=${trash3}></sl-icon
                                          ></sl-button>
                                      </div>
                                  </td>`
                              )}
                          </tr>
                      </table>

                      <p></p>`
                : null}
            <sl-button
                @click="${async () => {
                    this.currentAnimationBeingEditet = undefined;
                    if (this.animationStatus === 'STOP') {
                        document.body.style.cursor = 'auto';
                        setAnimationStatus('RUN', this);
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
                    setAnimationStatus('STOP', this);
                }}"
                >Stop</sl-button
            >
            <sl-button
                @click="${() => {
                    if (this.animationStatus === 'RUN') {
                        setAnimationStatus('PAUSE', this);
                        return;
                    }
                    if (this.animationStatus === 'PAUSE') {
                        setAnimationStatus('RUN', this);
                        dispatchAnimationEvent(this);
                    }
                }}"
                >${this.animationStatus == 'PAUSE' ? 'Play' : 'Pause'}</sl-button
            >
        </div>`;
    }
}
