// Duas formas de realizar leitura de arquivos

var fs = require('fs');

/**
 * Diversos modulos do node possuem funções que podem ter comportamento
 * síncrono e assíncrono. Por padrão as funções com final Sync() são de tratamento síncrono
 */


//Carregamento do index.html de forma assíncrona
fs.readFile('/index.html', function(erro, arquivo){
    if (erro) throw erro;
    console.log(arquivo);
});

//Carregamento do index.html de forma síncrona
var arquivo = fs.readFileSync('/index.html');
console.log(arquivo);