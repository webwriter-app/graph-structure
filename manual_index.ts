import { LitElementWw } from '@webwriter/lit';
import { css, html, PropertyValueMap } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { property } from 'lit/decorators/property.js';
import './components/algo_selection';
import './components/edit_graph.ts';
import './components/graph_component.ts';
import './components/manual_animations.ts';
import { animateLinks } from './graph/animateLinks';
import { animateNodes } from './graph/animateNodes';
import { resetColors } from './graph/resetColors';
import { setNodeSubText } from './graph/setNodeSubText';
import { AnimationStatusType, AnimationType, iGraph } from './types';
import { delay } from './utils/sleep';

import SlButton from '@shoelace-style/shoelace/dist/components/button/button.component.js';
import SlTooltip from '@shoelace-style/shoelace/dist/components/tooltip/tooltip.component.js';
import SlTabGroup from '@shoelace-style/shoelace/dist/components/tab-group/tab-group.component.js';
import SlTab from '@shoelace-style/shoelace/dist/components/tab/tab.component.js';
import SlTabPanel from '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.component.js';
import SlOption from '@shoelace-style/shoelace/dist/components/option/option.component.js';
import SlSelect from '@shoelace-style/shoelace/dist/components/select/select.component.js';
import SlIcon from '@shoelace-style/shoelace/dist/components/icon/icon.component.js';

import { EditGraph } from './components/edit_graph';
import { Graph } from './components/graph_component';
import { ManualAnimations } from './components/manual_animations';
import { AlgoSelection } from './components/algo_selection';

import pencil from 'bootstrap-icons/icons/pencil.svg';
import braces from 'bootstrap-icons/icons/braces-asterisk.svg';
import carretRight from 'bootstrap-icons/icons/caret-right.svg';

@customElement('webwriter-manualgraphviz')
export default class GraphViz extends LitElementWw {
    private _graph: iGraph = {
        newLink: '',
        nodes: [
            { name: 'Ina' },
            { name: 'Bob' },
            { name: 'Chen' },
            { name: 'Ana' },
            { name: 'Ethan' },
            { name: 'George' },
            { name: 'Frank' },
            { name: 'Hanes' },
        ],
        links: [
            { source: 'Ina', target: 'Bob', weight: 3 },
            { source: 'Chen', target: 'Bob', weight: 2 },
            { source: 'Ana', target: 'Chen', weight: 1 },
            { source: 'Ana', target: 'Frank', weight: 1 },
            { source: 'Chen', target: 'Frank', weight: 4 },
            { source: 'Hanes', target: 'Frank', weight: 4 },
            { source: 'Hanes', target: 'George', weight: 2 },
            { source: 'Ana', target: 'Ethan', weight: 1 },
        ],
    };

    public get graph() {
        return this._graph;
    }
    @property({ type: Object })
    public set graph(value) {
        if (!value) {
            this._graph = {
                newLink: '',
                nodes: [],
                links: [],
            };
            return;
        }

        const g = {
            newLink: '',
            nodes: value.nodes.map((n) => ({ name: n.name })),
            links: value.links.map((l) => ({ source: l.source, target: l.target, weight: l.weight })),
        };
        this._graph = g;
    }

    @property({ type: Object, attribute: true, reflect: true })
    accessor animation: AnimationType = [];
    @property({ type: Boolean }) accessor editable: boolean = false;

    @state() private accessor svg: any = null;
    @state() private accessor animationStatus: AnimationStatusType = 'STOP';
    @state() private accessor animationPosition: number = 0;
    @state() private accessor currentTab: string = 'manual';
    @state() private accessor event: CustomEvent = null;

    @state() private accessor mode: 'edit' | 'animation' | 'execute' = 'edit';

    @property({ type: String, attribute: true, reflect: true })
    private accessor algorithm: 'DFS' | 'SPANTREE' | 'DIJKSTRA' | 'CYCLE' | 'BFS' | 'COLORING' = 'SPANTREE';

    public static get scopedElements() {
        return {
            'sl-button': SlButton,
            'sl-tooltip': SlTooltip,
            'sl-tab-group': SlTabGroup,
            'sl-tab': SlTab,
            'sl-tab-panel': SlTabPanel,
            'display-graph': Graph,
            'edit-graph': EditGraph,
            'manual-animations': ManualAnimations,
            'algo-selection': AlgoSelection,
            'sl-select': SlSelect,
            'sl-option': SlOption,
            'sl-icon': SlIcon,
        };
    }

