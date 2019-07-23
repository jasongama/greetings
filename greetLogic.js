 function GreetFactory(names) {

    var store = names || {};
     var theGreeting = "";
     var count = 0;


     function greetInput(language, name) {
        
         if(name && language){
            var upperCaseName = name.charAt(0).toUpperCase()+ name.slice(1);
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