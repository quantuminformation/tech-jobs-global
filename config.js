const BASE_URL = window.location.hostname === 'localhost' ? '' : '/tech-jobs-global';

const numberFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});

const config = {
    BASE_URL: BASE_URL,
    DISCORD_URL: 'https://discord.gg/mgjjxDAHsf',
    MIN_ANNUAL_SALARY: numberFormat.format(50000),
    MIN_HOURLY_RATE: numberFormat.format(40),
    CTO_MIN_ANNUAL_SALARY: numberFormat.format(90000),
    AGENCY_MIN_REVENUE: 500000,
    BID_MIN: 20000,
    CTO_MIN_HOURLY_RATE: numberFormat.format(80)
};

config.AGENCY_MIN_REVENUE_FORMATTED = numberFormat.format(config.AGENCY_MIN_REVENUE);
config.BID_MIN_FORMATTED = numberFormat.format(config.BID_MIN);

export {config};
