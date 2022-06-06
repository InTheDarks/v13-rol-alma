//botun main dosyası 
const moment = require("moment");
const discord = require("discord.js");
const client = new discord.Client({ intents: Object.values(discord.Intents.FLAGS).reduce((x, y) => x + y, 0) });
const { token } = require("./src/base/settings.json");
require("./src/base/app.js")(client)
const express = require('express');
const app = express();
app.get("/", (request, response) => {
response.sendStatus(200);
});
app.listen(process.env.PORT);


//üyeler için için:
const r1 = "1. ROL İD";
const r2 = "2. ROL İD";
const r3 = "3. ROL İD";
const r4 = "4. ROL İD";
const r5 = "5. ROL İD";
//boosterler için:
const r6 = "6. ROL İD";
const r7 = "7. ROL İD";
const r8 = "8. ROL İD";
const r9 = "9. ROL İD";
const r10 = "10. ROL İD";


    client.on('interactionCreate', async interaction => {

	  if (!interaction.isCommand()) {
		  if (interaction.customId === "1") {

			if(interaction.member.roles.cache.has(r2)) { interaction.member.roles.remove(r2) }
			if(interaction.member.roles.cache.has(r3)) { interaction.member.roles.remove(r3) }
			if(interaction.member.roles.cache.has(r4)) { interaction.member.roles.remove(r4) }
			if(interaction.member.roles.cache.has(r5)) { interaction.member.roles.remove(r5) }
			if(interaction.member.roles.cache.has(r6)) { interaction.member.roles.remove(r6) }
			if(interaction.member.roles.cache.has(r7)) { interaction.member.roles.remove(r7) }
			if(interaction.member.roles.cache.has(r8)) { interaction.member.roles.remove(r8) }
			if(interaction.member.roles.cache.has(r9)) { interaction.member.roles.remove(r9) }
			if(interaction.member.roles.cache.has(r10)) { interaction.member.roles.remove(r10) }
        
        const rol = r1;
			if(interaction.member.roles.cache.has(rol)) { 
          interaction.member.roles.remove(rol)
 interaction.reply({ content: `<@&${rol}> Permi Üzerinizden Alındı.`, ephemeral: true });
} else { interaction.member.roles.add(rol) 
 interaction.reply({ content: `<@&${rol}> Permi Üzerinize Verildi.`, ephemeral: true });
}
		  }

      		  if (interaction.customId === "2") {
      if(interaction.member.roles.cache.has(r1)) { interaction.member.roles.remove(r1) }
			if(interaction.member.roles.cache.has(r3)) { interaction.member.roles.remove(r3) }
			if(interaction.member.roles.cache.has(r4)) { interaction.member.roles.remove(r4) }
			if(interaction.member.roles.cache.has(r5)) { interaction.member.roles.remove(r5) }
			if(interaction.member.roles.cache.has(r6)) { interaction.member.roles.remove(r6) }
			if(interaction.member.roles.cache.has(r7)) { interaction.member.roles.remove(r7) }
			if(interaction.member.roles.cache.has(r8)) { interaction.member.roles.remove(r8) }
			if(interaction.member.roles.cache.has(r9)) { interaction.member.roles.remove(r9) }
			if(interaction.member.roles.cache.has(r10)) { interaction.member.roles.remove(r10) }

        const rol = r2;
			if(interaction.member.roles.cache.has(rol)) { 
          interaction.member.roles.remove(rol)
 interaction.reply({ content: `<@&${rol}> Permi Üzerinizden Alındı.`, ephemeral: true });
} else { interaction.member.roles.add(rol) 
 interaction.reply({ content: `<@&${rol}> Permi Üzerinize Verildi.`, ephemeral: true });
}
		  }

      		  if (interaction.customId === "3") {
      if(interaction.member.roles.cache.has(r1)) { interaction.member.roles.remove(r1) }
			if(interaction.member.roles.cache.has(r2)) { interaction.member.roles.remove(r2) }
			if(interaction.member.roles.cache.has(r4)) { interaction.member.roles.remove(r4) }
			if(interaction.member.roles.cache.has(r5)) { interaction.member.roles.remove(r5) }
			if(interaction.member.roles.cache.has(r6)) { interaction.member.roles.remove(r6) }
			if(interaction.member.roles.cache.has(r7)) { interaction.member.roles.remove(r7) }
			if(interaction.member.roles.cache.has(r8)) { interaction.member.roles.remove(r8) }
			if(interaction.member.roles.cache.has(r9)) { interaction.member.roles.remove(r9) }
			if(interaction.member.roles.cache.has(r10)) { interaction.member.roles.remove(r10) }

        const rol = r3;
			if(interaction.member.roles.cache.has(rol)) { 
          interaction.member.roles.remove(rol)
 interaction.reply({ content: `<@&${rol}> Permi Üzerinizden Alındı.`, ephemeral: true });
} else { interaction.member.roles.add(rol) 
 interaction.reply({ content: `<@&${rol}> Permi Üzerinize Verildi.`, ephemeral: true });
}
		  }

      		  if (interaction.customId === "4") {
      if(interaction.member.roles.cache.has(r1)) { interaction.member.roles.remove(r1) }
			if(interaction.member.roles.cache.has(r2)) { interaction.member.roles.remove(r2) }
			if(interaction.member.roles.cache.has(r3)) { interaction.member.roles.remove(r3) }
			if(interaction.member.roles.cache.has(r5)) { interaction.member.roles.remove(r5) }
			if(interaction.member.roles.cache.has(r6)) { interaction.member.roles.remove(r6) }
			if(interaction.member.roles.cache.has(r7)) { interaction.member.roles.remove(r7) }
			if(interaction.member.roles.cache.has(r8)) { interaction.member.roles.remove(r8) }
			if(interaction.member.roles.cache.has(r9)) { interaction.member.roles.remove(r9) }
			if(interaction.member.roles.cache.has(r10)) { interaction.member.roles.remove(r10) }

        const rol = r4;
			if(interaction.member.roles.cache.has(rol)) { 
          interaction.member.roles.remove(rol)
 interaction.reply({ content: `<@&${rol}> Permi Üzerinizden Alındı.`, ephemeral: true });
} else { interaction.member.roles.add(rol) 
 interaction.reply({ content: `<@&${rol}> Permi Üzerinize Verildi.`, ephemeral: true });
}
		  }

      		  if (interaction.customId === "5") {
      if(interaction.member.roles.cache.has(r1)) { interaction.member.roles.remove(r1) }
			if(interaction.member.roles.cache.has(r2)) { interaction.member.roles.remove(r2) }
			if(interaction.member.roles.cache.has(r3)) { interaction.member.roles.remove(r3) }
			if(interaction.member.roles.cache.has(r4)) { interaction.member.roles.remove(r4) }
			if(interaction.member.roles.cache.has(r6)) { interaction.member.roles.remove(r6) }
			if(interaction.member.roles.cache.has(r7)) { interaction.member.roles.remove(r7) }
			if(interaction.member.roles.cache.has(r8)) { interaction.member.roles.remove(r8) }
			if(interaction.member.roles.cache.has(r9)) { interaction.member.roles.remove(r9) }
			if(interaction.member.roles.cache.has(r10)) { interaction.member.roles.remove(r10) }

        const rol = r5;
			if(interaction.member.roles.cache.has(rol)) { 
          interaction.member.roles.remove(rol)
 interaction.reply({ content: `<@&${rol}> Permi Üzerinizden Alındı.`, ephemeral: true });
} else { interaction.member.roles.add(rol) 
 interaction.reply({ content: `<@&${rol}> Permi Üzerinize Verildi.`, ephemeral: true });
}
		  }





////////////////////////////////////////////////////BOOSTERLERE ÖZEL BÖLÜM








      		  if (interaction.customId === "6") {
    	if(interaction.member.roles.cache.has(r1)) { interaction.member.roles.remove(r1) }
			if(interaction.member.roles.cache.has(r2)) { interaction.member.roles.remove(r2) }
			if(interaction.member.roles.cache.has(r3)) { interaction.member.roles.remove(r3) }
			if(interaction.member.roles.cache.has(r4)) { interaction.member.roles.remove(r4) }
			if(interaction.member.roles.cache.has(r5)) { interaction.member.roles.remove(r5) }
			if(interaction.member.roles.cache.has(r7)) { interaction.member.roles.remove(r7) }
			if(interaction.member.roles.cache.has(r8)) { interaction.member.roles.remove(r8) }
			if(interaction.member.roles.cache.has(r9)) { interaction.member.roles.remove(r9) }
			if(interaction.member.roles.cache.has(r10)) { interaction.member.roles.remove(r10) }

        const rol = r6;
      if(!interaction.member.roles.cache.has("968903948922650684")) return  interaction.reply({ content: `<@&${rol}> Permi Boosterlere Özeldir!`, ephemeral: true });
			if(interaction.member.roles.cache.has(rol)) { 
          interaction.member.roles.remove(rol)
 interaction.reply({ content: `<@&${rol}> Permi Üzerinizden Alındı.`, ephemeral: true });
} else { interaction.member.roles.add(rol) 
 interaction.reply({ content: `<@&${rol}> Permi Üzerinize Verildi.`, ephemeral: true });
}
		  }


    		  if (interaction.customId === "7") {
  		if(interaction.member.roles.cache.has(r1)) { interaction.member.roles.remove(r1) }
			if(interaction.member.roles.cache.has(r2)) { interaction.member.roles.remove(r2) }
			if(interaction.member.roles.cache.has(r3)) { interaction.member.roles.remove(r3) }
			if(interaction.member.roles.cache.has(r4)) { interaction.member.roles.remove(r4) }
			if(interaction.member.roles.cache.has(r5)) { interaction.member.roles.remove(r5) }
			if(interaction.member.roles.cache.has(r6)) { interaction.member.roles.remove(r6) }
			if(interaction.member.roles.cache.has(r8)) { interaction.member.roles.remove(r8) }
			if(interaction.member.roles.cache.has(r9)) { interaction.member.roles.remove(r9) }
			if(interaction.member.roles.cache.has(r10)) { interaction.member.roles.remove(r10) }

        const rol = r7;
            if(!interaction.member.roles.cache.has("968903948922650684")) return  interaction.reply({ content: `<@&${rol}> Permi Boosterlere Özeldir!`, ephemeral: true });
			if(interaction.member.roles.cache.has(rol)) { 
          interaction.member.roles.remove(rol)
 interaction.reply({ content: `<@&${rol}> Permi Üzerinizden Alındı.`, ephemeral: true });
} else { interaction.member.roles.add(rol) 
 interaction.reply({ content: `<@&${rol}> Permi Üzerinize Verildi.`, ephemeral: true });
}
		  }
      		  if (interaction.customId === "8") {
    	if(interaction.member.roles.cache.has(r1)) { interaction.member.roles.remove(r1) }
			if(interaction.member.roles.cache.has(r2)) { interaction.member.roles.remove(r2) }
			if(interaction.member.roles.cache.has(r3)) { interaction.member.roles.remove(r3) }
			if(interaction.member.roles.cache.has(r4)) { interaction.member.roles.remove(r4) }
			if(interaction.member.roles.cache.has(r5)) { interaction.member.roles.remove(r5) }
			if(interaction.member.roles.cache.has(r6)) { interaction.member.roles.remove(r6) }
			if(interaction.member.roles.cache.has(r7)) { interaction.member.roles.remove(r7) }
			if(interaction.member.roles.cache.has(r9)) { interaction.member.roles.remove(r9) }
			if(interaction.member.roles.cache.has(r10)) { interaction.member.roles.remove(r10) }

        const rol = r8;
              if(!interaction.member.roles.cache.has("968903948922650684")) return  interaction.reply({ content: `<@&${rol}> Permi Boosterlere Özeldir!`, ephemeral: true });
			if(interaction.member.roles.cache.has(rol)) { 
          interaction.member.roles.remove(rol)
 interaction.reply({ content: `<@&${rol}> Permi Üzerinizden Alındı.`, ephemeral: true });
} else { interaction.member.roles.add(rol) 
 interaction.reply({ content: `<@&${rol}> Permi Üzerinize Verildi.`, ephemeral: true });
}
		  }
      		  if (interaction.customId === "9") {
  		if(interaction.member.roles.cache.has(r1)) { interaction.member.roles.remove(r1) }
			if(interaction.member.roles.cache.has(r2)) { interaction.member.roles.remove(r2) }
			if(interaction.member.roles.cache.has(r3)) { interaction.member.roles.remove(r3) }
			if(interaction.member.roles.cache.has(r4)) { interaction.member.roles.remove(r4) }
			if(interaction.member.roles.cache.has(r5)) { interaction.member.roles.remove(r5) }
			if(interaction.member.roles.cache.has(r6)) { interaction.member.roles.remove(r6) }
			if(interaction.member.roles.cache.has(r7)) { interaction.member.roles.remove(r7) }
			if(interaction.member.roles.cache.has(r8)) { interaction.member.roles.remove(r8) }
			if(interaction.member.roles.cache.has(r10)) { interaction.member.roles.remove(r10) }

        const rol = r9;
            if(!interaction.member.roles.cache.has("968903948922650684")) return  interaction.reply({ content: `<@&${rol}> Permi Boosterlere Özeldir!`, ephemeral: true });
			if(interaction.member.roles.cache.has(rol)) { 
          interaction.member.roles.remove(rol)
 interaction.reply({ content: `<@&${rol}> Permi Üzerinizden Alındı.`, ephemeral: true });
} else { interaction.member.roles.add(rol) 
 interaction.reply({ content: `<@&${rol}> Permi Üzerinize Verildi.`, ephemeral: true });
}
		  }
      		  if (interaction.customId === "10") {
  		if(interaction.member.roles.cache.has(r1)) { interaction.member.roles.remove(r1) }
			if(interaction.member.roles.cache.has(r2)) { interaction.member.roles.remove(r2) }
			if(interaction.member.roles.cache.has(r3)) { interaction.member.roles.remove(r3) }
			if(interaction.member.roles.cache.has(r4)) { interaction.member.roles.remove(r4) }
			if(interaction.member.roles.cache.has(r5)) { interaction.member.roles.remove(r5) }
			if(interaction.member.roles.cache.has(r6)) { interaction.member.roles.remove(r6) }
			if(interaction.member.roles.cache.has(r7)) { interaction.member.roles.remove(r7) }
			if(interaction.member.roles.cache.has(r8)) { interaction.member.roles.remove(r8) }
			if(interaction.member.roles.cache.has(r9)) { interaction.member.roles.remove(r9) }

        const rol = r10;
            if(!interaction.member.roles.cache.has("968903948922650684")) return  interaction.reply({ content: `<@&${rol}> Permi Boosterlere Özeldir!`, ephemeral: true });
			if(interaction.member.roles.cache.has(rol)) { 
          interaction.member.roles.remove(rol)
 interaction.reply({ content: `<@&${rol}> Permi Üzerinizden Alındı.`, ephemeral: true });
} else { interaction.member.roles.add(rol) 
 interaction.reply({ content: `<@&${rol}> Permi Üzerinize Verildi.`, ephemeral: true });
}
		  }
      
}
});






client.on('message', async message => {

     if(message.content.toLowerCase() == "hamsi aşireti" || message.content.toLowerCase() == "hamsi asireti") {
        message.channel.send("Buradayız 😎")
      } 
  

    })



const { joinVoiceChannel } = require('@discordjs/voice');
 client.on('ready', () => { 
  joinVoiceChannel({
channelId: "969346943824302110",
guildId: "968891344389029908",       
adapterCreator: client.guilds.cache.get("968891344389029908").voiceAdapterCreator
    });
});

client.login(process.env.token);