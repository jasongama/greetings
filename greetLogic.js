 function GreetFactory(names) {
     //  console.log("now running greeting factory")
     var store = names || {};
     var theGreeting;
     // var count = 0;


     function theGreeting(language, name) {
         var upperCaseName = name.toUpperCase();

         if (store[upperCaseName] === undefined) {
             store[upperCaseName] = 0;
             //   localStorage.setItem(name, 1);
         }

         if (language === "English") {
             //console.log(greetFactory1.english())
             theGreeting = "Hello " + name
         }
         if (language === "IsiZulu") {
             theGreeting = "Sawudona " + name
         }
         if (language === "IsiXhosa") {
             theGreeting = "Molo " + name
         }
         return theGreeting
     }

     function getGreet() {
         return store;
     }

     function counter() {
         var c = Object.keys(store).length;
         console.log(c)
         return c;
     }

     return {

         counter,
         getGreet,
         theGreeting
     }
 }