import { Interaction } from 'discord.js'
import Command from '../classes/Command'
import Event__c from '../classes/Event__c'
import { commands } from '../index'

export const event : Event__c = new Event__c(
    'interactionCreate',
    false,
    async (interaction : Interaction) : Promise<void> => {
        // Ignore any interactions that aren't commands
        if(!interaction.isCommand()) return

        // Get the command source code from the commands Collection that was created on the client
        const command : Command | undefined = commands.get(interaction.commandName)

        // If that command existed, try to execute it and catch any errors that may get thrown
        if(command) {
            try {
                await command.execute(interaction)
            } catch(error) {
                console.error(error)
                await interaction.reply({ content : 'There was an error while executing this command!', ephemeral : true })
            }
        }
    }
)