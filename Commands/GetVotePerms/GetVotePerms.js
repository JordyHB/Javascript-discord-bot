const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('vote')
        .setDescription('Gives you a role that allows you to vote on the banner contest'),
    async execute(interaction) {

        const role = interaction.guild.roles.cache.find(role => role.name === 'Voter');
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
        if (interaction.member.joinedAt > new Date('2023-03-01T00:00:00.000Z'))
            { return interaction.reply(`You must have joined before March 1st, 2023 to vote on the banner contest!`)}
        await interaction.member.roles.add(role);
        await interaction.reply(`You have been given the role that allows you to vote on the banner contest!`);
    },
};