const { EmbedBuilder } = require('discord.js');

module.exports = {

    data: {
        name: 'kanal-erstellt-löschen-ja'
    },
    async execute(interaction, client) {

      

        let message = new EmbedBuilder()
        	.setTitle(`Kanal Erstellt`)
        	.setDescription(`Der Kanal wurde gelöscht`)
        client.users.send(interaction.id, { embeds: [message.toJSON()]});
    }
}