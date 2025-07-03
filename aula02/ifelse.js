function calcularMedia(){
    //criar as referencias com os elementos da página
    let inNome = document.getElementById("inNome");
    let inNota1 = document.getElementById("inNota1")
    let inNota2 = document.getElementById("inNota2");
    let outSituação = document.getElementById("outSituação");
    let outMedia = document.getElementById("outMedia");


    // obter os valores os inputs
    const nome = inNome.value;
    const nota1 = Number( inNota1.value)
    const nota2 = Number ( inNota2.value)

    // Calcular a média
    let media = (nota1+nota2)/2;
    outMedia.textContent = "Média das Notas: " + media

    let Situação = 0;
    
        // if else
        if(media >= 7){
            Situação = ("Aprovado")
        } else if(media >= 4 && media < 7){
            Situação = ("Exame")
        } else{
            Situação = ("Reprovado")
        }

        outSituação.textContent = ("Situação - Aluno " + nome + ": " + Situação)
    

}
document.getElementById("btResultado").addEventListener("click", calcularMedia)




    