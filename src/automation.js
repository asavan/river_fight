import {generateAiField} from "./ai.js";
import {delay} from "./helper.js";
import {ai} from "./ai";
import {VERDICT} from "./core";

function findPlaceToShip(field, len) {
    let start = -1;
    let end = -1;
    for (let i = 0; i < field.length; i++) {
        if (field[i] === 1) {
            if (start < 0) {
                start = i;
            }
            end = -1;
        }
        if (field[i] === 0) {
            if (end < 0) {
                end = i;
                if (start >= 0) {
                    if (end - start === len) {
                        return start;
                    }
                }
                start = -1;
            } else {
                end = -1;
                start = -1;
            }
        }
    }
    return start;
}

function fillZeroes(field, putTo, length) {
    for (let i = putTo; i < putTo + length + 1; i++) {
        field[i] = 0;
    }
}

async function placeShips(p, field) {
    const ships = p.ships;
    for (const shipsKey of ships) {
        p.choose(shipsKey, 0);
        await delay(500);
        const putTo = findPlaceToShip(field, shipsKey.length);
        const res = p.putShip(putTo);
        if (res) {
            fillZeroes(field, putTo, shipsKey.length);
        } else {
            console.log(field, putTo, shipsKey.length);
        }
        await delay(200);
    }
}

export function placementAutomation(p, game) {
    const secretCodeElem = document.querySelector(".secret-code");

    let clickCount = 0;
    let placementDone = false;
    let aiInited = false;
    const field = generateAiField(-1);

    const secretClickHandler = async function (e) {
        ++clickCount;
        if (clickCount > 3) {
            clickCount = 0;
            if (!placementDone) {
                await placeShips(p, field);
                placementDone = true;
            } else {
                if (!aiInited) {
                    playerAi(game);
                }
                aiInited = true;
            }

        }
    }
    secretCodeElem.addEventListener("click", secretClickHandler);
}


function playerAi(game) {
    return game.getBattle().then(g => {
        const field = generateAiField(-1);
        const aiBot = ai(field.length, g.color);

        function onAiMove1(verdict) {
            const n = aiBot.guess(verdict);
            // console.log("ai move " + n);
            setTimeout(() => {
                g.firePlayer(n);
            }, 1000);
        }

        g.on('meMove', onAiMove1);
        g.on('playerMove', (n) => {
            console.log("Player move " + n);
            aiBot.setLastMove(n)
        });
        onAiMove1(VERDICT.MISS);
        return true;
    });
}

export function enableSecretMenu(game) {
    const secretCodeElem = document.querySelector(".secret-code2");
    let clickCount = 0;
    let aiInited = false;
    const secretClickHandler = async function (e) {
        ++clickCount;
        if (clickCount >= 10) {
            window.location.href = "https://asavan.github.io/";
        }
        if (clickCount > 3) {
            if (aiInited) {
                return ;
            }
            if (game) {
                if (aiInited) {
                    console.log("inited");
                    return false;
                }
                aiInited = true;
                playerAi(game);
            }
        }
    }
    secretCodeElem.addEventListener("click", secretClickHandler);
}
