console.log("Welcome to Tic Tac Toe");
let gameStart = new Audio("16 Tic Tac Toe.mp3");
let turnMusic = new Audio("mixkit-modern-technology-select-3124.wav");
let winMusic = new Audio("crowd-cheer-ii-6263.mp3");
let turn = "X";
isgameover = false;

// Funtion to change the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X";
}

// Function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxText');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            isgameover = true;
            gameStart.pause();
            winMusic.currentTime = 0;
            winMusic.play();
            document.querySelector('#winImg').getElementsByTagName('img')[0].style.width = "18vw";
        }
    })
}

window.onload=function(){
    document.getElementById("my_audio").play();
}
// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxText = element.querySelector('.boxText');
    element.addEventListener('click', ()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            turnMusic.play();
            checkWin();
            if(!isgameover)
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    })

})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxText');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    winMusic.pause();
    gameStart.currentTime = 0;
    gameStart.play();
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('#winImg').getElementsByTagName('img')[0].style.width = "0px";
})