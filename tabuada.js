function tabuada(){
    let numero = document.getElementById('numero');
    let resultado = window.document.getElementById('resposta');
    

    if(numero.value.length == 0){
        window.alert('Por favor, digite um valor.');
    } else {
        resultado.innerHTML = ``;
        num = Number(numero.value);
        for(var i = 1;i<=10;i++){
            let item = document.createElement('option');
            item.text = `${num} X ${i} = ${num*i}`;
            item.value = `res${i}`;
            resultado.appendChild(item);
        }
    }
}