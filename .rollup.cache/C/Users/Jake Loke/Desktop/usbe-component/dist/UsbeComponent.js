import { __decorate } from "tslib";
import { html, css, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
export class UsbeComponent extends LitElement {
    constructor() {
        super(...arguments);
        this.header = 'Hey there';
        this.counter = 5;
    }
    __increment() {
        this.counter += 1;
    }
    render() {
        return html `
      <h2>${this.header} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
    `;
    }
}
UsbeComponent.styles = css `
    :host {
      display: block;
      padding: 25px;
      color: var(--usbe-component-text-color, #000);
    }
  `;
__decorate([
    property({ type: String })
], UsbeComponent.prototype, "header", void 0);
__decorate([
    property({ type: Number })
], UsbeComponent.prototype, "counter", void 0);
