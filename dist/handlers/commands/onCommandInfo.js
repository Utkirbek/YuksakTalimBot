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
exports.onCommandInfo = void 0;
const onCommandInfo = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    yield ctx.reply("Hello, I am Delivery Bot, I can help you to find food , buy and deliver them in the best price \nI am still in development, so I can't do much, but I will be able to do more in the future, so stay tuned!");
});
exports.onCommandInfo = onCommandInfo;
