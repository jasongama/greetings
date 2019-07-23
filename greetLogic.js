 function GreetFactory(names) {

    var store = names || {};
     var theGreeting = "";
     var count = 0;


     function greetInput(language, name) {
        var upperCaseName = name.toUpperCase();
         if(name && language){
            
         if (store[upperCaseName] === undefined) {
             store[upperCaseName] = 0;
        }
         if (language === "English") {
             theGreeting = "Hello, " + upperCaseName
         }
         else if (language === "IsiZulu") {
             theGreeting = "Sawubona, " + upperCaseName
         }
         else if (language === "IsiXhosa") {
             theGreeting = "Molo, " + upperCaseName
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