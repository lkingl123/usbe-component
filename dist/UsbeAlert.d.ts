import { LitElement } from 'lit';
export declare class UsbeAlert extends LitElement {
    type: 'info' | 'success' | 'error';
    message: string;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
}
