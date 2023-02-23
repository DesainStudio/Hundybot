const { SlashCommandBuilder, EmbedBuilder, Collection } = require('discord.js')
const cooldown = new Collection()
const utils = require('rjutils-collection')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('daily')
    .setDescription('Holde dein Tägliches Daily ab')
    .setDMPermission(false),

  async execute(interaction, client) {
    const userId = interaction.user.id

    if (cooldown.get(userId) - Date.now() > 0) {
      let use, cdown
      const timeLeft = cooldown.get(userId) - Date.now();
      use = 's';
      cdown = timeLeft / 1000
      if (cdown > 60) {
        cdown = timeLeft / 1000 / 60;
        use = 'm';
      }
      
      // Create Embed
      const embed = new EmbedBuilder()
        .setTitle('<:EXCLAMATION:1024407166460891166> » ERROR')
        .setDescription('» You still have a Cooldown of **' + cdown.toFixed(0) + use + '**!')

      // Send Message
      return interaction.reply({
        embeds: [embed],
        ephemeral: true
      })
    }

    const random = utils.randomNum(100, 500)

    global.economyopt.edt(interaction.user.id, {
      money: {
        opt: 'add',
        val: random
      }
    })

    // Create Embed
    const embed = new EmbedBuilder()
      .setTitle('Daily')
      .setDescription(`Du hast dein Daily abgeholt und hast \`${random}\` Coins bekommen`)

    cooldown.set(userId, Date.now() + 86400000)
    setTimeout(() => cooldown.delete(userId), 86400000)

    // Send Message
    return interaction.reply({
      embeds: [embed],
      ephemeral: false
    })
  }
}