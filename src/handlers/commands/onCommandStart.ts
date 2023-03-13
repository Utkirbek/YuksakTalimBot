import { Context } from "grammy";
import { mainMenu } from "../../menus/mainMenu";

export const onCommandStart = async (ctx: Context) => {
    await ctx.replyWithVideo(
      "BAACAgQAAxkBAAMaYxhP8VrBqt9e-CQdWzvPIa8uCooAAh0DAALZ7DxSPbbGMQ2IDl0pBA",{caption: "Welcome to the bot, please select a menu from the below buttons",reply_markup: mainMenu}
    );
};
 