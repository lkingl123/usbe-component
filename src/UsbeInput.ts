import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import '@material/web/textfield/outlined-text-field.js';

@customElement('usbe-input')
export class UsbeInput extends LitElement {
  @property() label = 'Label';
  @property() value = '';

  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <md-outlined-text-field
        .label=${this.label}
        .value=${this.value}
        @input=${(e: Event) => {
          const input = e.target as HTMLInputElement;
          this.value = input.value;
        }}
      ></md-outlined-text-field>
    `;
  }
}
