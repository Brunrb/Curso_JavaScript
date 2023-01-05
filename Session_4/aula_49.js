// Delcaração de função (Function hosisting)

falaOi();
function falaOi(){
    console.log( 'Oie');
}

// First-class objects (Objetos de primeira classe)
// Function expression 

// const souUmDado = function(){
//     console.log('Sou um dado.');
// };
// souUmDado();

function souUmDado() {
    console.log('Sou um dado.');
}

souUmDado();

function executaFuncao(funcao){
    console.log('Vou exeecutar sua função abaixo: ');
    funcao();
};

// executaFuncao(souUmDado);

const funcaoArrow = () => {
    console.log('Sou uma Arrow function');
};

funcaoArrow();

// Dentro de um objeto

const obj = {
    // falar: function(){
    //     console.log('Estou falando...');
    // }
    
    falar(){
        console.log('Estou falando...');
    }
};

obj.falar();