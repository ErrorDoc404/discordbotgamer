module.exports = ErrorBot => {
    console.log(`Logged in as ${ErrorBot.user.username}!`);
    ErrorBot.user.setActivity('YouTube', { type: 'STREAMING' });
};
