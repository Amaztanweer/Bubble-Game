var score = 0;
var timer = 60;
var key;


function makeBubble() {
    var cluster = "";

for(var i = 1; i<=176; i++){
    var rn = Math.floor(Math.random()*10);
    cluster += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbottom").innerHTML = cluster;
}

function runTimer(){
    var interval = setInterval(function () {
        if (timer > 0){
            timer--;
            document.querySelector("#timerValue").textContent = timer;   
        } 
        else{
            clearInterval(interval);
            document.querySelector("#pbottom").innerHTML = `<h1> Game Over Refresh To Restart </h1>`;
        }
    }, 1000);
} 

function newHit(){
    key = Math.floor(Math.random()*10);
    document.querySelector("#newHit").textContent = key;
}

function scoreupd() {
    score += 1;
    document.querySelector("#marks").textContent = score;
}

document.querySelector("#pbottom").addEventListener("click", function(dets) {
    var keyCheck = (Number (dets.target.textContent))
    if (keyCheck === key) {
        scoreupd();
        makeBubble();
        newHit();
    }
});

newHit();
runTimer();
makeBubble();