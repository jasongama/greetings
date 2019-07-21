describe('greeting', function() {
    it("It should greet a person first name in english", function(){
        var input = GreetFactory();
        input.message("Jason" )
        input.greetInput("English", "Jason")
        assert.equal(   input.message( ),"Hello, Jason");

});
    it("It should greet a person first name in Isizulu", function(){
        var input = GreetFactory();
        input.message("Joseph")
        input.greetInput("IsiZulu", "Joseph")
        assert.equal( input.message(), "Sawubona, Joseph");
         });
    it("It should greet a person first name in IsiXhosa", function(){
        var input = GreetFactory();
        input.message("Thando")
        input.greetInput("IsiXhosa", "Thando")
        assert.equal(input.message(), "Molo, Thando");
         });
         it("It does not take a empty strings", function(){
            var input = GreetFactory();
            input.message("")
            input.greetInput()
            assert.equal(input.message(), "please entere the Name or select your languege");
             });
             it("It should make the name Jason an upperCase", function(){

                var input =  GreetFactory();
                input.message("jason")
                input.greetInput("IsiXhosa", "Jason")
                
                assert.equal( input.message(),"Molo, Jason")
                 });
                 it("It should count the Names", function(){

                    var input = GreetFactory();
                  input.greetInput("English", "Jason");
                  input.greetInput("English", "John");
                  input.greetInput("English", "Jesse");
                  input.greetInput("English", "Daniel");
                  assert.equal(input.counter(), 4)
                     });
                
    });