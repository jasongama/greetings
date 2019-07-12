describe('greeting', function() {
    it("it should greet a person in english", function(){
   var input = GreetFactory();
   assert.equal(input.greet("Jason", "English"), "Hello, Jason");
    });
    it("it should greet a person in Isizulu", function(){
        var input = GreetFactory();
        assert.equal(input.greet("Jason", "Isizulu"), "Sawubona, Jason");
         });
    it("it should greet a person in Afrikaans", function(){
        var input = GreetFactory();
        assert.equal(input.greet("Jason", "Afrikaans"), "Hallo, Jason");
         });
         it("it should show alteast ", function(){
            var input = GreetFactory();
            assert.equal(input.greet("", "Afrikaans"), "Hallo, ");
             });
    });