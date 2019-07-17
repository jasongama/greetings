var fname = document.querySelector(".fname");
var greetbtnElement = document.querySelector(".greetButton");
var iteamTypeRadiobtn = document.querySelector(".iteamTypeRadio");
var resetbtn = document.querySelector(".resettingButton");
var counter = document.querySelector(".count");
var greetingElem = document.querySelector(".gross");

var greetFactory1 = GreetFactory();
             //   localStorage.setItem(name, 1);

function greetingsFunction() {

    var fname = document.querySelector(".fname").value;

    var iteamTypeRadio = document.querySelectorAll(".iteamTypeRadio");

    for (var i = 0; i < iteamTypeRadio.length; i++) {
        if (iteamTypeRadio[i].checked) {
            var xman = iteamTypeRadio[i].value
        }

    }
 
    greetingElem.innerHTML = greetFactory1.theGreeting(xman, fname)

    countFun()
}

function countFun(){
    counter.innerHTML = greetFactory1.counter(); 
}

greetbtnElement.addEventListener('click', greetingsFunction);