let buttonGenerate = document.getElementsByClassName("generate")[0]; 
let randomWord = "";
let buffer = 0; 

buttonGenerate.addEventListener("click", () => generateWord()); 

function generateWord() {
    fetch("liste.txt")
    .then(reponse => reponse.text())
    .then(data => {
        let wordList = data.split("\n");
        let randomLine = Math.floor(Math.random() * wordList.length);
        randomWord = wordList[randomLine]; 

        let hidden = randomWord[0]; 
        for (let i = 1; i < randomWord.length; i++) {
            hidden += " _"; 
        }
        
        document.getElementById("word").innerHTML = hidden;
        document.getElementById("result").innerHTML = ""; 
    });
}

function treatment() {
    let input = document.getElementById("in").value;

    if (input.toLowerCase() === randomWord.toLowerCase()) {
        document.getElementById("result").innerHTML = "Gagné !";
    } else {
        document.getElementById("result").innerHTML = "Perdu !";
    }

    buffer++; 
    document.getElementById("nbtry").innerHTML = "Nombre de tentatives : " + buffer;
}
