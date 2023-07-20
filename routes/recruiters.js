import {config} from '../config.js';

export default (hostComponent) => {
    hostComponent.innerHTML = '';

    const indexHTML = `
    <div>
      <h1>Welcome Recruiters</h1>
      <p>Searching for top-notch tech talent can be a challenging task. At ${config.APP_NAME}, we aim to make that process seamless and efficient. Our platform is home to a host of highly skilled and verified tech professionals, making it a go-to hub for tech recruitment.</p>
      <p>Why choose ${config.APP_NAME}?</p>
      <ul>
        <li>Access to a pool of verified tech professionals across multiple roles and skill sets.</li>
        <li>A vibrant and engaging community that continuously fosters learning and growth, ensuring an always-updated talent pool.</li>
        <li>Opportunity to interact with potential candidates, giving you a better understanding of their capabilities and fit.</li>
      </ul>
      <p>On our Discord server, we have established a strict standard for job postings to ensure quality and relevance. The minimum salary for any job post is set at ${config.MIN_ANNUAL_SALARY_FORMATTED} per annum (equivalent in your country), and the minimum hourly rate is ${config.MIN_HOYRLY_RATE_FORMATERD}. This not only attracts serious and committed professionals but also maintains the quality of opportunities on our platform.</p>
      <p>Verified recruiter roles are granted to high-value recruitment agencies placing candidates with combined salaries of over $20,000,000 a year. With this role, you gain access to exclusive channels and privileges, helping you source the best talent efficiently.</p>
      <p>Ready to find your next star hire? Join us and discover the difference.</p>
      <a href="${config.DISCORD_URL}" class> Join our Discord Server</a>
    </div>
  `;

    hostComponent.innerHTML = indexHTML;
};
