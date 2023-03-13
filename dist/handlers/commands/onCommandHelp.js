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
exports.onCommandHelp = void 0;
const onCommandHelp = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply("Do you need help?\n\n /start - Start the bot\n /info - Get info about the bot\n /help - Get help about the bot\n\nI am still in development, so I can't do much, but I will be able to do more in the future, so stay tuned!");
});
exports.onCommandHelp = onCommandHelp;
