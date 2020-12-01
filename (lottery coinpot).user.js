// ==UserScript==
// @name         (multiplier e lottery  coinpot)
// @namespace    xandy
// @version      0.2 (beta)
// @description  faz jogadas e usar tick free
// @author       Alexandre Gomes
// @match        *://coinpot.co/lottery
// @match        *://coinpot.co/multiplier
// @grant        none
// ==/UserScript==

                                                // todos os tempo em milissegundos

var clickloterry = setInterval(autoClicklotery, 30000); //tempo para click da loterry

var stopclickmulti = setInterval(stopmulti, 3600); //tempo em Milissegundos para parar de clicar do multiplier

var myar = setInterval(openWin, 50000); //tempo para abrir a pagina lottery
var muar = setInterval(closeWin, 300000); //tempo em Milissegundos para fecha a pagina lottery

var clickmulti = setInterval(autoClickmulti, 100); //tempo em Milissegundos para velocidade do click do multiplier

var match

function openWin() {
    match = window.open("lottery","myWindow","width=200,height=100");
}

function autoClicklotery(){
    buttonlotery.click();
}


function closeWin() {
    match.close();
}


function autoClickmulti(){
    buttonmulti.click();
}

function stopmulti() {
  clearInterval(clickmulti);
}

var buttonlotery = document.querySelector("#FreeTicketsButtons > div > a:nth-child(8)");

var buttonmulti = document.querySelector("#StakeButtons > div > button:nth-child(2)");
