import "./css/style.css";

import settings from "./settings";
import init from "./init";
import game from "./game";
import {ai, generateAiField} from "./ai";
import connection from "./connection";
import protocol from "./protocol";
import {defer, hideElem} from "./helper";
import qr from "./qrcode";
import {VERDICT} from "./core";

function onReady(field) {
    // console.log(field);
    const aiBot = ai(field.length, -1);
    const g = game(document, window, field, aiBot.getFieldEnemy(), 'blue');

    function onAiMove(verdict) {
        const n = aiBot.guess(verdict);
        console.log("ai move " + n);
        setTimeout(() => {
            g.fireEnemy(n);
        }, 700);
    }

    g.on('aiMove', onAiMove);
}

function netGame() {
    const host = window.location.hostname;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let useAi = !urlParams.get('color') || urlParams.get('color') === 'red';
    const color = urlParams.get('color') || 'blue';
    const forceAi = !!urlParams.get('forceAi');
    let code = null;

    connection.on('socket_open', () => {
        if (forceAi) {
            return;
        }
        code = qr.render(window.location.origin);
    });

    connection.on('socket_close', () => {
        hideElem(code);
    });

    let isOpponentReady = false;
    try {
        connection.connect(host, settings.wsPort, color);
    } catch (e) {
        useAi = true;
        console.log(e);
    }

    const myField = init(document);
    connection.on('open', () => {
        useAi = false;
    });
    let g = null;
    const enemyFieldPromise = defer();

    connection.on('recv', (data) => {
        protocol.parser(data, 'field', (enemyField) => {
            console.log("enemy field ready");
            if (!isOpponentReady) {
                enemyFieldPromise.resolve(enemyField);
            }
            isOpponentReady = true;
        });
        protocol.parser(data, 'move', (n) => {
            console.log("Enemy try to move " + n);
            g.fireEnemy(n);
        });
    });

    myField.then((initObj) => {
        const field = initObj.field;
        const opponentAlreadyConnected = connection.sendMessage(protocol.toField(field));
        if (useAi || forceAi) {
            const aiBot = ai(field.length, -1);
            hideElem(code);
            initObj.onOpponentReady();
            g = game(document, window, field, aiBot.getFieldEnemy(), color);

            function onAiMove(verdict) {
                const n = aiBot.guess(verdict);
                // console.log("ai move " + n);
                setTimeout(() => {
                    g.fireEnemy(n);
                }, 700);
            }

            g.on('aiMove', onAiMove);
            onAiMove(VERDICT.MISS);
        } else {
            enemyFieldPromise.then((enemyField) => {
                if (!opponentAlreadyConnected) {
                    const opponentAlreadyConnected2 = connection.sendMessage(protocol.toField(field));
                    if (opponentAlreadyConnected2) {
                        console.log("Smth strange");
                    }
                }
                initObj.onOpponentReady();
                g = game(document, window, field, enemyField, color);
                g.on('playerMove', (n) => connection.sendMessage(protocol.toMove(n)));
            });
        }
    });

    // Promise.all([myField, enemyFieldPromise]).then(values => {
    //     console.log(values);
    //     g = game(document, window, values[0], values[1], color);
    //     g.on('playerMove', (n) => connection.sendMessage(protocol.toMove(n)));
    // });
}

function fake() {
    const aiBot = ai(generateAiField(1).length, 1);
    const host = window.location.hostname;
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const color = urlParams.get('color') || 'blue';
    const g = game(document, window, generateAiField(1), aiBot.getFieldEnemy(), color);

    console.log(host);
    connection.connect(host, settings.wsPort, color);

    function onAiMove(verdict) {
        const n = aiBot.guess(verdict);
        console.log("ai move " + n);
    }

    g.on('aiMove', onAiMove);

    connection.on('recv', (data) => {
        console.log("recieved", data);
        protocol.parser(data, 'move', (n) => {
            g.fireEnemy(n);
        });
    });
    g.on('playerMove', (n) => connection.sendMessage(protocol.toMove(n)));
}

function startGame(mode) {
    switch (mode) {
        case "ai":
            init(document).then(onReady);
            break;
        case "fake":
            fake();
            break;
        case "net":
            netGame();
            break;
    }
}

startGame(settings.currentMode);

if (__USE_SERVICE_WORKERS__) {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js', {scope: './'});
    }
}
