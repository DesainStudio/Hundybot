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
                .setRequired(true)
                ),
    async execute(interaction, client) {

        // Get User Option
        const useroption = interaction.options.getUser('user');

        // Read Money
        let map = await economy2.get(useroption.id);
        const money = map.get("money")

        // Read Bank
        map = await economy2.get(useroption.id);
        const bank = map.get("bank")

        // Read Kredit
        map = await economy2.get(useroption.id);
        const kredit = map.get("kredit")

        // Read Spenden
        map = await economy2.get(useroption.id);
        const sparbuch2 = map.get("sparbuch")

        // Create Embed
        const message = new EmbedBuilder()
            .setTitle(`Konto von ${useroption.id}`)
            .setDescription(`Money: \n \n ${money} \n \n Bank: \n \n ${bank} \n \n Sparbuch: \n \n ${sparbuch2} \n \n Kredit: \n \n ${kredit} \n \n Total: \n \n ${money + bank + kredit + sparbuch2}`)
        console.log(`[HUNDY BOT] [i] [TIME] [${new Date().toLocaleTimeString('en-US', { hour12: false})}] [DATE] [${new Date().toLocaleDateString('de-EU', { hour12: false })}] [INF] [USED COMMAND] [BAL.JS]`);
        
        // Send Message
        await interaction.reply({ embeds: [message.toJSON()]});
    }
}