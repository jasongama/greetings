describe('greeting', function() {
    it("it should greet a person in english", function(){
        var input = GreetFactory();
        assert.equal(input.greetInput("English" , "Jason"), "Hello, Jason");

});
    it("it should greet a person in Isizulu", function(){
        var input = GreetFactory();
        assert.equal(input.greetInput("Isizulu", "Jason"), "Sawubona, Jason");
         });
    it("it should greet a person in Afrikaans", function(){
        var input = GreetFactory();
        assert.equal(input.greetInput("Jason", "Afrikaans"), "Hallo, Jason");
         });
         it("it should show alteast three characters", function(){
            var input = GreetFactory();
            assert.equal(input.greetInput("Jas", "Afrikaans"), "Hallo, Jas");
             });
             it("should store name Jason ", function(){

                var instances =  GreetFactory();
                instances.greetInput("jason")
                
                assert.deepEqual({name:"Jason"},instances.getGreet())
                 });
                 it("should count the Names", function(){

                    var input = GreetFactory();
                  input.greetInput("English", "Jason");
                  input.greetInput("English", "John");
                  input.greetInput("English", "Jesse");
                  input.greetInput("English", "Daniel");
                  assert.equal(input.counter(), 4)
                     });
                
    });