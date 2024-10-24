function contarVogais() {
    const frase = document.getElementById("input-frase").value;
    const vogais = "aeiouAEIOU";
    let contador = 0;
  
    for (let char of frase) {
      if (vogais.includes(char)) {
        contador++;
      }
    }
  
    document.getElementById("Resultado").innerText = `O número de vogais são: ${contador}`;
  }
  