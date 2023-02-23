const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const economySchema = require('../../schemas/economy')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('baltop')
    .setDescription('Sehe die Top List')
    .setDMPermission(false),

  async execute(interaction, client) {

    
    await interaction.deferReply()

        let embeddesk = ''; let count = 0
        const usereconomy = await economySchema.find({})
        usereconomy.sort((first, second) => {
            return second.money - first.money
        })

        for(const db of usereconomy) {
            if (count >= 25) break

            let skip = false
            const user = await client.users.fetch(db.userId).catch(() => { skip = true })

            if (!skip) {
                count++
                let formattedcount = count.toString()
                if (count < 10) formattedcount = '0' + count
                if (db.userId !== interaction.user.id) embeddesk += `\`${formattedcount}.\` » ${user.username}#${user.discriminator} (**${db.money} Coins**)\n`
                else embeddesk += `**\`${formattedcount}.\`** » ${user.username}#${user.discriminator} (**${db.money} Coins**)\n`


            }
        }

        const message = new EmbedBuilder().setColor(0x37009B)
            .setTitle('<:WALLET:1024387370793050273> » TOP BALANCES')
            .setDescription(embeddesk)
        return interaction.editReply({ embeds: [message] }).catch(() => {})
    
  }
}