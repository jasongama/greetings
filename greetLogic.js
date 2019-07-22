 function GreetFactory(names) {

    var store = names || {};
     var theGreeting = "";
     var count = 0;


     function greetInput(language, name) {
        
         if(name && language){
            var upperCaseName = name.toUpperCase();
         if (store[upperCaseName] === undefined) {
             store[upperCaseName] = 0;
        }
         if (language === "English") {
             theGreeting = "Hello, " + name
         }
         else if (language === "IsiZulu") {
             theGreeting = "Sawubona, " + name
         }
         else if (language === "IsiXhosa") {
             theGreeting = "Molo, " + name
         }
         }
         else{
            theGreeting = "please enter the firstname or select a languege";      
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