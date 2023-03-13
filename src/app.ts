
import { Bot, CallbackQueryContext, Context, InlineKeyboard } from "grammy";
import { onCommandInfo } from "./handlers/commands/onCommandInfo";

import { onCommandHelp } from "./handlers/commands/onCommandHelp";
import axios from "axios";
import * as dotenv from "dotenv";
import { Student } from "./Student";
dotenv.config();

export type MyAppContext = Context 
    
import { connectDB } from "./db";
export  const bot = new Bot<MyAppContext>(`${process.env.BOT_TOKEN}`);

const inlineKeyboard = new InlineKeyboard()
  .text("ADMINISTRATSIYA 📞", "aloqa")
  .text("RO'YXATDAN O'TISH", "register");
 

bot.command("info", onCommandInfo) 
bot.command("help", onCommandHelp);


bot.callbackQuery("aloqa", async (ctx) => {
  await ctx.reply(
    `ADMINISTRATSIYA bilan bog'lanish uchun quyidagi telefon raqamlarga murojaat qiling:
+998991234567
+998901234567
+998991234567
    `)
});

bot.callbackQuery("register", async (ctx) => {
  await ctx.reply(
    `RO'YXATDAN O'TISH UCHUN MA'LUMOTLARINGIZNI QUYIDAGI KO'RINISHDA YUBORING:

ISM FAMILIYA: Jahongir Usmanov
YOSH: 20 yosh
YASHASH MANZILI: Davlatobod tumani, 38-uy 42-xonadon
OTA-ONANGIZ TELEFON RAQAMI: +998991234567
SHAXSIY TELEFON RAQAMINGIZ: +998991234567
`
  ,{reply_markup: { force_reply: true }})
  
});

// Send a keyboard along with a message.
bot.command("start", async (ctx) => {


  
    await  ctx.reply(
      `Assalomu Alaykum ${ctx.from?.first_name} ${ctx.from?.last_name}.

Siz "YUKSAK TA'LIM" o'quv markazining rasmiy BOTIdan foydalanmoqdasiz.

"YUKSAK TA'LIM" o'quv markazi ADMINISTRATSIYASI bilan bog'lanish uchun 1-shaffof tugmani bosing

"BILIM UCHUN MILLION" loyihasidan ro'yxatdan o'tish uchun 2-shaffof tugmani bosing
`,{
  reply_markup: inlineKeyboard,
  }
    )
});

bot.command('aloqa',async (ctx) => {
  await ctx.reply(
    `ADMINISTRATSIYA bilan bog'lanish uchun quyidagi telefon raqamlarga murojaat qiling:
+998991234567
+998901234567
+998991234567
    `)
});


bot.command("register",async (ctx) => {
  await ctx.reply(
    `RO'YXATDAN O'TISH UCHUN MA'LUMOTLARINGIZNI QUYIDAGI KO'RINISHDA YUBORING:

ISM FAMILIYA: Jahongir Usmanov
YOSH: 20 yosh
YASHASH MANZILI: Davlatobod tumani, 38-uy 42-xonadon
OTA-ONANGIZ TELEFON RAQAMI: +998991234567
SHAXSIY TELEFON RAQAMINGIZ: +998991234567
`
  ,{reply_markup: { force_reply: true }})
  
})



bot.on("message", async (ctx) => {
  const newStudent = await new Student({
    name: ctx.message?.text,
  });

  await newStudent.save();

  await ctx.reply(
    `Sizning ma'lumotingiz "YUKSAK TA'LIM" o'quv markazining rasmiy bot ARXIVIGA saqlandi. 

48 soat oralig'ida "YUKSAK TA'LIM" o'quv markazi ADMINISTRATSIYASI siz bilan bog'lanadi.

"YUKSAK TA'LIM" O'QUV MARKAZI - KELAJAKNI BIZ BILAN QURING!`
  );
})



connectDB();
// starting bot
bot.start();