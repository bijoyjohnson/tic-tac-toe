var A1 = document.getElementById('A1');
var A2 = document.getElementById('A2');
var A3 = document.getElementById('A3');
var B1 = document.getElementById('B1');
var B2 = document.getElementById('B2');
var B3 = document.getElementById('B3');
var C1 = document.getElementById('C1');
var C2 = document.getElementById('C2');
var C3 = document.getElementById('C3');
var gameOver = document.getElementById('gameOver');
var reset = document.getElementById('reset');

A1.addEventListener('click',function(){
    cycle(A1);
});
A2.addEventListener('click',function(){
    cycle(A2)
});
A3.addEventListener('click',function(){
    cycle(A3)
});
B1.addEventListener('click',function(){
    cycle(B1)
});
B2.addEventListener('click',function(){
    cycle(B2)
});
B3.addEventListener('click',function(){
    cycle(B3)
});
C1.addEventListener('click',function(){
    cycle(C1)
});
C2.addEventListener('click',function(){
    cycle(C2)
});
C3.addEventListener('click',function(){
    cycle(C3)
});
reset.addEventListener('click',function(){
    A1.textContent = '';
    A2.textContent = '';
    A3.textContent = '';
    B1.textContent = '';
    B2.textContent = '';
    B3.textContent = '';
    C1.textContent = '';
    C2.textContent = '';
    C3.textContent = '';
    gameOver.textContent = '';
});



function cycle(obj) {
    if (obj.textContent.length == 0) {
        obj.textContent = 'X';
    }
    else if (obj.textContent == 'X') {
        obj.textContent = 'O';
    }
    else {
        obj.textContent = '';
    }
    win();
}

function win() {
    if ((A1.textContent == A2.textContent && A2.textContent == A3.textContent && A1.textContent != '') ||
    (B1.textContent == B2.textContent && B2.textContent == B3.textContent && B1.textContent != '') ||
    (C1.textContent == C2.textContent && C2.textContent == C3.textContent && C1.textContent != '') ||
    (A1.textContent == B1.textContent && B1.textContent == C1.textContent && A1.textContent != '') ||
    (A2.textContent == B2.textContent && B2.textContent == C2.textContent && A2.textContent != '') ||
    (A3.textContent == B3.textContent && B3.textContent == C3.textContent && A3.textContent != '') ||
    (A1.textContent == B2.textContent && B2.textContent == C3.textContent && A1.textContent != '')) {
        gameOver.textContent = 'Game Over';
    }
    else {
        
    }
}
