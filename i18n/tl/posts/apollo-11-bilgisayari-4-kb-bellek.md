---
title: "Ang Computer ng Apollo 11: Ano Talaga ang Ibig Sabihin ng \"4 KB na Memory\"?"
excerpt: "Humigit-kumulang 4 KB lang ang RAM ng computer na nagpalapag sa Apollo 11 sa Buwan. Ang mga programa naman ay nasa ROM na hinabi sa lubid, mga 72 KB."
hook: "Dumaong sa Buwan na may 4 KB na RAM"
fact: "4 KB"
factLabel: "Nabubura na memory (RAM) ng AGC"
category: "Computer"
---
Tiyak na narinig mo na ang pangungusap na "mas maliit pa sa isang litrato ang memory ng computer na pumunta sa Buwan". Sinabi rin namin ang "4 KB" sa video. Tama ang numerong iyon, pero kulang ito kapag nag-iisa. Dahil ang Apollo Guidance Computer (AGC) ay may dalawang magkahiwalay na memory, at ang "4 KB" ay naglalarawan lang sa mas maliit sa dalawa.

Tara, buksan natin ang loob ng sikat na numerong ito.

## Ano ba talaga ang tinutukoy ng "4 KB"?

Binubuo ng 2,048 "word" ang working memory ng AGC, ibig sabihin ang nabububurang memory na tatawagin natin ngayong RAM. 16 bit ang haba ng bawat word: 15 bit ng data at 1 bit na parity para sa pagsusuri ng error. Kung ituturing na 2 byte ang isang word, humigit-kumulang 4 KB ang 2,048 na word. Kaya ang "4 KB" ay ang laki ng scratch paper na ginagamit ng computer sa pagkuwenta habang lumilipad.

Wala sa memory na ito ang mga programa. Doon nakatago ang kasalukuyang posisyon, bilis, mga counter, at mga pansamantalang resultang inililipat sa pagitan ng mga gawain. Gawa ang memory sa maliliit na singsing na tinatawag na magnetic core, at napapanatili nito ang laman kahit mawalan ng kuryente.

Ang mga programa ay nasa ibang lugar: sa fixed memory na 36,864 na word, ibig sabihin sa ROM. Sa parehong kuwenta, humigit-kumulang 72 KB ito. Sa madaling sabi, mas tamang sabihin: lumapag ang Apollo 11 sa Buwan na may humigit-kumulang 4 KB na RAM at humigit-kumulang 72 KB na ROM.

## Hinabi sa lubid ang mga programa

Ang ROM ng AGC ay "core rope" memory, at literal itong hinabi gamit ang kamay. Kapag dumaan ang wire sa loob ng isang magnetic core, 1 ang bit na iyon; kapag dumaan ito sa tabi ng core, 0. Ibig sabihin, ginawang hardware ang software sa pamamagitan ng paghahabi na parang tela.

Ginawa ito ng mga empleyado ng Raytheon sa Waltham, Massachusetts. Ayon sa detalyadong pagsusuri ni Ken Shirriff, malaking bahagi ng mga tinanggap ay mga babaeng galing sa lokal na industriya ng tela dahil sa kanilang kasanayan sa pananahi. Mga 8 linggo ang abot sa paghabi ng isang module at nagkakahalaga ito ng $15,000. Nagtatago ang bawat module ng 6 na libong word, at anim na module ang bumuo sa kabuuang 36,864 na word.

May mahalagang epekto ito: kailangang i-freeze ang software buwan bago ang paglipad. Walang huling-minutong patch, dahil ang pag-aayos ng bug ay nangangahulugang paghahabi muli.

> **Alam mo ba?** Hindi isa kundi dalawang AGC ang nasa Apollo 11: isa sa Command Module at isa sa Lunar Module. Humigit-kumulang 32 kg ang bigat ng bawat isa at gumagana ito sa crystal clock na 2.048 MHz.

## Ang alarmang tumunog ilang minuto bago lumapag

Sa paglapag noong Hulyo 20, 1969, unang nagpakita ang computer ng Lunar Module sa screen ng alarmang 1202, saka 1201. Parehong nangangahulugan ang dalawa ng "executive overflow": nabigyan ang computer ng mas maraming trabaho kaysa kaya nito. Ayon sa detalyadong salaysay sa Wikipedia, ang sanhi ay mga huwad na signal mula sa rendezvous radar na iniwang naka-standby na nagpaabala sa processor. Hindi ito programming error, hindi pagkakamali ng piloto at hindi sira ng hardware. Sa ugat, nagmula ito sa isang kapintasan sa dokumento ng interface sa pagitan ng dalawang sistema.

Ang tunay na kawili-wili ay ang ginawa ng software sa sitwasyong iyon. Gumagana ang AGC sa scheduler na batay sa prayoridad. Nang dumating ang labis na karga, mabilis itong nag-restart, iniwan ang mga gawaing mababa ang prayoridad, at ipinagpatuloy ang mga kritikal na gawain gaya ng pamamahala sa paglapag. Sapat ang sikat na maliit na memory na iyon dahil matalino itong pinamahalaan.

May isa pang detalyeng nagpahirap pa sa sitwasyon. Ang command na 1668 na inilagay ni Buzz Aldrin sa computer habang lumalapag ay nagdagdag ng karga sa processor na nahihirapan na, at nag-trigger ng isa pang 1202 na alarma. Nalagpasan din ito ng software sa parehong paraan, at lumapag ang Eagle sa ibabaw ng Buwan.

Binuo ang software sa MIT Instrumentation Laboratory. Magkaibang team ang nagpatakbo ng software ng Command Module (COLOSSUS) at ng Lunar Module (LUMINARY). Ang pagsasakatuparan ng mga detalye ay nasa team na pinamunuan ni Margaret Hamilton.

## Noon / ngayon

| Apollo Guidance Computer (1969) | Cellphone ngayon |
|---|---|
| Humigit-kumulang 4 KB na nabububurang memory (RAM) | Gigabytes ng RAM |
| Humigit-kumulang 72 KB na ROM na hinabi sa kamay | Daan-daang gigabyte ng storage |
| Buwan-buwang paghahabi para sa update ng software | Mga update na kusang bumababa sa gabi |
| Humigit-kumulang 32 kg | Kasya sa palad |

## Ang tunay na aral ng numero

Madalas ikuwento ang "4 KB" na parang "tingnan mo kung gaano ito kaprimitibo". Pero kabaligtaran ang diwa ng kuwento: pinilit ng limitadong memory ang mga inhinyero na pagkuwentahan ang bawat bit. Dahil dito isinilang ang software na nagbibigay-prayoridad sa mga gawain at nakababawi sa sarili sa matinding karga.

Ngayon, hindi maihahambing ang dami ng memory ng mga device sa bulsa natin, pero hindi na sinusulat nang ganoon kaingat ang karamihan ng mga app. Ang isang update lang ng isang messaging app ay maaaring daan-daang beses na mas malaki kaysa sa buong software ng Apollo.

Sa palagay mo, mas mahuhusay bang inhinyero ang nabubuo ng mga limitasyon, o ng kasaganaan?
