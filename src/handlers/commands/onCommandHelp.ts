import { Context } from "grammy";

export const onCommandHelp = async (ctx: Context) => {
  await ctx.reply(`"YUKSAK TA'LIM" o'quv markazining rasmiy botidagi muammolar yoki tushunarsiz holatlar yuzasidan @bakhtiyorshohnosirovga yoki +998953085050, +998339464646 raqamlariga murojaat qilishingiz mumkin!`);
};
