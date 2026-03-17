import './Title.css';

/**
 * Title Atom component
 * @param {Object} props
 * @param {string} props.text - The title text
 * @param {string} [props.id] - Optional ID for the heading
 * @returns {string} HTML string
 */
export function Title({ text, id = '' }) {
  const idAttr = id ? ` id="${id}"` : '';
  return `<h1 class="hero-title"${idAttr}>${text}</h1>`;
}
