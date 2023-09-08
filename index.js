const buttons = document.querySelectorAll('button');
let screen = document.querySelector('.screen')

let calculation = [];
let expression

function calculate(button) {
    const value = button.textContent;
    if(value === "CLEAR"){
        calculation = [];
        screen.textContent = '';
    } else if(value === "="){
        try{
            expression = eval(expression);
            screen.textContent = expression;
            calculation = [expression];
        }catch(e){
            screen.textContent = `"Oops, input is invalid."  `
            calculation = [];
        }
       
    }else{
        calculation.push(value);
        console.log(calculation);
        expression = calculation.join('');
        screen.textContent = expression;
    }
}
function playSound() {
    const audio = new Audio();
    audio.src = './assets/soudns/click.mp3'
    audio.play();
}

buttons.forEach(button => 
    button.addEventListener('click',
    () =>{
        playSound();
        calculate(button);
    })                      
);
