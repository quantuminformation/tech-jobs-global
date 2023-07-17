// Stored in /routes/frontend.js

import {config} from '../config.js';

export default (hostComponent) => {
  hostComponent.innerHTML = '';

  const indexHTML = `
  <div class="frontend-jobs-section">
    <h1>Frontend Jobs</h1>
    <p>Welcome to the world of frontend development, where we build the face of the internet. Frontend developers are magicians who convert code into tangible interfaces that users can interact with. They juggle HTML, CSS, and JavaScript to create visually engaging and smooth-functioning websites and applications.</p>
    <p>In our Discord server, we maintain a high bar for job postings. The minimum standard for a frontend job post on this server is a role that pays at least <span class="badge outline">${config.MIN_ANNUAL_SALARY}</span> per annum (equivalent in your country). We believe in compensating developers for their skills, time, and effort, and this is a baseline that we strictly adhere to. The rate goes up depending on the complexity of the job, the experience required, and the location of the job. If you bill hourly then we set the min rate as <span class="badge outline">${config.MIN_HOURLY_RATE}</span> an hour.</p>
    <p>So, if you're a frontend developer looking for your next challenge, or a company seeking to hire talented professionals, our Discord server is the place for you. Join us and become part of our global tech community.</p>
    <a href="${config.DISCORD_URL}" >Join our Discord Server</a>
  </div>
`;
  hostComponent.innerHTML = indexHTML;
};
