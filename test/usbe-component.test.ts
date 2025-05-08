import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { UsbeComponent } from '../src/UsbeComponent.js';
import '../src/usbe-component.js';

describe('UsbeComponent', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<UsbeComponent>(html`<usbe-component></usbe-component>`);

    expect(el.header).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<UsbeComponent>(html`<usbe-component></usbe-component>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<UsbeComponent>(html`<usbe-component header="attribute header"></usbe-component>`);

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<UsbeComponent>(html`<usbe-component></usbe-component>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
