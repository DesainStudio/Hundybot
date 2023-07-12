const { EmbedBuilder } = require('discord.js');

module.exports = {

    data: {
        name: 'unternehmen-annehmen'
    },
    async execute(interaction, client, data) {

        global.economyopt.edt(data.value, {
            unternehmen: {
                opt: 'set',
                val: true
            }
        })

        let message = new EmbedBuilder()
        	.setTitle(`Unternehmens Antrag`)
        	.setDescription(`Dein Antrag auf ein Unternehmen wurde angenommen`)
        client.users.send(data.value, { embeds: [message.toJSON()]});
    }
}