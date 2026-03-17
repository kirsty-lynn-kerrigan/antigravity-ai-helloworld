import { describe, it, expect } from 'vitest';
import { Badge } from './Badge.js';

describe('Badge Atom', () => {
  it('should render a phase badge', () => {
    const html = Badge({ text: 'Phase 1', type: 'phase' });
    expect(html).toContain('<span class="badge badge-phase">Phase 1</span>');
  });

  it('should render a status badge', () => {
    const html = Badge({ text: 'Running', type: 'status' });
    expect(html).toContain('<span class="badge badge-status">Running</span>');
  });
});
