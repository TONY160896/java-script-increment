

const counter =document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

let counterValue = 0;

increaseBtn&& increaseBtn.addEventListener("click", function (event){
    counterValue +=1;
    counter.innerHTML = counterValue
});

decreaseBtn&& decreaseBtn.addEventListener("click", function (event) {
    counterValue -=1;
    counter.innerHTML = counterValue
});

resetBtn&& resetBtn .addEventListener("click", function (event) {
    counterValue =0;
    counter.innerHTML = counterValue
});