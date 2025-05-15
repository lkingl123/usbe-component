import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@material/web/button/filled-button.js';

@customElement('gary-element')
export class BaseElement extends LitElement {
  protected override createRenderRoot(): ShadowRoot {
    const root = this.attachShadow({ mode: 'open' });
    const links = document.head.getElementsByTagName('link');
    for (let i = 0; i < links.length; i++) {
      const link = links.item(i);
      if (!link || link.rel !== 'stylesheet') continue;
      root.appendChild(link.cloneNode(true));
    }
    return root;
  }

  override render() {
    return html`
      <h2>Hello from BaseElement</h2>
      <md-filled-button @click=${this._handleClick}>Click Me</md-filled-button>
    `;
  }

  private _handleClick() {
    console.log('Button clicked!');
  }
}
