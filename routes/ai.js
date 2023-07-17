// Stored in /routes/ai.js

import {config} from '/config.js';

export default (hostComponent) => {
    hostComponent.innerHTML = '';

    const indexHTML = `
  <div class="ai-jobs-section">
    <h1>AI Jobs</h1>
    <p>Welcome to the exciting world of AI. Artificial Intelligence professionals are at the forefront of technology, driving innovation and shaping the future. From machine learning engineers to data scientists, AI professionals use their skills to solve complex problems and create intelligent solutions.</p>
    <p>In our Discord server, we maintain a high bar for job postings. The minimum standard for an AI job post on this server is a role that pays at least <span class="badge outline">${config.MIN_ANNUAL_SALARY}</span> per annum (equivalent in your country). We believe in compensating developers for their skills, time, and effort, and this is a baseline that we strictly adhere to. The rate goes up depending on the complexity of the job, the experience required, and the location of the job. If you bill hourly then we set the min rate as <span class="badge outline">${config.MIN_HOURLY_RATE}</span> an hour.</p>
    <p>So, if you're an AI professional seeking your next challenge, or a company looking to hire talented AI specialists, our Discord server is the place for you. Join us and become part of our global tech community.</p>
    <a href="${config.DISCORD_URL}" >Join our Discord Server</a>
  </div>
`;
    hostComponent.innerHTML = indexHTML;
};
