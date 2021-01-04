//Iniciando a lógica
// Variaveis de controle de interface
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-1-right');
let numeros = document.querySelector('.d-1-3')

// Variaveis de controle de ambiente
let etapaAtual = 0;

function comecarEtapa() {
    //Vai limpar a tela e pegar as informações atuais
    let etapa = etapas[etapaAtual];

    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    numeros.innerHTML = '';


}
//Funções
function clicou(numero) {
    alert('Clicou em ' + numero);
} 

function branco(){
    alert('Clicou em BRANCO')
}

function corrige(){
    alert('Clicou em CORRIGE')
}

function confirma(){
    alert('Clicou em CONFIRMAR')
}