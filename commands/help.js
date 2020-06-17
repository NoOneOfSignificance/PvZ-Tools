const Discord = require('discord.js');
const { version } = require('../config/config.json');

const HelpEmbed = new Discord.MessageEmbed()
    .setColor('#4da43b')
    .setTitle('Help Commands')
    .setAuthor('PvZ Tools', 'https://i.imgur.com/REUXZUa.png')
    .addFields(
        { name: 'Help Commands', value: 'pvz.randomizer - Randomizer Help\npvz.calc - Calculator Help\npvz.info - Get Bot Information\npvz.botchangelog - Get the Latest Bot Update Info'},
        { name: 'Game Commands', value: 'pvz.gw2events - Check the current GW2 Mystery Portal Event\npvz.bfnevents - Check the current BFN Weekly Event\npvz.bfnupgs [Character Name] - Check a BFN Character\'s Upgrades\n'
        + 'pvz.nextkey - Check when the next Challenge Key is available\npvz.prizemap - Check BFN Prize Map info\npvz.ruxgw2 - Check when Rux leaves in GW2'},
        { name: 'Documentary', value: 'https://github.com/zSupremoz/PvZ-Tools/tree/master#pvz-tools' }
    )
    .setFooter(`Version - ${version}`);

module.exports = {
    name: 'help',
    description: 'Shows help commands.',
    execute(message, args){
        message.channel.send(HelpEmbed);
    }
}