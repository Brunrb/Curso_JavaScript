function funcao(){
    // console.log('Oie');
    console.log(arguments[10]);
}
// funcao();
// funcao('Bruno Rafael', 1,2,3,4,5,6,7,8,9,10);

function funcao_Arg(){
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }

    console.log(total);
}

funcao_Arg(1,2,3,4,5,6,7);

