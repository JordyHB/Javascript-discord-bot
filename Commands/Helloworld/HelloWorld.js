const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addvoter')
        .setDescription('Provides information about the user.'),
    async execute(interaction) {
        const role = interaction.guild.roles.cache.find(role => role.name === 'Voter');
         const members = await interaction.guild.members.fetch()
        members.forEach(member => {
            if (member.joinedAt < new Date('2023-05-01T00:00:00.000Z')) {
                console.log(member.user.username)
                member.roles.add(role)
            }
            else {
                console.log('no')
            }
        })
    },
};
