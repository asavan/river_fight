!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./dist/",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0);var r={modes:["net","fake","ai","hotseat","server"],currentMode:"net",debug:!0,wsPort:8088,negotiatedId:3,color:"blue"};const o=0,i=1,s=2,a=3,c=4,l=5,u="абвгдежзиклмнопрст",f={0:{len:3,count:1},1:{len:2,count:2},2:{len:1,count:3}};function d(t){return t===o||t>=c?0:1}function h(t,e){return m(t,e,()=>{})}function g(t,e,n){if(!t[n])return c;const r=h(t,n),o=h(e,n);if(o===r)return function(t,e,n){if(t.length!==e.length)throw"Illegal state";for(let r=0;r<t.length;++r)if(r!==n&&t[r]!==d(e[r]))return!1;return!0}(t,e,n)?a:s;if(o<r)return i;throw"Illegal state"}function p(t,e,n,r){let i=e+n,s=0;for(;i<t.length&&i>=0;){if(!d(t[i])){t[i]===o&&r(i);break}i+=n,++s}return s}function m(t,e,n){let r=1;return r+=p(t,e,1,n),r+=p(t,e,-1,n),r}const v=["blue","red"];function y(t){for(const e of v)if(t!==e)return e;return""}function w(t){return"red"===t}function L(t){return Math.floor((t.offsetX+1)/20)}function E(t,e){e(L(t))}function C(t){return document.querySelector(t)}function b(t){t&&t.remove()}function M(t){const e=C("#field-template").content.cloneNode(!0),n=e.firstElementChild,r=n.querySelector(".frame-text");for(const t of u){const e=document.createElement("span");e.textContent=t,r.appendChild(e)}return t.appendChild(e).firstElementChild,n}function D(){let t,e;const n=new Promise((n,r)=>{t=n,e=r});return n.resolve=t,n.reject=e,n}let B=null;function k(t,e,n,r){let o=0;const i=document.querySelector(".message");n?i.classList.add("enemy"):i.classList.remove("enemy"),B&&(i.innerHTML="",clearInterval(B)),B=setInterval((function(){o<t.length?(i.innerHTML+=t.charAt(o),++o):(clearInterval(B),B=setTimeout(()=>{i.innerHTML=""},r))}),e)}function _(t){k(t,70,!1,2e3)}function P(t,e){return function(t,e,n,r){return"https:"===t?null:e?"ws://"+e:"ws://"+n+":"+r.wsPort}(t.protocol,e.wh,t.hostname,e)}function A(t,e){return e.sh||t.href}const T=t=>new Promise(e=>setTimeout(e,t));function O(t){const e=D();let n=null,r=0;const o=new Array(u.length).fill(0);const i=[],s=t.querySelector(".grid"),a=M(s);a.classList.add("adjust-first");const c=function(t,e){const n=t.createElement("div");return n.classList.add("shipyard"),e.appendChild(n),n}(t,s);function l(e){i.push(function(e){const n=t.createElement("div");return n.classList.add("ship"),n.style.width=20*e+"px",c.appendChild(n),{length:e,html:n}}(e)),++r}for(let[t,e]of Object.entries(f))for(let t=0;t<e.count;t++)l(e.len);function d(t,e){n={s:t,n:e};for(const t of i)t.html.classList.remove("choosen");t.html.classList.add("choosen")}for(const t of i)t.html.addEventListener("click",e=>{const n=L(e);d(t,n)});const h=a.querySelector(".river");function g(){a.classList.remove("adjust-first"),a.classList.add("adjust-third"),h.removeEventListener("click",m)}function p(i){if(null==n)return _("Выберите корабль"),!1;const s=i-n.n;if(!function(t,e,n){if(!function(t,e,n){if(e<0)return!1;const r=e-1;if(r>=0&&t[r]>0)return!1;for(let r=0;r<n;r++){const n=e+r;if(n>t.length-1)return!1;if(t[n]>0)return!1}const o=e+n;return!(o<t.length&&t[o]>0)}(t,e,n))return!1;for(let r=0;r<n;r++)t[e+r]=1;return--r,!0}(o,s,n.s.length))return _("Тесно!"),!1;const a=t.createElement("div");return a.classList.add("ship_river"),a.classList.add("diagonal-line"),a.style.width=n.s.html.style.width,a.style.left=20*s+"px",h.appendChild(a),n.s.html.classList.add("disabled"),n=null,0===r&&e.resolve({field:o,onOpponentReady:g}),!0}function m(t){E(t,p)}return h.addEventListener("click",m),{myFieldPromise:e,onOpponentReady:g,putShip:p,ships:i,choose:d}}function S(t){return function(t,e){let n=t+Math.random()*(e-t);return Math.floor(n)}(0,t)}function I(t){let e=function(t){let e=0;for(let n=0;n<t.length;n++)t[n]===o&&++e;if(0===e)throw"Illegal state";return S(e)}(t),n=0;for(;n<t.length&&(t[n]===o&&--e,!(e<0));n++);return t.length,n}function N(t){const e=[[0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1],[0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0],[0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1],[1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1],[1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1],[1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1]];return t<0&&(t=S(e.length)),e[t]}function x(t,e){let n=new Array(t).fill(o),r=-1,a=0,u=-1;function f(t,e){if(r<0)return I(t);if(r>=t.length)throw"Illegal state";if(t[r]=e,e===i){0===a&&(a=0===S(2)?-1:1);let e=-1;return p(t,r,a,t=>{e=t}),e>=0?e:(a*=-1,p(t,r,a,t=>{e=t}),e>=0?e:I(t))}if(e===s)return m(t,r,e=>{t[e]=l}),a=0,I(t);if(e===c){if(0!==a){a*=-1;let e=-1;return p(t,r,a,t=>{e=t}),e>=0?e:(a=0,I(t))}return I(t)}return I(t)}return{guess:function(t){const e=f(n,t);if(e>=n.length||e<0)throw"Illegal state1";return u=e,e},setFieldAndDirection:function(t,e,o){n=t,a=e,r=o},setLastMove:function(t){r=t}}}function R(){}function H(t,e,n,r,l){k("Игра началась",70,!1,2e3);const u={playerMove:R,enemyMove:R,meMove:R,aiMove:R,gameover:R};function f(e,n){const r=t.getElementsByClassName("overlay")[0];t.getElementsByClassName("close")[0].addEventListener("click",(function(t){t.preventDefault(),r.classList.remove("show")}),!1);r.querySelectorAll("h2")[0].textContent=e;const o=r.querySelectorAll(".content")[0];o.textContent="",n&&(o.textContent=n),r.classList.add("show")}function d(t){return u.aiMove(t)}function h(t){return u.meMove(t)}let p=w(l);const v=function(t){const e=M(t);return e.classList.add("adjust-second"),e.querySelector(".river")}(t.querySelector(".grid")),y=t.querySelector(".river"),L={realField:n,guessedField:new Array(n.length).fill(o),htmlRiver:y,onOpponentMiss:h,onOpponentHit:d,isEnemy:!1},b={realField:r,guessedField:new Array(n.length).fill(o),htmlRiver:v,onOpponentMiss:d,onOpponentHit:h,isEnemy:!0};function D(t){t>=n.length?t=n.length-1:t<0&&(t=0);const e=p?L:b,r=function(t,e,n,r,o){let i=n[t];r[t]=i;const s=g(n,r,t);let a;r[t]=s,a=C(i?"#ship-template":"#dot-template2");const c=a.content.cloneNode(!0),l=c.firstElementChild;return i?e?l.classList.add("diagonal-line-enemy"):l.classList.add("diagonal-line"):e&&l.classList.add("enemy"),o.appendChild(c),l.style.left=20*t+"px",l.style.width="20px",{html:l,res:i,verdict:s}}(t,p,e.realField,e.guessedField,e.htmlRiver);var o;k(((o=r.verdict)===i?"Ранил":o===s?"Убил":o===c?"Мимо":o===a?"Победа":void 0)+"!",70,p,2e3),r.verdict===c?(p=!p,e.onOpponentMiss(r.verdict)):r.verdict===a?p?(u.gameover(!1),f("Ты проиграл","В другой раз повезет")):(u.gameover(!0),f("Победа","А ты хорош!")):(e.onOpponentHit(r.verdict),r.verdict===s&&m(e.guessedField,t,t=>{!function(t,e,n){const r=C("#dot-template").content.cloneNode(!0),o=r.firstElementChild;n&&o.classList.add("enemy"),e.appendChild(r),o.style.left=20*t+"px",o.style.width="20px"}(t,e.htmlRiver,p)}))}function B(t){p&&(u.enemyMove(t),D(t))}function _(t){p||(u.playerMove(t),D(t))}function P(t){p&&E(t,B)}return v.addEventListener("click",(function(t){p||E(t,_)})),{fireEnemy:B,firePlayer:_,on:function(t,e){u[t]=e},enableHotSeat:function(){y.addEventListener("click",P)},color:l}}function q(t,e,n,r,o){r&&r.onOpponentReady();const i=N(-1),s=x(n.length),a=H(e,0,n,i,o);function l(t){const e=s.guess(t);setTimeout(()=>{a.fireEnemy(e)},700)}return a.on("aiMove",l),a.on("enemyMove",t=>s.setLastMove(t)),w(o)&&l(c),a}let F=null,j="",U="",G=null;function K(t){}const X={recv:K,open:K,socket_open:K,socket_close:K,server_message:K};let J=null,Y=!1;function V(t){const e=new RTCPeerConnection;return e.onicecandidate=function(n){e&&n&&n.candidate&&W("candidate",n.candidate,t)},J=e.createDataChannel("my channel",{negotiated:!0,id:G.negotiatedId}),J.onmessage=function(t){X.recv(t.data)},J.onopen=function(){Y=!0,W("close",{},t),t.close(),X.open()},J.onclose=function(){Y=!1},J.onerror=function(){},e}function W(t,e,n){const r={from:j,to:U,action:t,data:e};return n.send(JSON.stringify(r))}var z={connect:function(t,e,n,r){G=r,F=new WebSocket(t);let o=null;F.onopen=function(t){X.socket_open(),n||(j=e,U=y(e),W("connected",{color:j},F))},F.onclose=function(t){X.socket_close()},F.onmessage=function(t){const e=JSON.parse(t.data);e.from!==j&&(n?X.server_message(t.data):"candidate"===e.action?function(t,e){e.addIceCandidate(new RTCIceCandidate(t)).catch(t=>{})}(e.data,o):"offer"===e.action?(U=e.from,o=function(t){const e=V(F);return e.setRemoteDescription(t).then(()=>e.createAnswer()).then(t=>e.setLocalDescription(t)).then(()=>W("answer",e.localDescription,F)).catch(t=>{}),e}(e.data)):"answer"===e.action?function(t,e){e.setRemoteDescription(new RTCSessionDescription(t))}(e.data,o):"connected"===e.action?o=function(){const t=V(F);return t.createOffer({offerToReceiveAudio:!1,offerToReceiveVideo:!1}).then(e=>t.setLocalDescription(e)).then(()=>{W("offer",t.localDescription,F)}).catch(t=>{}),t}():e.action)},F.onerror=function(t){}},sendMessage:function(t){return!!J&&(!!Y&&(J.send(t),Y))},on:function(t,e){X[t]=e}};function Q(t){this.mode=$.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,n=this.data.length;e<n;e++){var r=[],o=this.data.charCodeAt(e);o>65536?(r[0]=240|(1835008&o)>>>18,r[1]=128|(258048&o)>>>12,r[2]=128|(4032&o)>>>6,r[3]=128|63&o):o>2048?(r[0]=224|(61440&o)>>>12,r[1]=128|(4032&o)>>>6,r[2]=128|63&o):o>128?(r[0]=192|(1984&o)>>>6,r[1]=128|63&o):r[0]=o,this.parsedData.push(r)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function Z(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}Q.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,n=this.parsedData.length;e<n;e++)t.put(this.parsedData[e],8)}},Z.prototype={addData:function(t){var e=new Q(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[n][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=Z.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var n=-1;n<=7;n++)if(!(t+n<=-1||this.moduleCount<=t+n))for(var r=-1;r<=7;r++)e+r<=-1||this.moduleCount<=e+r||(this.modules[t+n][e+r]=0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4)},getBestMaskPattern:function(){for(var t=0,e=0,n=0;n<8;n++){this.makeImpl(!0,n);var r=dt.getLostPoint(this);(0==n||t>r)&&(t=r,e=n)}return e},createMovieClip:function(t,e,n){var r=t.createEmptyMovieClip(e,n);this.make();for(var o=0;o<this.modules.length;o++)for(var i=1*o,s=0;s<this.modules[o].length;s++){var a=1*s;this.modules[o][s]&&(r.beginFill(0,100),r.moveTo(a,i),r.lineTo(a+1,i),r.lineTo(a+1,i+1),r.lineTo(a,i+1),r.endFill())}return r},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=dt.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var r=t[e],o=t[n];if(null==this.modules[r][o])for(var i=-2;i<=2;i++)for(var s=-2;s<=2;s++)this.modules[r+i][o+s]=-2==i||2==i||-2==s||2==s||0==i&&0==s}},setupTypeNumber:function(t){for(var e=dt.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var r=!t&&1==(e>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r}for(n=0;n<18;n++){r=!t&&1==(e>>n&1);this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r}},setupTypeInfo:function(t,e){for(var n=this.errorCorrectLevel<<3|e,r=dt.getBCHTypeInfo(n),o=0;o<15;o++){var i=!t&&1==(r>>o&1);o<6?this.modules[o][8]=i:o<8?this.modules[o+1][8]=i:this.modules[this.moduleCount-15+o][8]=i}for(o=0;o<15;o++){i=!t&&1==(r>>o&1);o<8?this.modules[8][this.moduleCount-o-1]=i:o<9?this.modules[8][15-o-1+1]=i:this.modules[8][15-o-1]=i}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var n=-1,r=this.moduleCount-1,o=7,i=0,s=this.moduleCount-1;s>0;s-=2)for(6==s&&s--;;){for(var a=0;a<2;a++)if(null==this.modules[r][s-a]){var c=!1;i<t.length&&(c=1==(t[i]>>>o&1)),dt.getMask(e,r,s-a)&&(c=!c),this.modules[r][s-a]=c,-1==--o&&(i++,o=7)}if((r+=n)<0||this.moduleCount<=r){r-=n,n=-n;break}}}},Z.PAD0=236,Z.PAD1=17,Z.createData=function(t,e,n){for(var r=mt.getRSBlocks(t,e),o=new vt,i=0;i<n.length;i++){var s=n[i];o.put(s.mode,4),o.put(s.getLength(),dt.getLengthInBits(s.mode,t)),s.write(o)}var a=0;for(i=0;i<r.length;i++)a+=r[i].dataCount;if(o.getLengthInBits()>8*a)throw new Error("code length overflow. ("+o.getLengthInBits()+">"+8*a+")");for(o.getLengthInBits()+4<=8*a&&o.put(0,4);o.getLengthInBits()%8!=0;)o.putBit(!1);for(;!(o.getLengthInBits()>=8*a||(o.put(Z.PAD0,8),o.getLengthInBits()>=8*a));)o.put(Z.PAD1,8);return Z.createBytes(o,r)},Z.createBytes=function(t,e){for(var n=0,r=0,o=0,i=new Array(e.length),s=new Array(e.length),a=0;a<e.length;a++){var c=e[a].dataCount,l=e[a].totalCount-c;r=Math.max(r,c),o=Math.max(o,l),i[a]=new Array(c);for(var u=0;u<i[a].length;u++)i[a][u]=255&t.buffer[u+n];n+=c;var f=dt.getErrorCorrectPolynomial(l),d=new pt(i[a],f.getLength()-1).mod(f);s[a]=new Array(f.getLength()-1);for(u=0;u<s[a].length;u++){var h=u+d.getLength()-s[a].length;s[a][u]=h>=0?d.get(h):0}}var g=0;for(u=0;u<e.length;u++)g+=e[u].totalCount;var p=new Array(g),m=0;for(u=0;u<r;u++)for(a=0;a<e.length;a++)u<i[a].length&&(p[m++]=i[a][u]);for(u=0;u<o;u++)for(a=0;a<e.length;a++)u<s[a].length&&(p[m++]=s[a][u]);return p};for(var $={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},tt=1,et=0,nt=3,rt=2,ot=0,it=1,st=2,at=3,ct=4,lt=5,ut=6,ft=7,dt={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;dt.getBCHDigit(e)-dt.getBCHDigit(dt.G15)>=0;)e^=dt.G15<<dt.getBCHDigit(e)-dt.getBCHDigit(dt.G15);return(t<<10|e)^dt.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;dt.getBCHDigit(e)-dt.getBCHDigit(dt.G18)>=0;)e^=dt.G18<<dt.getBCHDigit(e)-dt.getBCHDigit(dt.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return dt.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case ot:return(e+n)%2==0;case it:return e%2==0;case st:return n%3==0;case at:return(e+n)%3==0;case ct:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case lt:return e*n%2+e*n%3==0;case ut:return(e*n%2+e*n%3)%2==0;case ft:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new pt([1],0),n=0;n<t;n++)e=e.multiply(new pt([1,ht.gexp(n)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case $.MODE_NUMBER:return 10;case $.MODE_ALPHA_NUM:return 9;case $.MODE_8BIT_BYTE:case $.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case $.MODE_NUMBER:return 12;case $.MODE_ALPHA_NUM:return 11;case $.MODE_8BIT_BYTE:return 16;case $.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case $.MODE_NUMBER:return 14;case $.MODE_ALPHA_NUM:return 13;case $.MODE_8BIT_BYTE:return 16;case $.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,r=0;r<e;r++)for(var o=0;o<e;o++){for(var i=0,s=t.isDark(r,o),a=-1;a<=1;a++)if(!(r+a<0||e<=r+a))for(var c=-1;c<=1;c++)o+c<0||e<=o+c||0==a&&0==c||s==t.isDark(r+a,o+c)&&i++;i>5&&(n+=3+i-5)}for(r=0;r<e-1;r++)for(o=0;o<e-1;o++){var l=0;t.isDark(r,o)&&l++,t.isDark(r+1,o)&&l++,t.isDark(r,o+1)&&l++,t.isDark(r+1,o+1)&&l++,0!=l&&4!=l||(n+=3)}for(r=0;r<e;r++)for(o=0;o<e-6;o++)t.isDark(r,o)&&!t.isDark(r,o+1)&&t.isDark(r,o+2)&&t.isDark(r,o+3)&&t.isDark(r,o+4)&&!t.isDark(r,o+5)&&t.isDark(r,o+6)&&(n+=40);for(o=0;o<e;o++)for(r=0;r<e-6;r++)t.isDark(r,o)&&!t.isDark(r+1,o)&&t.isDark(r+2,o)&&t.isDark(r+3,o)&&t.isDark(r+4,o)&&!t.isDark(r+5,o)&&t.isDark(r+6,o)&&(n+=40);var u=0;for(o=0;o<e;o++)for(r=0;r<e;r++)t.isDark(r,o)&&u++;return n+=10*(Math.abs(100*u/e/e-50)/5)}},ht={glog:function(t){if(t<1)throw new Error("glog("+t+")");return ht.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return ht.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},gt=0;gt<8;gt++)ht.EXP_TABLE[gt]=1<<gt;for(gt=8;gt<256;gt++)ht.EXP_TABLE[gt]=ht.EXP_TABLE[gt-4]^ht.EXP_TABLE[gt-5]^ht.EXP_TABLE[gt-6]^ht.EXP_TABLE[gt-8];for(gt=0;gt<255;gt++)ht.LOG_TABLE[ht.EXP_TABLE[gt]]=gt;function pt(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var n=0;n<t.length&&0==t[n];)n++;this.num=new Array(t.length-n+e);for(var r=0;r<t.length-n;r++)this.num[r]=t[r+n]}function mt(t,e){this.totalCount=t,this.dataCount=e}function vt(){this.buffer=[],this.length=0}pt.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var r=0;r<t.getLength();r++)e[n+r]^=ht.gexp(ht.glog(this.get(n))+ht.glog(t.get(r)));return new pt(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=ht.glog(this.get(0))-ht.glog(t.get(0)),n=new Array(this.getLength()),r=0;r<this.getLength();r++)n[r]=this.get(r);for(r=0;r<t.getLength();r++)n[r]^=ht.gexp(ht.glog(t.get(r))+e);return new pt(n,0).mod(t)}},mt.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],mt.getRSBlocks=function(t,e){var n=mt.getRsBlockTable(t,e);if(null==n)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var r=n.length/3,o=[],i=0;i<r;i++)for(var s=n[3*i+0],a=n[3*i+1],c=n[3*i+2],l=0;l<s;l++)o.push(new mt(a,c));return o},mt.getRsBlockTable=function(t,e){switch(e){case tt:return mt.RS_BLOCK_TABLE[4*(t-1)+0];case et:return mt.RS_BLOCK_TABLE[4*(t-1)+1];case nt:return mt.RS_BLOCK_TABLE[4*(t-1)+2];case rt:return mt.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},vt.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var n=0;n<e;n++)this.putBit(1==(t>>>e-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var yt=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function wt(t){if(this.options={padding:4,width:256,height:256,typeNumber:4,color:"#000000",background:"#ffffff",ecl:"M"},"string"==typeof t&&(t={content:t}),t)for(var e in t)this.options[e]=t[e];if("string"!=typeof this.options.content)throw new Error("Expected 'content' as string!");if(0===this.options.content.length)throw new Error("Expected 'content' to be non-empty!");if(!(this.options.padding>=0))throw new Error("Expected 'padding' value to be non-negative!");if(!(this.options.width>0&&this.options.height>0))throw new Error("Expected 'width' or 'height' value to be higher than zero!");var n=this.options.content,r=function(t,e){for(var n=function(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}(t),r=1,o=0,i=0,s=yt.length;i<=s;i++){var a=yt[i];if(!a)throw new Error("Content too long: expected "+o+" but got "+n);switch(e){case"L":o=a[0];break;case"M":o=a[1];break;case"Q":o=a[2];break;case"H":o=a[3];break;default:throw new Error("Unknwon error correction level: "+e)}if(n<=o)break;r++}if(r>yt.length)throw new Error("Content too long");return r}(n,this.options.ecl),o=function(t){switch(t){case"L":return tt;case"M":return et;case"Q":return nt;case"H":return rt;default:throw new Error("Unknwon error correction level: "+t)}}(this.options.ecl);this.qrcode=new Z(r,o),this.qrcode.addData(n),this.qrcode.make()}wt.prototype.svg=function(t){var e=this.options||{},n=this.qrcode.modules;void 0===t&&(t={container:e.container||"svg"});for(var r=void 0===e.pretty||!!e.pretty,o=r?"  ":"",i=r?"\r\n":"",s=e.width,a=e.height,c=n.length,l=s/(c+2*e.padding),u=a/(c+2*e.padding),f=void 0!==e.join&&!!e.join,d=void 0!==e.swap&&!!e.swap,h=void 0===e.xmlDeclaration||!!e.xmlDeclaration,g=void 0!==e.predefined&&!!e.predefined,p=g?o+'<defs><path id="qrmodule" d="M0 0 h'+u+" v"+l+' H0 z" style="fill:'+e.color+';shape-rendering:crispEdges;" /></defs>'+i:"",m=o+'<rect x="0" y="0" width="'+s+'" height="'+a+'" style="fill:'+e.background+';shape-rendering:crispEdges;"/>'+i,v="",y="",w=0;w<c;w++)for(var L=0;L<c;L++){if(n[L][w]){var E=L*l+e.padding*l,C=w*u+e.padding*u;if(d){var b=E;E=C,C=b}if(f){var M=l+E,D=u+C;E=Number.isInteger(E)?Number(E):E.toFixed(2),C=Number.isInteger(C)?Number(C):C.toFixed(2),M=Number.isInteger(M)?Number(M):M.toFixed(2),y+="M"+E+","+C+" V"+(D=Number.isInteger(D)?Number(D):D.toFixed(2))+" H"+M+" V"+C+" H"+E+" Z "}else v+=g?o+'<use x="'+E.toString()+'" y="'+C.toString()+'" href="#qrmodule" />'+i:o+'<rect x="'+E.toString()+'" y="'+C.toString()+'" width="'+l+'" height="'+u+'" style="fill:'+e.color+';shape-rendering:crispEdges;"/>'+i}}f&&(v=o+'<path x="0" y="0" style="fill:'+e.color+';shape-rendering:crispEdges;" d="'+y+'" />');var B="";switch(t.container){case"svg":h&&(B+='<?xml version="1.0" standalone="yes"?>'+i),B+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+s+'" height="'+a+'">'+i,B+=p+m+v,B+="</svg>";break;case"svg-viewbox":h&&(B+='<?xml version="1.0" standalone="yes"?>'+i),B+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 '+s+" "+a+'">'+i,B+=p+m+v,B+="</svg>";break;case"g":B+='<g width="'+s+'" height="'+a+'">'+i,B+=p+m+v,B+="</g>";break;default:B+=(p+m+v).replace(/^\s+/,"")}return B};var Lt=function(t,e){const n=new wt({content:t,container:"svg-viewbox",join:!0}).svg();var r;return e.innerHTML=n,(r=e).addEventListener("click",()=>r.classList.toggle("big")),e};function Et(t,e){const n={method:e};return n[e]=t,JSON.stringify(n)}var Ct={parser:function(t,e,n){const r=JSON.parse(t),o=r[r.method];return r.method===e&&n(o),o},toMove:function(t){return Et(t,"move")},toField:function(t){return Et(t,"field")}};function bt(t,e){if(!t)return;const n=t.querySelector("path");n&&(n.style.fill=e)}function Mt(t,e,n,r,o){const i=o.createElement("div");i.classList.add("qrcode"),r.appendChild(i),t.searchParams.set("color",n),Lt(t.toString(),i),bt(i,n),e[n]=i}function Dt(t,e){let n=-1,r=-1;for(let o=0;o<t.length;o++)if(1===t[o]&&(n<0&&(n=o),r=-1),0===t[o])if(r<0){if(r=o,n>=0&&r-n===e)return n;n=-1}else r=-1,n=-1;return n}function Bt(t,e,n){for(let r=e;r<e+n+1;r++)t[r]=0}function kt(t,e){const n=document.querySelector(".secret-code");let r=0,o=!1,i=!1;const s=N(-1);n.addEventListener("click",(async function(n){++r,r>3&&(r=0,o?(i||_t(e),i=!0):(await async function(t,e){const n=t.ships;for(const r of n){t.choose(r,0),await T(500);const n=Dt(e,r.length);t.putShip(n)&&Bt(e,n,r.length),await T(200)}}(t,s),o=!0))}))}function _t(t){return t.getBattle().then(t=>{const e=x(N(-1).length,t.color);function n(n){const r=e.guess(n);setTimeout(()=>{t.firePlayer(r)},1e3)}return t.on("meMove",n),t.on("playerMove",t=>{e.setLastMove(t)}),n(c),!0})}function Pt(t){const e=document.querySelector(".secret-code2");let n=0,r=!1;e.addEventListener("click",(async function(e){if(++n,n>=10&&(window.location.href="https://asavan.github.io/"),n>3){if(r)return;if(t){if(r)return!1;r=!0,_t(t)}}}))}function At(t,e,n){const r=O(e),o=D();return r.myFieldPromise.then(t=>{const r=q(0,e,t.field,t,n.color);o.resolve(r)}),{myField:r,getBattle:function(){return o}}}function Tt(t,e){Pt(t),t&&t.myField&&kt(t.myField,t);try{t.getBattle().then(t=>{t.on("gameover",t=>{e.querySelector(".butInstall").classList.remove("hidden2")})})}catch(t){}}function Ot(t,e,n){let r=null;switch(n.currentMode){case"ai":r=At(0,e,n),Tt(r,e);break;case"net":r=function(t,e,n){const r=n.color;let o=!0;const i=P(t.location,n);let s=A(t.location,n),a=null,c=!1,l=null;const u=D(),f=D(),d=O(e);if(!!i){z.on("socket_open",()=>{const t=new URL(s);t.searchParams.set("color",y(r));const n=e.querySelector(".qrcontainer"),o=e.createElement("div");o.classList.add("qrcode"),n.appendChild(o),a=Lt(t.toString(),o)}),z.on("socket_close",()=>{b(a)});try{z.connect(i,r,!1,n)}catch(t){o=!0}z.on("open",()=>{o=!1}),z.on("recv",t=>{Ct.parser(t,"field",t=>{c||u.resolve(t),c=!0}),Ct.parser(t,"move",t=>{l.fireEnemy(t)})})}return d.myFieldPromise.then(t=>{const n=t.field;if(o)b(a),l=q(0,e,n,t,r),f.resolve(l);else{k("Ждем оппонента",70,!1,1e5);const o=z.sendMessage(Ct.toField(n));u.then(i=>{if(!o){z.sendMessage(Ct.toField(n))}t.onOpponentReady(),l=H(e,0,n,i,r),l.on("playerMove",t=>z.sendMessage(Ct.toMove(t))),f.resolve(l)})}}),{myField:d,getBattle:function(){return f}}}(t,e,n),Tt(r,e);break;case"server":r=function(t,e,n){const r=P(t.location,n);let o=A(t.location,n),i={};{const t=new URL(o);t.searchParams.delete("currentMode");const n=e.querySelector(".qrcontainerserver");Mt(t,i,"blue",n,e),Mt(t,i,"red",n,e)}z.on("socket_open",()=>{bt(i.blue,"royalblue")}),z.on("server_message",t=>{const e=JSON.parse(t);"connected"===e.action?bt(i[e.from],"black"):"close"===e.action&&b(i[e.from])});try{z.connect(r,"black",!0,n)}catch(t){}}(t,e,n);break;case"hostseat":r=At(0,e,n),r.getBattle().then(t=>t.enableHotSeat())}return r}!function(t,e,n){"loading"!==e.readyState?n(t,e):e.addEventListener("DOMContentLoaded",(function(r){n(t,e)}))}(window,document,(function(t,e){const n=t.location.search,o=new URLSearchParams(n);for(const[t,e]of o)r[t]=e;Ot(t,e,r)})),"serviceWorker"in navigator&&(navigator.serviceWorker.register("./sw.js",{scope:"./"}),function(t,e){const n=e.querySelector(".butInstall");let r;n.addEventListener("click",t=>{n.classList.add("hidden"),r.prompt(),r.userChoice.then(t=>{})}),t.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),r=t,n.classList.remove("hidden")})}(window,document))}]);