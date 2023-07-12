import { Client, CommandInteraction, SlashCommandBuilder } from "discord.js";

export default interface CommandFile {
  data: SlashCommandBuilder

  execute(client: Client, interaction: CommandInteraction): Promise<any>
}