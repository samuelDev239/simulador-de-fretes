


function enviar(){
    let pontos = document.getElementById('pontos').value
let origem = document.getElementById('origem').value
   if(pontos <=119 && origem == 1){
    text = "O valor é igual a: R$ 12,90"
   }
   else if(pontos <=119 && origem == 2){
    text = "O valor é igual a: R$ 17,90"
   }
   else if(pontos >=119 <=149 && origem == 1){
    text ="O valor é igual a: R$ 7,74"
   }
   else if(pontos >=120 && pontos <=149 && origem == 2){
    text = " O valor é igual a: R$ 10,74"
   }
    document.getElementById('resultado').innerText = text
} 