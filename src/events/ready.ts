import { Client } from 'discord.js'
import Event__c from '../classes/Event__c'

export const event : Event__c = new Event__c(
    'ready',
    true,
    (client : Client) : void => {
        // Alert the console that the bot is logged in and ready to go
        if(client.user) console.log(`Ready! Logged in as ${client.user.tag}!`)
    }
)