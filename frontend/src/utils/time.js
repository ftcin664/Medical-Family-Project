export const getTimeAgo = (timestamp) => {
    const now = new Date();
    const seconds = Math.floor((now - new Date(timestamp)) / 1000);

    let interval = Math.floor(seconds / 31536000); // 1 year in seconds
    if (interval >= 1) return `${interval} year${interval === 1 ? '' : 's'} ago`;

    interval = Math.floor(seconds / 2592000); // 1 month in seconds
    if (interval >= 1) return `${interval} month${interval === 1 ? '' : 's'} ago`;

    interval = Math.floor(seconds / 86400); // 1 day in seconds
    if (interval >= 1) return `${interval} day${interval === 1 ? '' : 's'} ago`;

    interval = Math.floor(seconds / 3600); // 1 hour in seconds
    if (interval >= 1) return `${interval} hour${interval === 1 ? '' : 's'} ago`;

    interval = Math.floor(seconds / 60); // 1 minute in seconds
    if (interval >= 1) return `${interval} minute${interval === 1 ? '' : 's'} ago`;

    return 'just now'; // Less than a minute
};