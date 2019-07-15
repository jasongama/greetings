 function GreetFactory (names) {
     console.log("now running greeting factory")
    var store = {} || names;
    var count = 0;

    function greet(name, lang) {
        // console.log("now running greet function")
        var upperCaseName = name.charAt(0).toUpperCase() + name.slice(1)
         if(store['name'] === undefined){
           store['name'] = upperCaseName;
         }
        if (lang === "English") {
           
            return "Hello, " + name;

        } else if (lang === "Isizulu") {
           
            return "Sawubona, " + name;

        } else if (lang === "Afrikaans") {
           
            return "Hallo, " + name;
        }
    }

    function getstore() {
        return store;
    }
    function setCount(){
        count ++
    }

    function getCount() {
        
        return count
    }

    return {
        greet,
        count,
        getstore,
        setCount,
        getCount
    }
}