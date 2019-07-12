var GreetFactory = function () {
     console.log("now running greeting factory")
    var store = {};
    var count = 0;

    function greet(name, lang) {
        console.log("now running greet function")
        store = name;

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

    function count() {
        var names = Object.keys(store);
        return (names.length);
    }


    return {
        greet,
        count,
        getstore
    }
}