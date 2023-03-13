import { Menu } from "@grammyjs/menu";
import { onCommandInfo } from "../handlers/commands/onCommandInfo";
import { onCommandHelp } from "../handlers/commands/onCommandHelp";
import { InlineKeyboard } from "grammy";
import { bot } from "../app";

bot.callbackQuery("payload", async (ctx) => {
  await ctx.answerCallbackQuery({
    text: "You were curious, indeed!",
    show_alert: true,
  });
});

export const mainMenu = new InlineKeyboard()
  .url("Connect with Admin", "https://t.me/jakhongirabdukhamidov")
  .row()
  .url(
    "Our Menu",
    "https://drive.google.com/file/d/1K_SessS8Dx7nQP1DaDYiBSma1ZzG84ia/view"
  )
  .row()
  .text("Our Working Hours", "payload")
  .row()
  .url("Connect with Owner", "https://t.me/jakhongirabdukhamidov")
  .row()
  .url("Connect with Owner", "https://t.me/jakhongirabdukhamidov");



