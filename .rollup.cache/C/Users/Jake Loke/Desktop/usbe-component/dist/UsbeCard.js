import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let UsbeCard = class UsbeCard extends LitElement {
    constructor() {
        super(...arguments);
        this.title = 'Card Title';
        this.content = 'This is the card content.';
    }
    render() {
        return html `
      <h3>${this.title}</h3>
      <p>${this.content}</p>
      <slot></slot>
    `;
    }
};
UsbeCard.styles = css `
    :host {
      display: block;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 16px;
      max-width: 400px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h3 {
      margin-top: 0;
    }
  `;
__decorate([
    property()
], UsbeCard.prototype, "title", void 0);
__decorate([
    property()
], UsbeCard.prototype, "content", void 0);
UsbeCard = __decorate([
    customElement('usbe-card')
], UsbeCard);
export { UsbeCard };
