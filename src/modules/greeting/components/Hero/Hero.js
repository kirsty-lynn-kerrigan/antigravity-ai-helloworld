import './Hero.css';
import { Title } from '../../../../components/atoms/Title/Title.js';
import { Badge } from '../../../../components/atoms/Badge/Badge.js';

/**
 * Hero Organism component
 * @param {Object} props
 * @param {string} props.greeting - The greeting string to display
 * @returns {string} HTML string
 */
export function Hero({ greeting }) {
  return `
    <main class="hero">
      <div class="hero-content">
        <p class="hero-eyebrow">Antigravity — Phase 1</p>
        ${Title({ text: greeting, id: 'greeting' })}
        <p class="hero-subtitle">
          A governed, quality-controlled application built incrementally.<br />
          Each phase adds one new capability.
        </p>
        <div class="badge-row">
          ${Badge({ text: 'Phase 1 · Foundation', type: 'phase' })}
          ${Badge({ text: '✓ Running', type: 'status' })}
        </div>
      </div>
    </main>
  `;
}
