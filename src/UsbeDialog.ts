import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@material/web/dialog/dialog.js';

@customElement('usbe-dialog')
export class UsbeDialog extends LitElement {
  render() {
    return html`
      <md-dialog>
        <div slot="headline">Dialog Title</div>
        <div slot="content">This is the dialog content.</div>
        <div slot="actions">
          <md-text-button dialogAction="cancel">Cancel</md-text-button>
          <md-text-button dialogAction="ok">OK</md-text-button>
        </div>
      </md-dialog>
    `;
  }
}
