import {  Context } from "grammy";

export const onCommandInfo = async (ctx: Context) => {
  await ctx.reply(`"YUKSAK TA'LIM" o'quv markazi
YO'NALISHLARIMIZ:
- INGILIZ TILI
- RUS TILI
- KOREYS TILI
- ARAB TILI
- MENTAL ARIFMETIKA
- MATEMATIKA
- INGILIZ TILI KIDS
- RUS TILI KIDS
- POCHEMUCHKA
DASTURLASH KURSLARI:
- BACKEND
- FRONTEND
- FULLSTACK
- 3D MODELLING
- AUTOCAD
- GRAPHIC DESIGN
- VIDEO GRAPHIC
- SMM
QO'SHIMCHA IMTIYOZLI KURSLAR:
- JURNALISTIKA
- MOBILA GRAFIKA
- NOTIQLIK SAN'ATI
- IJTIMOIY TARMOQ YURITISH
- PHOTOGRAFIYA
- AKTYORLIK

"BILIM UCHUN MILLION" loyihasida ishtirok etib 1 OYLIK BEPUL oq'uv yo'nalishlarini tanlashingiz mumkin`);
};