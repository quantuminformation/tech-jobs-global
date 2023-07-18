// Stored in /routes/index.js

export default (hostComponent) => {
    hostComponent.innerHTML = '';

    const indexHTML = `
    <div class="hero-section">
      <h1>Welcome to Tech Jobs Global!</h1>
      <p>Get exclusive access to top-tier tech job opportunities worldwide, with a special focus on the <span class="badge">USA</span>, <span class="badge">EU</span> and <span class="badge">UK</span> markets! We also support other countries, why not get involved in your country?</p>
      <p>Join our growing community and discover the perfect role for you in frontend, backend, AI, and executive leadership!</p>
    </div>

    <div class="about-nikos-section">
      <h2>About Nikos Katsikanis</h2>
      <p><a target="_blank" href="https://nikoskatsikanis.com/">Nikos Katsikanis</a> is a passionate technologist, entrepreneur, and investor. With over 16 years of experience in software engineering and development, Nikos has worked in various sectors including financial trading, blockchain technology, and machine learning.</p>
      <p>As an advocate for transparency and fair compensation in the tech industry, Nikos founded Tech Jobs Global to bridge the gap between talented professionals and innovative companies worldwide. He believes in fostering a community where individuals can grow professionally and contribute to the global tech ecosystem.</p>
      <a href="https://nikoskatsikanis.com/" target="_blank">Learn more about Nikos</a>
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


  `;

    hostComponent.innerHTML = indexHTML;
};
