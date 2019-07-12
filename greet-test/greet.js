
function greeting(){
    
    var store= {};
    var count = 0;
    
    function  greet (name, lang ){
        store["name"]= name;
     
        if (lang === "english"){
        
        return "hello" + name;
    
    }else if(lang === "Isizulu"){
        
        return "Sawubona" + name;
    
    }else if (lang === "Afrikaans"){
    
        return "Halo" + name;
    }
}
    function getstore(){
        return store;
    }
    function count(){
        var names = Object.keys(store);
        return (names.length);
    }
        

    return{
    greet,
    count,
    getstore
    }
}
