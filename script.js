let random1 = Math.floor(Math.random() * 10) + 1;
let random2 = Math.floor(Math.random() * 10) + 1;

let kopaytiruv = random1 + " x " + random2;
let monitor = document.querySelectorAll(".bigNumb")[0];
monitor.innerHTML = kopaytiruv;

let right = random1 * random2;
let error1 = random1 * random2 + 11;
let error2 = random1 + random2;
let error3 = random1  * random2 + random2;

let answers = document.querySelectorAll(".answer");

let randomAnswer = Math.floor(Math.random() * 4) + 1;
if(randomAnswer === 1) {
    answers[0].innerHTML = right;
    answers[1].innerHTML = error1;
    answers[2].innerHTML = error2;
    answers[3].innerHTML = error3;
}else if(randomAnswer === 2) {
    answers[0].innerHTML = error1;
    answers[1].innerHTML = right;
    answers[2].innerHTML = error2;
    answers[3].innerHTML = error3;
}else if (randomAnswer === 3) {
    answers[0].innerHTML = error1;
    answers[1].innerHTML = error2;
    answers[2].innerHTML = right;
    answers[3].innerHTML = error3;
}else{
    answers[0].innerHTML = error1;
    answers[1].innerHTML = error2;
    answers[2].innerHTML = error3;
    answers[3].innerHTML = right;
}