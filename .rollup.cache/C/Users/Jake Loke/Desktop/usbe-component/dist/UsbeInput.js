import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/web/textfield/outlined-text-field.js';
let UsbeInput = class UsbeInput extends LitElement {
    constructor() {
        super(...arguments);
        this.label = 'Label';
        this.value = '';
    }
    render() {
        return html `
      <md-outlined-text-field
        .label=${this.label}
        .value=${this.value}
        @input=${(e) => {
            const input = e.target;
            this.value = input.value;
        }}
      ></md-outlined-text-field>
    `;
    }
};
UsbeInput.styles = css `
    :host {
      display: block;
    }
  `;
__decorate([
    property()
], UsbeInput.prototype, "label", void 0);
__decorate([
    property()
], UsbeInput.prototype, "value", void 0);
UsbeInput = __decorate([
    customElement('usbe-input')
], UsbeInput);
export { UsbeInput };
