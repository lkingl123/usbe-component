import { __decorate } from "tslib";
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@material/web/button/filled-button.js';
let UsbeButton = class UsbeButton extends LitElement {
    render() {
        return html `
      <md-filled-button @click=${this.handleClick}>
        USBE Button
      </md-filled-button>
    `;
    }
    handleClick() {
        alert('USBE Button Clicked!');
    }
};
UsbeButton.styles = css `
    :host {
      display: inline-block;
    }
  `;
UsbeButton = __decorate([
    customElement('usbe-button')
], UsbeButton);
export { UsbeButton };
