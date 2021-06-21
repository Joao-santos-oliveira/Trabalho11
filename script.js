function botao(){
    let inputText = document.querySelector('#txt');
    let inputAno = document.querySelector('#idade');
    let oi = document.querySelector('#oi')
    oi.innerHTML = `Seu nome é ${inputText.value}! E você tem ${inputAno.value} anos!`
}