var greetbtnElement = document.querySelector(".greetButton");

var resetbtn = document.querySelector(".reset");
var counter = document.querySelector(".count");
var greetingElem = document.querySelector(".gross");
var fname = document.querySelector(".fname");


var greeting = JSON.parse(localStorage.getItem("name"));
var greetFactory1 = GreetFactory(greeting);
countFun()


function greetingsFunction() {
    var iteamTypeRadio = document.querySelectorAll(".itemTypeRadio");

    for (var i = 0; i < iteamTypeRadio.length; i++) {
        if (iteamTypeRadio[i].checked) {
            var lang = iteamTypeRadio[i].value
        }

    }
    greetingElem.innerHTML = "";
    var inputField = fname.value
    greetFactory1.greetInput(lang, inputField)
    greetingElem.innerHTML = greetFactory1.message();
    localStorage.setItem("name", JSON.stringify(greetFactory1.getGreet()));

    countFun()
}

function countFun() {
    counter.innerHTML = greetFactory1.counter();
}

function resetButton() {
    localStorage.clear();
    counter.innerHTML = "";
    greetingElem.innerHTML = "";
   
}
greetbtnElement.addEventListener('click', greetingsFunction);
resetbtn.addEventListener('click', resetButton);