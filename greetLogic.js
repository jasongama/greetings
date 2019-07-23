 function GreetFactory(names) {

    var store = names || {};
     var theGreeting = "";
     var count = 0;


     function greetInput(language, name) {
        
         if(name && language){
            var upperCaseName = name.charAt(0).toUpperCase() + name.slice(1);
            var x = upperCaseName.replace(/[^a-zA-Z]+/, '')
            var smallNames = name.toLowerCase();
         if (store[smallNames] === undefined) {
             store[smallNames] = 0;
        }
         if (language === "English") {
             theGreeting = "Hello, " +  x
         }
         else if (language === "IsiZulu") {
             theGreeting = "Sawubona, " +  x
         }
         else if (language === "IsiXhosa") {
             theGreeting = "Molo, " +  x
         }
         }
         else{
            theGreeting = "please enter the firstname or select a language";      
         }
     }

     function getGreet() {
         return store;
     }

     function counter() {
         var c = Object.keys(store);
         count = c.length
         return count;
     }
     function message(){
        return theGreeting
     }  
   

     return {
         counter,
         getGreet,
         greetInput,
         message,
     }
 }