import { LitElementWw } from '@webwriter/lit';
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { property } from 'lit/decorators/property.js';
import { iGraph } from '../types';

import { select } from 'd3-selection';
import { buildChart } from '../graph/buildGraph';

@customElement('display-graph')
export class Graph extends LitElementWw {
    @property() width: number = 600;
    @property() height: number = 600;

    private _graph: iGraph = {
        newLink: '',
        nodes: [],
        links: [],
    };
    @property({ type: Object })
    public get graph() {
        return this._graph;
    }
    public set graph(value) {
        if (!value) {
            this._graph = {
                newLink: '',
                nodes: [],
                links: [],
            };
        } else {
            this._graph = value;
        }
    }

    updated() {
        let svg = select(this.shadowRoot.querySelectorAll('.chart')[0])
            .attr('width', this.width)
            .attr('height', this.height);

        svg.selectAll('*').remove();

        console.log('graph', { ...this.graph });
        buildChart(svg, this.width, this.height, this.graph);

        const event = new CustomEvent('svg-update', {
            bubbles: true,
            composed: true,
            detail: svg,
        });
        this.dispatchEvent(event);
    }

    static styles = css`
        svg {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
    `;

    render() {
        return html`<svg class="chart"></svg>`;
    }
}
