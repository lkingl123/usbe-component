import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/web/select/outlined-select.js';
import '@material/web/select/select-option.js';

@customElement('usbe-select')
export class UsbeSelect extends LitElement {
  @property({ type: Array }) options: string[] = ['Option 1', 'Option 2'];
  @property() label = 'Select Option';

  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <md-outlined-select label=${this.label}>
        ${this.options.map(
          (opt) => html`<md-select-option .value=${opt}>${opt}</md-select-option>`
        )}
      </md-outlined-select>
    `;
  }
}
