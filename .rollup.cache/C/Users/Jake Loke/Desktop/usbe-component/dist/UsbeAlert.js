import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let UsbeAlert = class UsbeAlert extends LitElement {
    constructor() {
        super(...arguments);
        this.type = 'info';
        this.message = '';
    }
    render() {
        return html `<div>${this.message}</div>`;
    }
};
UsbeAlert.styles = css `
    :host {
      display: block;
      padding: 12px;
      border-radius: 6px;
      color: white;
      margin: 8px 0;
    }
    :host([type="info"]) { background: #2196f3; }
    :host([type="success"]) { background: #4caf50; }
    :host([type="error"]) { background: #f44336; }
  `;
__decorate([
    property()
], UsbeAlert.prototype, "type", void 0);
__decorate([
    property()
], UsbeAlert.prototype, "message", void 0);
UsbeAlert = __decorate([
    customElement('usbe-alert')
], UsbeAlert);
export { UsbeAlert };
