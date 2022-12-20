
    var numeroSecreto = parseInt(Math.random() *11 );
    function Chutar(){
    var Resultado = document.getElementById("resultado")
    var chute = parseInt(document.getElementById("valor").value);
        if (chute == numeroSecreto){
            Resultado.innerHTML = " Você acertou" 
        }else if(chute > 10 || chute < 0){
            Resultado.innerHTML = " Digite um número entre 0 atá 10"
    
            
        }else if(numeroSecreto > chute){
            Resultado.innerHTML = ` Errou, o número secreto é Maior que seu chute.`
    
        }
        else {
            Resultado.innerHTML =` Errou, beba mais uma dose   `
        }
    
    }
   // for (var tentativas = 1;tentativas <=3; tentativas++) {}
