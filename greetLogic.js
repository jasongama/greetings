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
             theGreeting = "Hello " + name
         }
         if (language === "IsiZulu") {
             theGreeting = "Sawubona " + name
         }
         if (language === "IsiXhosa") {
             theGreeting = "Molo " + name
         }
         }
         else{
            theGreeting = "please entere the Name and select your languege";      
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
     function sayhello(){
         console.log("hello jason")
     }
    

     return {
         counter,
         getGreet,
         greetInput,
         message,
     }
 }