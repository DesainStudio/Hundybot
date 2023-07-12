const { EmbedBuilder } = require('discord.js');

module.exports = {

    data: {
        name: 'unternehmen-ablehnen'
    },
    async execute(interaction, client, data) {

        let message = new EmbedBuilder()
        	.setTitle(`Unternehmens Antrag`)
        	.setDescription(`Dein antrag auf ein unternehmen wurde abgelehnt`)
        client.users.send(data.value, { embeds: [message.toJSON()]});
    }
}