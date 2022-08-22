import { Message } from 'discord.js'
import Event__c from '../classes/Event__c'

// Constant to store the character that all commands will start with
const COMMANDCHAR = '%%'

export const event : Event__c = new Event__c(
    'messageCreate',
    false,
    async (message : Message) : Promise<void> => {
        // Don't let the bot respond to itself
        if(message.client.user && message.client.user.id === message.author.id) return

        // Constant to shorten writing out message.content
        const content = message.content

        // Classic ping command as a message command
        if(content == COMMANDCHAR+'ping') await message.channel.send('Pong!')
        // Command for quick testing
        else if(content === COMMANDCHAR+'test') {
            // Do something
        }
    }
)