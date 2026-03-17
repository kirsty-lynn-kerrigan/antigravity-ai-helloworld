/**
 * Public API for the Greeting module.
 * Consumers should only import from this file.
 */

import { Hero } from './components/Hero/Hero.js';
import { greet } from './greeting.logic.js';

/**
 * Renders the full greeting feature.
 * @returns {string} HTML string
 */
export function renderGreetingFeature() {
  return Hero({ greeting: greet('World') });
}
