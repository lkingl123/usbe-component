import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('usbe-alert')
export class UsbeAlert extends LitElement {
  @property() type: 'info' | 'success' | 'error' = 'info';
  @property() message = '';

  static styles = css`
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

  render() {
    return html`<div>${this.message}</div>`;
  }
}
