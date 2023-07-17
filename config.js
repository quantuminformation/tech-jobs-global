// Stored in /config.js

const BASE_URL = window.location.hostname === 'localhost' ? '' : '/vanillajs-patterns';

const numberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});

export const config = {
    API_KEY_GOOGLE_MAPS: 'AIzaSyCIS-VZfUUfWRqQWJfIiP8-SW2-EGiVYKs',
    BASE_URL: BASE_URL,
    DISCORD_URL: 'https://discord.gg/mgjjxDAHsf',
    MIN_ANNUAL_SALARY: numberFormat.format(50000),
    MIN_HOURLY_RATE: numberFormat.format(40)
};
