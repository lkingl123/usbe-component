import { __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@material/web/dialog/dialog.js';
import '@material/web/button/text-button.js';
let UsbeDialog = class UsbeDialog extends LitElement {
    render() {
        return html `
      <md-text-button @click=${this.openDialog}>Open Dialog</md-text-button>

      <md-dialog id="dialog">
        <div slot="headline">Dialog Title</div>
        <div slot="content">This is the dialog content.</div>
        <div slot="actions">
          <md-text-button dialogAction="cancel">Cancel</md-text-button>
          <md-text-button dialogAction="ok">OK</md-text-button>
        </div>
      </md-dialog>
    `;
    }
    openDialog() {
        const dialog = this.shadowRoot?.getElementById('dialog');
        dialog?.show();
    }
};
UsbeDialog = __decorate([
    customElement('usbe-dialog')
], UsbeDialog);
export { UsbeDialog };
