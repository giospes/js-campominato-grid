function game(){
    const myForm = document.querySelector('form');
    
    myForm.addEventListener('submit' , function(e){
        e.preventDefault();
        const difficoltà = document.querySelector('#Difficoltà').value;
        printSquares(difficoltà)
    })





}

function printSquares(numSqr){
    let square, squares = [];
    const squareContainer = document.querySelector('.sqr-container')
    for(let i = 1; i<=numSqr*numSqr; i++){
        square = document.createElement("div");
        square.innerHTML = `<span>${i}</span>`;
        square.className = "border bg-primary d-flex align-items-center justify-content-center"
        if(numSqr == 7){
            square.classList.add("gs-hard")  
        }else if(numSqr == 8){
            square.classList.add("gs-medium")
        }else{
            square.classList.add("gs-easy")  
        }
        squares[i] = square
    }

    
    squares.forEach(s => squareContainer.appendChild(s));
}


game();