function tabuada(){
    let num = document.getElementById("txtn")
    let tab = document.getElementById("seltab")
    if (num.value.length == 0){
        alert("Por favor, digite um número")
    }else {
    let n = Number(num.value)
    //let c = 1
    tab.innerHTML = ""
   
    //while(c <=10){
        for(let c= 1; c<=10; c++) {
        let item = document.createElement('option') // criando dinamico, inves de ser pelo html
        item.text = ` ${n} X ${c} = ${n * c}`
        item.value = ` tab${c}` // para js nao faz sentido, mas para outras linguagem SIM
        tab.appendChild(item)
        //c++
        if (c  % 2 ==0){
            
        }
        }
    }
}

    

    