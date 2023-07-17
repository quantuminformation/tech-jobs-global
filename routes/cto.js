// Stored in /routes/cto.js

import {config} from '/config.js';

export default (hostComponent) => {
    hostComponent.innerHTML = '';

    const indexHTML = `
  <div class="cto-jobs-section">
    <h1>CTO Jobs</h1>
    <p>Welcome to the sphere of technology leadership. Chief Technology Officers (CTOs) stand at the helm of a company's tech strategies, making crucial decisions that shape the organization's future. These leaders combine their deep technical knowledge with strategic thinking to drive innovation and growth.</p>
    <p>In our Discord server, we maintain a high bar for job postings. The minimum standard for a CTO job post on this server is a role that pays at least <span class="badge outline">${config.CTO_MIN_ANNUAL_SALARY}</span> per annum (equivalent in your country). We believe in compensating tech leaders for their skills, time, and effort, and this is a baseline that we strictly adhere to. The rate goes up depending on the complexity of the job, the experience required, and the location of the job. If you bill hourly then we set the min rate as <span class="badge outline">${config.CTO_MIN_ANNUAL_SALARY}</span> an hour.</p>
    <p>So, if you're a tech leader looking for your next challenge, or a company seeking to hire a visionary CTO, our Discord server is the place for you. Join us and become part of our global tech community.</p>
    <a href="${config.DISCORD_URL}" >Join our Discord Server</a>
  </div>
`;
    hostComponent.innerHTML = indexHTML;
};