    async animateGraph() {
        if (this.animationStatus === 'RUN') {
            if (this.animationPosition < this.animation.length) {
                const currentStep = this.animation[this.animationPosition];

                if (currentStep.type == 'RESET') resetColors(this.svg);

                if (currentStep.type == 'NODE') animateNodes(this.svg, currentStep.data.names, currentStep.data.colors);
                if (currentStep.type == 'LINK') animateLinks(this.svg, currentStep.data.links, currentStep.data.colors);
                if (currentStep.type == 'SetNodeSubText')
                    setNodeSubText(this.svg, currentStep.data.node, currentStep.data.text);
                this.animationPosition = this.animationPosition + 1;
                await delay(2000);
                this.animateGraph();
            } else {
                this.animationPosition = 0;
                this.animationStatus = 'STOP';
            }
        }
    }

    constructor() {
        super();

        addEventListener('svg-graph-event', (e: CustomEvent) => {
            this.event = e;
        });

        this.addEventListener('svg-update', (e: CustomEvent) => {
            this.svg = e.detail;
        });

        this.addEventListener('animation-status-update', (e: CustomEvent) => {
            this.animationStatus = e.detail;
        });

        this.addEventListener('animate-graph', this.animateGraph);

        this.addEventListener('graph-update', (e: CustomEvent) => {
            this.graph = e.detail;
        });

        this.addEventListener('animation-position-update', (e: CustomEvent) => {
            this.animationPosition = e.detail;
        });

        this.addEventListener('animation-update', (e: CustomEvent) => {
            this.animation = e.detail;
            console.log(this.animation);
        });

        this.addEventListener('algo-update', (e: CustomEvent) => {
            this.algorithm = e.detail;
            console.log(this.algorithm);
        });

        this.addEventListener('algo-update', (e: CustomEvent) => {
            this.algorithm = e.detail;
        });

        this.addEventListener('reset-graph', this.resetGraph);
    }

    protected updated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        if (_changedProperties.has('editable')) {
            if ((this.shadowRoot.querySelector('sl-tab-group') as any).show)
                (this.shadowRoot.querySelector('sl-tab-group') as any).show('manual');
        }
    }

    resetGraph() {
        const temp = { ...this.graph };
        this.graph = undefined;
        this.graph = temp;
    }

    static styles = css`
        #subcontainer {
            width: 50%;
        }
        #container {
            display: flex;
            flex-direction: row;
            width: 100%;
        }
    `;

    render() {
        return html`<div>
            ${this.renderModeSwitch()}
            <sl-tab-group
                @sl-tab-show=${(e) => {
                    this.animationStatus = 'STOP';
                    this.resetGraph();
                    this.currentTab = e.detail.name;
                    document.body.style.cursor = 'auto';
                }}
            >
                <!-- <sl-tab slot="nav" panel="manual">Animation</sl-tab>
                ${this.isContentEditable
                    ? html`<sl-tab slot="nav" panel="graph">Graph</sl-tab
                          ><sl-tab slot="nav" panel="algo">Execute</sl-tab>`
                    : null} -->

                <sl-tab-panel name="manual" ?active=${this.mode === 'animation'}>
                    <manual-animations
                        .oldRecordedAnimation=${this.animation}
                        .event=${this.event}
                        ?editable=${this.isContentEditable}
                        currentTab=${this.currentTab}
                        animationStatus=${this.animationStatus}
                        .svg=${this.svg}
                    ></manual-animations>
                </sl-tab-panel>
                ${this.isContentEditable
                    ? html`<sl-tab-panel name="graph" ?active=${this.mode === 'edit'}>
                              <edit-graph .event=${this.event} .graph=${this.graph}></edit-graph>
                          </sl-tab-panel>
                          <sl-tab-panel name="algo" ?active=${this.mode === 'execute'}>
                              <algo-selection
                                  .event=${this.event}
                                  ?editable=${this.isContentEditable}
                                  algorithm=${this.algorithm}
                                  currentTab=${this.currentTab}
                                  animationStatus=${this.animationStatus}
                                  .graph=${this.graph}
                              ></algo-selection>
                          </sl-tab-panel> `
                    : null}
            </sl-tab-group>

            <display-graph .graph=${this.graph}></display-graph>
        </div>`;
    }

    renderModeSwitch() {
        return html`
            <sl-select
                size="small"
                @sl-change=${(e) => (this.mode = e.target.value)}
                .value=${this.mode}
                default-value="edit"
            >
                <span slot="prefix">
                    <sl-icon
                        src=${this.mode === 'edit' ? pencil : this.mode === 'animation' ? carretRight : braces}
                    ></sl-icon>
                </span>
                <sl-option value="edit"
                    ><span slot="prefix"> <sl-icon src=${pencil}></sl-icon> </span>Edit
                </sl-option>
                <sl-option value="animation">
                    <span slot="prefix"> <sl-icon src=${carretRight}></sl-icon> </span>Animation
                </sl-option>
                <sl-option value="execute">
                    <span slot="prefix"> <sl-icon src=${braces}></sl-icon> </span>Execute
                </sl-option>
            </sl-select>
        `;
    }
}
