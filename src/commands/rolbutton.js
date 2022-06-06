//slash commandlar bu şekilde olmalı isteğe göre options sayısını azaltıp arttırabilirsiniz.
    const discord = require("discord.js");

module.exports = {
    slash: true, //komut eğer slash ise true eğer prefixli ise false yazınız.
	  name: ['buttonrolrenk'],  //komut ismi
    description: 'Renk Rolü Mesajı Atar.', //komut açıklaması

	async execute(client, interaction) {  //her slash commandda burası aynı olmak zorunda

    const embed = new discord.MessageEmbed()
    const normal = new discord.MessageActionRow()
      .addComponents(
        new discord.MessageButton()
          .setCustomId("1")
          .setEmoji("🍋")
          .setStyle("PRIMARY")
      )
      .addComponents(
        new discord.MessageButton()
          .setCustomId("2")
          .setEmoji("🍇")
          .setStyle("PRIMARY")
      )
      .addComponents(
        new discord.MessageButton()
          .setCustomId("3")
          .setEmoji("🍭")
          .setStyle("PRIMARY")
      )
          .addComponents(
        new discord.MessageButton()
          .setCustomId("4")
          .setEmoji("🍑")
          .setStyle("PRIMARY")
      )
          .addComponents(
        new discord.MessageButton()
          .setCustomId("5")
          .setEmoji("🥑")
          .setStyle("PRIMARY")
      );
    const boost = new discord.MessageActionRow()
    .addComponents(
        new discord.MessageButton()
        .setCustomId("6")
        .setEmoji("❄️")
        .setStyle("PRIMARY")
    )
    .addComponents(
        new discord.MessageButton()
        .setCustomId("7")
        .setEmoji("🍒")
        .setStyle("PRIMARY")
    )
    .addComponents(
        new discord.MessageButton()
        .setCustomId("8")
        .setEmoji("🌸")
        .setStyle("PRIMARY")
    )
          .addComponents(
        new discord.MessageButton()
        .setCustomId("9")
        .setEmoji("🍉")
        .setStyle("PRIMARY")
    )
    .addComponents(
        new discord.MessageButton()
        .setCustomId("10")
        .setEmoji("🦄")
        .setStyle("PRIMARY")
    );
     client.channels.cache.get("969634390017708032").send({ embeds: [embed.setDescription(`
Tüm Üyeler İçin:

🍋 = <@&968944035278499852>
🍇 = <@&968898733225951382>
🍭 = <@&968898844429545554>
🍑 = <@&968899901104738314>
🥑 = <@&968901001878831165>


`)], components: [normal]})

     client.channels.cache.get("977610101068271646").send({ embeds: [embed.setDescription(`

Boost Basanlara Özel:

❄️ = <@&968899552709066823>
🍒 = <@&968897896957227028>
🌸 = <@&968898189560262696>
🍉 = <@&968898341654110228>
🦄 = <@&968898446167777330>
`)], components: [ boost]})

    

    }
}