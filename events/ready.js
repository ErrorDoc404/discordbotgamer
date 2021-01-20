module.exports = ErrorBot => {
    console.log(`Logged in as ${ErrorBot.user.username}!`);
    ErrorBot.user.setActivity('Valorant', { type: 'STREAMING' });
};
