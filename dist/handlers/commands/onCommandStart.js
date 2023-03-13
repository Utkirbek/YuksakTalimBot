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
exports.onCommandStart = void 0;
const mainMenu_1 = require("../../menus/mainMenu");
const onCommandStart = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.replyWithVideo("BAACAgQAAxkBAAMaYxhP8VrBqt9e-CQdWzvPIa8uCooAAh0DAALZ7DxSPbbGMQ2IDl0pBA", { caption: "Welcome to the bot, please select a menu from the below buttons", reply_markup: mainMenu_1.mainMenu });
});
exports.onCommandStart = onCommandStart;
