import { ButtonInteraction, Client } from "discord.js";

export default interface ButtonFile {
  data: {
    name: string
  }

  execute(client: Client, interaction: ButtonInteraction, args: Record<string, any>): Promise<any>
}