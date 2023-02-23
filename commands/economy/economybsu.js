const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('economybsu')
    .setDescription('Zahle Coins auf deine Bank/Sparbuch')
    .setDMPermission(false)
    .addStringOption(option => option
      .setName('bsu')
      .setDescription('Bank oder Sparbuch')
      .addChoices(
        {
          name: 'Bank',
          value: 'bank'
        },
        {
          name: 'Sparuch',
          value: 'sparbuch'
        },
        {
          name: 'U-Konto',
          value: 'unternehmenskonto'
        }
      )
      .setRequired(true)
    )
    .addStringOption(option => option
      .setName('option')
      .setDescription('option')
      .addChoices(
        {
          name: 'Dep',
          value: 'dep'
        },
        {
          name: 'With',
          value: 'with'
        }
      )
      .setRequired(true)
    )
    .addIntegerOption(option => option
      .setName('coins')
      .setDescription('coins')
    ),

  async execute(interaction, client) {

    const ieconomy = interaction.options.getString('option');
    const ieconomy2 = interaction.options.getInteger('coins');
    const ueconomy = await global.economyopt.get(interaction.user.id);
    const ieconomy3 = interaction.options.getString('bsu');

    if (ieconomy3 !== "sparbuch") {
      if (ieconomy3 !== "unternehmenskonto") {
        if (ieconomy === "dep") {
          if (!ieconomy2) {
            if (ueconomy.money >= 1) {
              global.economyopt.edt(interaction.user.id, {
                money: {
                  opt: 'rem',
                  val: ueconomy.money
                },
                bank: {
                  opt: 'add',
                  val: ueconomy.money
                }
              });
              const embed = new EmbedBuilder()
                .setTitle('Dep')
                .setDescription('Deine Coins wurden auf dein Konto gepackt')
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            } else {
              const embed = new EmbedBuilder()
                .setTitle('Fehler')
                .setDescription('Du hast nicht genug Coins zum sie auf die Bank zu packen')
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            };
          } else {
            if (ieconomy2 > 0 && ueconomy.money >= ieconomy2) {
              global.economyopt.edt(interaction.user.id, {
                money: {
                  opt: 'rem',
                  val: ieconomy2
                },
                bank: {
                  opt: 'add',
                  val: ieconomy2
                }
              });
              const embed = new EmbedBuilder()
                .setTitle('Dep')
                .setDescription(`Du hast ${ieconomy2} Coins auf dein Konto gepackt`)
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            } else {
              const embed = new EmbedBuilder()
                .setTitle('Fehler')
                .setDescription('Du hast nicht genug Coins um sie auf dein Konto zu packen')
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            };
          };
        } else {
          if (!ieconomy2) {
            if (ueconomy.bank >= 1) {
              global.economyopt.edt(interaction.user.id, {
                money: {
                  opt: 'add',
                  val: ueconomy.bank
                },
                bank: {
                  opt: 'rem',
                  val: ueconomy.bank
                }
              });
              const embed = new EmbedBuilder()
                .setTitle('With')
                .setDescription(`Du hast alle Coins von dein Konto geholt`)
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            } else {
              const embed = new EmbedBuilder()
                .setTitle('Fehler')
                .setDescription('Du hast nicht genug Coins um sie von deiner Bank zu holen')
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            };
          } else {
            if (ieconomy2 > 0 && ueconomy.bank >= ieconomy2) {
              global.economyopt.edt(interaction.user.id, {
                money: {
                  opt: 'add',
                  val: ieconomy2
                },
                bank: {
                  opt: 'rem',
                  val: ieconomy2
                }
              });
              const embed = new EmbedBuilder()
                .setTitle('With')
                .setDescription(`Du hast ${ieconomy2} Coins von dein Konto geholt`)
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            } else {
              const embed = new EmbedBuilder()
                .setTitle('Fehler')
                .setDescription('Du hast nicht genug Coins um sie von deiner Bank zu holen')
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            };
          };
        }
      }
    }

    if (ieconomy3 !== "bank") {
      if (ieconomy3 !== "unternehmenskonto") {
        if (ieconomy === "dep") {
          if (!ieconomy2) {
            if (ueconomy.bank >= 1) {
              global.economyopt.edt(interaction.user.id, {
                bank: {
                  opt: 'rem',
                  val: ueconomy.bank
                },
                sparbuch: {
                  opt: 'add',
                  val: ueconomy.bank
                }
              });
              const embed = new EmbedBuilder()
                .setTitle('Dep')
                .setDescription('Deine Coins wurden auf dein Sparbuch gepackt')
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            } else {
              const embed = new EmbedBuilder()
                .setTitle('Fehler')
                .setDescription('Du hast nicht genug Coins um sie auf das Sparbuch zu packen')
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            };
          } else {
            if (ieconomy2 > 0 && ueconomy.bank >= ieconomy2) {
              global.economyopt.edt(interaction.user.id, {
                bank: {
                  opt: 'rem',
                  val: ieconomy2
                },
                sparbuch: {
                  opt: 'add',
                  val: ieconomy2
                }
              });
              const embed = new EmbedBuilder()
                .setTitle('Dep')
                .setDescription(`Du hast ${ieconomy2} Coins auf dein Sparbuch gepackt`)
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            } else {
              const embed = new EmbedBuilder()
                .setTitle('Fehler')
                .setDescription('Du hast nicht genug Coins um sie auf das Sparbuch zu packen')
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            };
          };
        } else {
          if (!ieconomy2) {
            if (ueconomy.sparbuch >= 1) {
              global.economyopt.edt(interaction.user.id, {
                sparbuch: {
                  opt: 'rem',
                  val: ueconomy.sparbuch
                },
                bank: {
                  opt: 'add',
                  val: ueconomy.sparbuch
                }
              });
              const embed = new EmbedBuilder()
                .setTitle('With')
                .setDescription('Du hast alle Coins von dein Sparbuch geholt')
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            } else {
              const embed = new EmbedBuilder()
                .setTitle('Fehler')
                .setDescription('Du hast nicht genug Coins um sie von dein Sparbuch zu holen')
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            };
          } else {
            if (ieconomy2 > 0 && ueconomy.sparbuch >= ieconomy2) {
              global.economyopt.edt(interaction.user.id, {
                sparbuch: {
                  opt: 'rem',
                  val: ieconomy2
                },
                bank: {
                  opt: 'add',
                  val: ieconomy2
                }
              });
              const embed = new EmbedBuilder()
                .setTitle('With')
                .setDescription(`Du hast ${ieconomy2} Coins von dein Sparbuch geholt`)
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            } else {
              const embed = new EmbedBuilder()
                .setTitle('Fehler')
                .setDescription('Du hast nicht genug Coins um sie von dein Sparbuch zu holen')
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            };
          };
        };
      }
    }

    if (ieconomy3 !== "bank") {
      if (ieconomy3 !== "sparbuch") {
        if (ieconomy === "dep") {
          if (!ieconomy2) {
            if (ueconomy.bank >= 1) {
              global.economyopt.edt(interaction.user.id, {
                bank: {
                  opt: 'rem',
                  val: ueconomy.bank
                },
                unternehmenskonto: {
                  opt: 'add',
                  val: ueconomy.bank
                }
              });
              const embed = new EmbedBuilder()
                .setTitle('Dep')
                .setDescription('Deine Coins wurden auf dein Unternehmenskonto gepackt')
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            } else {
              const embed = new EmbedBuilder()
                .setTitle('Fehler')
                .setDescription('Du hast nicht genug Coins um sie auf dein Unternehmenskonto zu packen')
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            };
          } else {
            if (ieconomy2 > 0 && ueconomy.bank >= ieconomy2) {
              global.economyopt.edt(interaction.user.id, {
                bank: {
                  opt: 'rem',
                  val: ieconomy2
                },
                unternehmenskonto: {
                  opt: 'add',
                  val: ieconomy2
                }
              });
              const embed = new EmbedBuilder()
                .setTitle('Dep')
                .setDescription(`Du hast ${ieconomy2} Coins auf dein Unternehmenskonto gepackt`)
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            } else {
              const embed = new EmbedBuilder()
                .setTitle('Fehler')
                .setDescription('Du hast nicht genug Coins um sie auf dein Unternehmenskonto zu packen')
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            };
          };
        } else {
          if (!ieconomy2) {
            if (ueconomy.unternehmenskonto >= 1) {
              global.economyopt.edt(interaction.user.id, {
                unternehmenskonto: {
                  opt: 'rem',
                  val: ueconomy.unternehmenskonto
                },
                bank: {
                  opt: 'add',
                  val: ueconomy.unternehmenskonto
                }
              });
              const embed = new EmbedBuilder()
                .setTitle('With')
                .setDescription('Du hast alle Coins von dein Unternehmenskonto geholt')
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            } else {
              const embed = new EmbedBuilder()
                .setTitle('Fehler')
                .setDescription('Du hast nicht genug Coins um sie von dein Unternehmenskonto zu holen')
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            };
          } else {
            if (ieconomy2 > 0 && ueconomy.unternehmenskonto >= ieconomy2) {
              global.economyopt.edt(interaction.user.id, {
                unternehmenskonto: {
                  opt: 'rem',
                  val: ieconomy2
                },
                bank: {
                  opt: 'add',
                  val: ieconomy2
                }
              });
              const embed = new EmbedBuilder()
                .setTitle('With')
                .setDescription(`Du hast ${ieconomy2} Coins von dein Unternehmenskonto geholt`)
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            } else {
              const embed = new EmbedBuilder()
                .setTitle('Fehler')
                .setDescription('Du hast nicht genug Coins um sie von dein Unternehmenskonto zu holen')
              return interaction.reply({
                embeds: [embed],
                ephemeral: true
              });
            };
          };
        };
      }
    }
  },
};