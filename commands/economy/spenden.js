const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('spenden')
        .setDMPermission(false)
        .setDescription('Sehe dein Konto an')
        .addIntegerOption(option =>
            option.setName('money')
                .setDescription('Betrag')
                .setRequired(true)),
    async execute(interaction, client) {

        // Get Bot ID
        const bot = client.user.id;

        // Get Bot money
        const botmoney = bals.get(bot);

        // Get User Money
        const usermoney = bals.get(interaction.user.id);

        // Get Optionmoney
        const optionmoney = interaction.options.getInteger('money');

        // Set User Money and Set Bot Money
        if (optionmoney < usermoney + 1) {
            bals.rem(interaction.user.id, optionmoney)
            bals.add(bot, optionmoney)
            console.log('Erfolgreich')
        } else {
            console.log('Nicht Erfolgreich')
        }

        // Create Embed
        const message = new EmbedBuilder()
            .setTitle(`Konto von ${interaction.user.username}`)
            .setDescription(`Money: \n \n ${money} \n \n Bank: \n \n ${bankammount} \n \n Total: \n \n ${money + bankammount}`)
        console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [BAL.JS]`);
        
        // Send Message
        await interaction.reply({ embeds: [message.toJSON()]});
    }
}