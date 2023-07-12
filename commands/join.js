const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
    	.setDMPermission(false)
        .setDescription('See my Ping'),
    async execute(interaction, client) {

        // Find a random voice channel
const voiceChannels = message.guild.channels.cache.filter(c => c.type === 'voice');
const randomChannel = voiceChannels.random();

// Join the random voice channel
if (randomChannel) {
  const connection = await randomChannel.join();
  console.log(`Joined ${randomChannel.name} in ${message.guild.name}`);
} else {
  console.log(`Could not find a voice channel to join in ${message.guild.name}`);
}
    },
};