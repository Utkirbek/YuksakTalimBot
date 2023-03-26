
import { Bot, CallbackQueryContext, Context, InlineKeyboard, session } from "grammy";
import { onCommandInfo } from "./handlers/commands/onCommandInfo";
import {
  type Conversation,
  type ConversationFlavor,
  conversations,
  createConversation,
} from "@grammyjs/conversations";
import { onCommandHelp } from "./handlers/commands/onCommandHelp";
import axios from "axios";
import * as dotenv from "dotenv";
import { Student } from "./Student";
dotenv.config();

export type MyAppContext = Context & ConversationFlavor
type MyConversation = Conversation<MyAppContext>;
    
import { connectDB } from "./db";
export  const bot = new Bot<MyAppContext>(`${process.env.BOT_TOKEN}`);

const inlineKeyboard = new InlineKeyboard()
  .text("ADMINISTRATSIYA", "aloqa")
  .text("RO'YXATDAN O'TISH", "register");
 

bot.command("info", onCommandInfo) 
bot.command("help", onCommandHelp);


bot.callbackQuery("aloqa", async (ctx) => {
  await ctx.reply(
    `ADMINISTRATSIYA bilan bog'lanish uchun quyidagi telefon raqamlarga murojaat qiling:
+998953085050
JURNALISTLAR AKEDEMIYASI bilan bog'lanish uchun quyidagi telefon raqamlarga murojaat qiling:
+998331262626
+998338414141
    `)
});


async function greeting(conversation:MyConversation, ctx:MyAppContext) {
 
  
  const questions= ['ISM FAMILIYA:','YOSH:','YASHASH MANZILI:','OTA-ONANGIZ TELEFON RAQAMI:','SHAXSIY TELEFON RAQAMINGIZ:']
  const movies: string[] = [];
  for (let i = 0; i < questions.length; i++) {
    await ctx.reply(`${questions[i]}`);
    const titleCtx = await conversation.waitFor(":text");
    movies.push(titleCtx.msg.text);
  }
  const student = new Student({
    chatid: ctx.from?.id,
    name: movies[0],
    age: movies[1],
    address: movies[2],
    parentPhone: movies[3],
    phone: movies[4],
  });
  await student.save();
  console.log(student);
  
  await ctx.reply(`Sizning ma'lumotingiz "YUKSAK TA'LIM" o'quv markazining rasmiy bot ARXIVIGA saqlandi. 

48 soat oralig'ida "YUKSAK TA'LIM" o'quv markazi ADMINISTRATSIYASI siz bilan bog'lanadi.

"YUKSAK TA'LIM" O'QUV MARKAZI - KELAJAKNI BIZ BILAN QURING!`);

}

// Install the session plugin.
bot.use(session({
  initial() {
    // return empty object for now
    return {};
  },
}));

// Install the conversations plugin.
bot.use(conversations());
bot.use(createConversation(greeting));
bot.command("register", async (ctx) => {
  await ctx.conversation.enter("greeting");
})



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
bot.command("get", async (ctx) => {
  const students = await Student.find();
  if(ctx.from?.id === 5978419551){
    await ctx.reply(JSON.stringify(students));
  }else{
    await ctx.reply(`Siz bu buyruqni bajarish huquqiga ega emassiz`)
  }

  
  
});









connectDB();
// starting bot
bot.start();