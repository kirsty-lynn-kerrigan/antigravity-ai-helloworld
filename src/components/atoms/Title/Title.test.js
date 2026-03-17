import { describe, it, expect } from 'vitest';
import { Title } from './Title.js';

describe('Title Atom', () => {
  it('should render a h1 with the provided text', () => {
    const html = Title({ text: 'Hello Vitest' });
    expect(html).toContain('<h1 class="hero-title">Hello Vitest</h1>');
  });

  it('should optionally include an id attribute', () => {
    const html = Title({ text: 'Hello', id: 'my-id' });
    expect(html).toContain('id="my-id"');
  });
});
