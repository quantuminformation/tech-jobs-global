//Stored in /routes/index.js

import {config} from '../config.js';

export default (hostComponent) => {
  hostComponent.innerHTML = '';

  const indexHTML = `
    <div>
      <h1>Verification</h1>
      <p>Verification is an important process to maintain the authenticity and quality of the tech community. It involves NO transfer of sensitive documents over Discord, email or any other platform.</p>
      <p>Currently, the only person who can verify you is me, or my company. The verification process takes between 30-60 minutes or longer due to thorough checks. Please understand that individual developers cannot be verified due to time constraints.</p>
      <p>All verified roles are not subject to our ${config.APP_NAME} Bot restrictions and have access to the private verified channel category to help guide the direction of the server and brainstorm with other verified members. These roles are not permanent and should be reevaluated if your situation changes.</p>
      <p>Verification is easiest when you have met me in person, or are from UK or Austria where I spend most of my time or from the USA. But don't let that put you off applying.</p>
      <p>Verified roles available include:</p>
      <ul>
        <li><span class="badge">@verified</span> Decision maker for the SPX500, DAX40, FTSE100, DAX etc. As well as other high value companies around the world.</li>
        <li><span class="badge">@verified recruiter</span> (don't ping unless responding to a job) - This role is granted to certain high-value recruitment companies operating with placed salaries of candidates cumulatively over $20,000,000 a year.</li>
        <li><span class="badge">@Verified Agency</span> - If you are an agency on here with a turnover greater than $500,000 a year, you are welcome to apply. This allows you to respond to calls for proposals.</li>
      </ul>
      <p>Please note that the verification only applies to a country where the bulk of the work is done, not a shopfront for offshore development. If the bulk of the work is done offshore, then the company is considered "based" there and your website should state that. I respect that more than virtual shopfronts.</p>
      <p>I reserve the right to change these verification instructions at any time. Conditions and new roles will change over time.</p>
      <a href="${config.DISCORD_URL}" class="cta">Join our Discord Server</a>
    </div>
  `;

  hostComponent.innerHTML = indexHTML;
};

