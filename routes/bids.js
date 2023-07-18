// Stored in /routes/bids.js

import {config} from '../config.js';

export default (hostComponent) => {
  hostComponent.innerHTML = '';

  const bidsSectionHTML = `
  <div class="bids-section">
    <h1 class="text-center">Bids <span class="badge">Minimum bid: ${config.BID_MIN_FORMATTED}</span></h1>
    <p>Welcome to our Bids section, a dedicated platform assisting companies, NGOs, and governments in their search for project bids. To ensure the quality and value of projects, we have a strict minimum bid limit of ${config.BID_MIN_FORMATTED}. We believe that this is a reasonable baseline to honor the expertise, time, and effort invested by our verified agencies.</p>
    <div class="text-center">
      <a href="${config.DISCORD_URL}" >Join our Discord Server</a>
    </div>
  </div>
  `;

  hostComponent.innerHTML = bidsSectionHTML;
};
