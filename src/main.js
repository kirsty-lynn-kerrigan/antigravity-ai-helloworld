/**
 * main.js — Application entry point
 *
 * Phase 1: Renders a "Hello, World!" greeting into the #app container.
 * Subsequent phases will import modules and components from here.
 */

import './style.css';
import { renderGreetingFeature } from './modules/greeting/index.js';
import { injectSpeedInsights } from '@vercel/speed-insights';

/**
 * Mount the application into the DOM.
 */
function mount() {
  const app = document.querySelector('#app');
  app.innerHTML = renderGreetingFeature();
}

// Initialize Vercel Speed Insights
injectSpeedInsights();

mount();
