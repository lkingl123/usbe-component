import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('usbe-card')
export class UsbeCard extends LitElement {
  @property() title = 'Card Title';
  @property() content = 'This is the card content.';

  static styles = css`
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

  render() {
    return html`
      <h3>${this.title}</h3>
      <p>${this.content}</p>
      <slot></slot>
    `;
  }
}
