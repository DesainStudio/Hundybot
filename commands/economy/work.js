const { SlashCommandBuilder, EmbedBuilder, Collection } = require('discord.js');
const cooldown = new Collection()
const utils = require('rjutils-collection')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('work')
    .setDescription('Hole dein Stündliches Work ab')
    .setDMPermission(false),

  async execute(interaction, client) {

    const userId = interaction.user.id

    if (cooldown.get(userId) - Date.now() > 0) {
      let use, cdown
      const timeLeft = cooldown.get(userId) - Date.now()
      use = 's'
      cdown = timeLeft / 1000
      if (cdown > 60) { cdown = timeLeft / 1000 / 60; use = 'm' }

      let message = new EmbedBuilder().setColor(0x37009B)
        .setTitle('<:EXCLAMATION:1024407166460891166> » ERROR')
        .setDescription('» You still have a Cooldown of **' + cdown.toFixed(0) + use + '**!')
      return interaction.reply({ embeds: [message], ephemeral: true})
    }

    const random = utils.randomNum(100, 500);
    const job = [
      "Feuerwehrmann",
      "Polizist",
      "Rettungsdienst",
      "Maler",
      "Bauer",
      "Programmierer",
      "Designer",
      "Lehrer",
      "Reinigungskraft"
    ][utils.randomNum(0, 8)]
    
    global.economyopt.edt(userId, {
        money: {
            opt: "add",
            val: random
        },
    })
    
    const message = new EmbedBuilder()
        .setTitle("Work")
        .setDescription(`Du hast als ${job} gearbeitet und dein Lohn ist: \`${random}\` **Coins**`)
    
    cooldown.set(userId, Date.now() + 3600000)
    setTimeout(() => cooldown.delete(userId), 3600000)
    
    return interaction.reply({ embeds: [message] })
  }
}