function  GreetFactory() {
     console.log("now running greeting factory")
    var store = {};
    var count = 0;

    function greet(name, lang) {
        console.log("now running greet function")
        store = name;
        console.log(name, lang);

        if (lang === "english") {

            return "hello, " + name;

        } else if (lang === "Isizulu") {

            return "Sawubona" + name;

        } else if (lang === "Afrikaans") {

            return "Halo" + name;
        }
    }

    function getStore() {
        return store;
    }

    function getCount() {
        var names = Object.keys(store);
        return (names.length);
    }


    return {
        greet,
        getCount,
        getStore
    }
}