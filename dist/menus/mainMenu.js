"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainMenu = void 0;
const grammy_1 = require("grammy");
const app_1 = require("../app");
app_1.bot.callbackQuery("payload", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.answerCallbackQuery({
        text: "You were curious, indeed!",
        show_alert: true,
    });
}));
exports.mainMenu = new grammy_1.InlineKeyboard()
    .url("Connect with Admin", "https://t.me/jakhongirabdukhamidov")
    .row()
    .url("Our Menu", "https://drive.google.com/file/d/1K_SessS8Dx7nQP1DaDYiBSma1ZzG84ia/view")
    .row()
    .text("Our Working Hours", "payload")
    .row()
    .url("Connect with Owner", "https://t.me/jakhongirabdukhamidov")
    .row()
    .url("Connect with Owner", "https://t.me/jakhongirabdukhamidov");
