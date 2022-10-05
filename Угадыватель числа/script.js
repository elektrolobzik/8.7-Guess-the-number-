let a = 0, b = 1000;

let h1 = document.querySelector('#mainText')
let start = document.querySelector('#start')
let less = document.querySelector('#less')
let more = document.querySelector('#more')
let userNum = document.querySelector('#userNum')
let right = document.querySelector('#right')
let restart = document.querySelector('#restart')




start.addEventListener("click", function() {
    start.style.display = "none";
    userNum.style.display = "block";
    h1.innerHTML = parseInt((a+b)/2);
})

less.addEventListener("click", function() {
    b = parseInt((a+b)/2);
    h1.innerHTML = parseInt((a+b)/2);
})

more.addEventListener("click", function() {
    a = parseInt((a+b)/2);
    h1.innerHTML = parseInt((a+b)/2);
})

function success(){
    let massive = ['Я всегда угадываю<br>&#x1F60E;', 'Говорил же, легко!<br>&#x1F609;', 'Я так и думал!'];
    h1.innerHTML = h1[Math.round(Math.random()*2)];
}

right.addEventListener("click", function() { 
    success();
})









