const { SlashCommandBuilder } = require('@discordjs/builders');
const { EmbedBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bal')
        .setDMPermission(false)
        .setDescription('Sehe dein Konto an')
        .addUserOption(option =>
            option.setName('user')
                .setDescription('THE USER')
                .setRequired(false)
                ),
    async execute(interaction, client) {

        // Get User Option
        const useroption = interaction.options.getUser('user');

        if (!!useroption) {

            const usereconomy = await economy2.get(useroption.id);

            const message = new EmbedBuilder()
                .setTitle(`Konto von ${useroption.username}`)
                .setDescription(`Money: \n \n ${usereconomy.money} \n \n Bank: \n \n ${usereconomy.bank} \n \n Sparbuch: \n \n ${usereconomy.sparbuch} \n \n Kredit: \n \n ${usereconomy.kredit} \n \n Total: \n \n ${usereconomy.money + usereconomy.bank + usereconomy.kredit + usereconomy.sparbuch}`)
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [BAL.JS]`);
            
            // Send Message
            await interaction.reply({ embeds: [message.toJSON()]});

        } else {

            const usereconomy = await economy2.get(interaction.user.id)

            const message = new EmbedBuilder()
                .setTitle(`Konto von ${interaction.user.username}`)
                .setDescription(`Money: \n \n ${usereconomy.money} \n \n Bank: \n \n ${usereconomy.bank} \n \n Sparbuch: \n \n ${usereconomy.sparbuch} \n \n Kredit: \n \n ${usereconomy.kredit} \n \n Total: \n \n ${usereconomy.money + usereconomy.bank + usereconomy.kredit + usereconomy.sparbuch}`)
            console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [BAL.JS]`);
            
            // Send Message
            await interaction.reply({ embeds: [message.toJSON()]});

        }
    }
}