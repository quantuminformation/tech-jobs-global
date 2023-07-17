export default (hostComponent) => {
    hostComponent.innerHTML = '';

    const indexHTML = `
    <div class="hero-section">
      <h1>Welcome to Tech Jobs Global!</h1>
      <p>Get exclusive access to top-tier tech job opportunities worldwide, with a special focus on the USA and UK markets!</p>
      <p>Join our growing community and discover the perfect role for you in frontend, backend, AI, and executive leadership!</p>
    </div>

    <div class="info-section">
      <h2>Why Join Tech Jobs Global?</h2>
      <ul>
        <li>Exclusive job postings from leading tech companies globally</li>
        <li>Networking opportunities with professionals across the tech industry</li>
        <li>Stay updated with the latest trends and changes in the tech job market</li>
        <li>Access to verified roles with a value-for-money monthly subscription</li>
      </ul>
    </div>

    <div class="cta-section">
      <h2>Advance Your Career with Us!</h2>
      <a href="https://discord.gg/mgjjxDAHsf" class="cta-button" target="_blank">Join the Tech Jobs Global Discord community</a>
    </div>

<!--
    <form class="login-form">
      <h2>Login to Tech Jobs Global</h2>
      <div class="form-grid">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password">
      </div>
      <button type="submit">Submit</button>
    </form>
-->

    <div class="footer-section">
      <h3>Explore our job categories:</h3>
      <ul>
        <li>Frontend Jobs</li>
        <li>Backend Jobs</li>
        <li>AI Jobs</li>
        <li>CTO Roles</li>
      </ul>
    </div>
  `;

    hostComponent.innerHTML = indexHTML;
};
