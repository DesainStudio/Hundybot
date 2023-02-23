const { SlashCommandBuilder, EmbedBuilder, Collection } = require('discord.js')
const cooldown = new Collection()
const utils = require('rjutils-collection')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ausrauben')
    .setDescription('Raube einen User aus')
    .addUserOption(option => option
      .setName('user')
      .setDescription('Wähle einen User')
      .setRequired(true) 
    ),

  async execute(interaction, client) {

    const useropt = interaction.options.getUser('user')
    const economyopt = await global.economyopt.get(useropt.id)

    if (cooldown.get(interaction.user.id) - Date.now() > 0) {
      let use, cdown
      const timeLeft = cooldown.get(interaction.user.id) - Date.now();
      use = 's';
      cdown = timeLeft / 1000;
      if (cdown > 60) {
        cdown = timeLeft / 1000 / 60;
        use = 'm'
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

    if (economyopt.money < 5000) {
      // Create embed
      const embed = new EmbedBuilder()
        .setTitle('Fehler')
        .setDescription('Dieser user hat nicht genug Coins')
      return interaction.reply({
        embeds: [embed],
        ephemeral: true
      })
    }

    if (useropt === interaction.user.id) {
      // Create embed
      const embed = new EmbedBuilder()
        .setTitle('Fehler')
        .setDescription('Du kannst dich selber nicht ausrauben')
      return interaction.reply({
        embeds: [embed],
        ephemeral: true
      })
    }

    const random = utils.randomNum(500, 10000)

    if (random < economyopt.money) {
      const random = utils.randomNum(500, 600)

      global.economyopt.edt(interaction.user.id, {
        bank: {
          opt: 'add',
          val: random
        }
      })
      global.economyopt.edt(useropt.id, {
        money: {
          opt: 'rem',
          val: random
        }
      })

      // Create embed
      const embed = new EmbedBuilder()
        .setTitle('Ausrauben')
        .setDescription(`Du hast \`${useropt.username}\` ausgeraubt und \`${random}\` Coins bekommen`)
      return interaction.reply({
        embeds: [embed],
        ephemeral: false
      })
    }
    global.economyopt.edt(interaction.user.id, {
      bank: {
        opt: 'add',
        val: random
      }
    })
    global.economyopt.edt(useropt.id, {
      money: {
        opt: 'rem',
        val: random
      }
    })
    
    // Create embed
    const embed = new EmbedBuilder()
      .setTitle('Ausrauben')
      .setDescription(`Du hast \`${useropt.username}\` ausgeraubt und \`${random}\` Coins bekommen`)
    return interaction.reply({
      embeds: [embed],
      ephemeral: false
    })
    
  }
}