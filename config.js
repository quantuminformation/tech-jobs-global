const BASE_URL = window.location.hostname === 'localhost' ? '' : '/tech-jobs-global';

const numberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});

const config = {
    APP_NAME: "Tech Jobs Global",
    BASE_URL: BASE_URL,
    DISCORD_URL: 'https://discord.gg/mgjjxDAHsf',
    MIN_ANNUAL_SALARY: 50000,
    MIN_HOURLY_RATE: 40,
    CTO_MIN_ANNUAL_SALARY: 90000,
    AGENCY_MIN_REVENUE: 500000,
    BID_MIN: 20000,
    CTO_MIN_HOURLY_RATE: 80
};

config.MIN_ANNUAL_SALARY_FORMATTED = numberFormat.format(config.MIN_ANNUAL_SALARY);
config.MIN_HOURLY_RATE_FORMATTED = `${numberFormat.format(config.MIN_HOURLY_RATE)} p/h`;
config.CTO_MIN_ANNUAL_SALARY_FORMATTED = numberFormat.format(config.CTO_MIN_ANNUAL_SALARY);
config.AGENCY_MIN_REVENUE_FORMATTED = numberFormat.format(config.AGENCY_MIN_REVENUE);
config.BID_MIN_FORMATTED = numberFormat.format(config.BID_MIN);
config.CTO_MIN_HOURLY_RATE_FORMATTED = numberFormat.format(config.CTO_MIN_HOURLY_RATE);

export {config};
