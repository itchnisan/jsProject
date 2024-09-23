let buttonGenerate = document.getElementsByClassName("generate")[0]; 
let randomWord = "";

buttonGenerate.addEventListener("click", ()=>generateWord()); 

function generateWord(){
    fetch("liste.txt")
    .then(reponse => reponse.text())
    .then(data => {
        let wordList = data.split("\n");
        let randomLine = Math.floor(Math.random() * wordList.length);
        let randomWord = wordList[randomLine];
        
        
        let hidden = randomWord[0]; 
        for(let i = 1; i < randomWord.length; i++){
            hidden += "_"; 
        }
        
        document.getElementById("word").innerHTML = hidden;
    });
}

function treatment() {
    let input = document.getElementById("in").value;
    if(input == randomWord){
        document.getElementById("result").innerHTML = "gagné";

    }else{
        document.getElementById("result").innerHTML = "perdu";

    }
}


