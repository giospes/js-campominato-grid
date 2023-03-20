function game(){
    const myForm = document.querySelector('form');
    
    myForm.addEventListener('submit' , function(e){
        e.preventDefault();
        const difficoltà = document.querySelector('#Difficoltà').value;
        printSquares(difficoltà)
    })





}

function printSquares(numSqr){
    let square, squares = [], bombs = [];
    const NUM_BOMB = 16;
    const squareContainer = document.querySelector('.sqr-container')
    squareContainer.innerHTML =''
    for(let i = 1; i<=numSqr*numSqr; i++){
        square = document.createElement("div");
        square.innerHTML = `<span>${i}</span>`;
        square.className = "sqr border bg-primary d-flex align-items-center justify-content-center"
        if(numSqr == 7){
            square.classList.add("gs-hard")  
        }else if(numSqr == 8){
            square.classList.add("gs-medium")
        }else{
            square.classList.add("gs-easy")  
        }
        squares[i] = square;
    }
    squares.forEach(s => squareContainer.appendChild(s));
    const sqrs = document.querySelectorAll(".sqr");
    bombs = generateBomb(NUM_BOMB, numSqr);
    insertBombs(bombs, sqrs)
    changeCol(sqrs)
}


function generateBomb(NUM_BOMB, numSqr){
    const bombs = [];
    let bomb;   
    while(bombs.length < NUM_BOMB){
        bomb = Math.floor(Math.random()*numSqr*numSqr) + 1
        if(bombs.indexOf(bomb) === -1){
            bombs.push(bomb)
            console.log(bomb)
        }
    }
    return bombs
}

function insertBombs(bombs, sqrs){
    sqrs.forEach((sqr, index) => {
        if (bombs.includes(index + 1)) {
            sqr.classList.add("bomb");
            sqr.classList.add("bg-danger");

        }  
    });
}

function changeCol(sqrs){
    const scoreContainer = document.getElementById('score')
    let score=0;
    let gameover = false, result;
    sqrs.forEach((sqr, index) => {
        scoreContainer.innerHTML = 'Il tuo punteggio è: ' + score;
            sqr.addEventListener('click', function(){
                if((sqrs.length - document.querySelectorAll('.bg-danger').length - 1) == document.querySelectorAll('.bg-success').length){
                    sqr.classList.add("bg-success")
                    score++; 
                    scoreContainer.innerHTML = 'Il tuo punteggio è: ' + score;
                    printResult('win', score)
                }else if(gameover == false && !sqr.classList.contains("bg-success")){
                    sqr.classList.add("text-white")
                    if(sqr.classList.contains("bomb")){
                        sqr.classList.add("bg-danger")
                        scoreContainer.innerHTML += " - Hai Perso"
                        gameover = true
                        printResult('lose', score)
                    }
                    else{
                        sqr.classList.add("bg-success")
                        score++; 
                        scoreContainer.innerHTML = 'Il tuo punteggio è: ' + score;
                    }
                }
                    
            })

        }
    )
    console.log(gameover)
    

}

function printResult(result, score){
    const resultEl = document.querySelector('.result')
    let resultOutcome= document.querySelector('.result-outcome')
    let scoreOut= document.querySelector('.score-out')
    resultEl.classList.remove('d-none')
    scoreOut.innerHTML += score;
    if(result === 'win'){
        resultOutcome.innerHTML = "Hai Vinto"
        resultOutcome.classList.add("text-success")
    }else{
        resultOutcome.innerHTML = "Hai Perso"
        resultOutcome.classList.add("text-danger")
    }
}
game();