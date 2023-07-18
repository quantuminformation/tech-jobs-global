// Stored in /routes/bids.js

import {config} from '../config.js';

export default (hostComponent) => {
  hostComponent.innerHTML = '';

  const indexHTML = `
  <div class="bids-section">
    <h1>Bids <span class="badge">Current min bid: ${config.BID_MIN_FORMATTED}</span></h1>
    <p>Our netwrok helps companies, NGOs, and governments looking for bids on projects. The minimum value of a project should be at least ${config.BID_MIN_FORMATTED}. We believe in compensating our verfied agencies for their skills, time, and effort, and this is a baseline that we strictly adhere to.</p>
    
    <a href="${config.DISCORD_URL}" >Join our Discord Server</a>
  </div>
`;
  hostComponent.innerHTML = indexHTML;
};
