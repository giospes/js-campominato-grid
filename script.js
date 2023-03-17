function game(){
    const myForm = document.querySelector('form');

    myForm.addEventListener('submit' , function(e){
        e.preventDefault();
        const difficoltà = document.querySelector('#Difficoltà').value;
        console.log(difficoltà);
    })





}

game();