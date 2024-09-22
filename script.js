let buttonGenerate = document.getElementsByClassName("generate")[0]; 
let randomWord = "";

buttonGenerate.addEventListener("click", ()=>generateWord()); 

function generateWord(){
    fetch("liste.txt")
    .then(reponse => reponse.text())
    .then(data => {
        var wordList = data.split("\n");
        var randomLine = Math.floor(Math.random()*wordList.length);
        randomWord = wordList[randomLine];
        
        document.getElementById("word").innerHTML = randomWord;
    })
}


