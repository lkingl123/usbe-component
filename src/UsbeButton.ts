import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@material/web/button/filled-button.js';

@customElement('usbe-button')
export class UsbeButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  render() {
    return html`
      <md-filled-button @click=${this.handleClick}>
        USBE Button
      </md-filled-button>
    `;
  }

  handleClick() {
    alert('USBE Button Clicked!');
  }
}
