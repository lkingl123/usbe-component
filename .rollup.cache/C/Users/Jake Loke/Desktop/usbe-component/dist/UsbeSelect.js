import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';
let UsbeSelect = class UsbeSelect extends LitElement {
    constructor() {
        super(...arguments);
        this.options = ['Option 1', 'Option 2'];
        this.label = 'Select Option';
    }
    render() {
        return html `
      <md-outlined-select label=${this.label}>
        ${this.options.map((opt) => html `<md-select-option .value=${opt}>${opt}</md-select-option>`)}
      </md-outlined-select>
    `;
    }
};
UsbeSelect.styles = css `
    :host {
      display: block;
    }
  `;
__decorate([
    property({ type: Array })
], UsbeSelect.prototype, "options", void 0);
__decorate([
    property()
], UsbeSelect.prototype, "label", void 0);
UsbeSelect = __decorate([
    customElement('usbe-select')
], UsbeSelect);
export { UsbeSelect };
