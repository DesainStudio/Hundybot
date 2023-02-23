const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('dep')
    .setDescription('Zahle deine Coins ein')
    .setDMPermission(false)
    .addStringOption(option => option
      .setName('option')
      .setDescription('Wähle ein Typ einer option')
      .addChoices(
        {
          name: 'Bank',
          value: 'bank'
        },
        {
          name: 'Sparbuch',
          value: 'sparbuch'
        },
        {
          name: 'Unternehmenskonto',
          value: 'unternehmenskonto'
        }
      )
      .setRequired(true)
    )
    .addIntegerOption(option => option
      .setName('amount')
      .setDescription('Set a amount')
      .setRequired(false)  
    ),

  async execute(interaction, client) {
    // Get Message Options and Schema
    const option = interaction.options.getString('option')
    const amount = interaction.options.getInteger('amount')
    const userEconomy = await global.economyopt.get(interaction.user.id)

    switch (option) {

      case 'bank': {
        if (!amount) {
          global.economyopt.edt(interaction.user.id, {
            money: {
              opt: 'rem',
              val: userEconomy.money
            },
            bank: {
              opt: 'add',
              val: userEconomy.bank
            }
          })

          // Create Embed
          const embed = new EmbedBuilder()
            .setTitle('Dep')
            .setDescription(`Alle deine Coins wurden auf deine Bank gepackt`)

          // Send Message
          return interaction.reply({
            embeds: [embed],
            ephemeral: true
          })
        }

        if (userEconomy.money < amount) {
          // Create emebd
          const embed = new EmbedBuilder()
            .setTitle('Fehler')
            .setDescription('Du hast nicht genug Coins')

          // Send Message
          return interaction.reply({
            embeds: [embed],
            ephemeral: true
          })
        }

        global.economyopt.edt(interaction.user.id, {
          money: {
            opt: 'rem',
            val: amount
          },
          bank: {
            opt: 'add',
            val: amount
          }
        })

        // Create Embed
        const embed = new EmbedBuilder()
          .setTitle('Dep')
          .setDescription(`Du hast \`${amount}\` Coins auf deine Bank gepackt`)
        
        // Send Message
        return interaction.reply({
          emebds: [embed],
          ephemeral: true
        })
      }

      
    }
  }
}