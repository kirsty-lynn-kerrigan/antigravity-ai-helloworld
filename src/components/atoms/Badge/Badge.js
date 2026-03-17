import './Badge.css';

/**
 * Badge Atom component
 * @param {Object} props
 * @param {string} props.text - The text to display
 * @param {'phase'|'status'} props.type - The visual variant of the badge
 * @returns {string} HTML string
 */
export function Badge({ text, type }) {
  return `<span class="badge badge-${type}">${text}</span>`;
}
