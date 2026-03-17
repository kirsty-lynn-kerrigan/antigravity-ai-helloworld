import { describe, it, expect } from 'vitest';
import { greet } from './greeting.logic.js';

describe('greeting.logic.js', () => {
  it('should interpolate the provided name into a greeting', () => {
    const result = greet('Antigravity');
    expect(result).toBe('Hello, Antigravity!');
  });

  it('should handle empty strings', () => {
    const result = greet('');
    expect(result).toBe('Hello, !');
  });
});
