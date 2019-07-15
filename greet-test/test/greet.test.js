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
         it("it should show alteast three characters", function(){
            var input = GreetFactory();
            assert.equal(input.greet("Jas", "Afrikaans"), "Hallo, Jas");
             });
             it("should store name Jason ", function(){

                var instances =  GreetFactory();
                instances.greet("jason")
                
                assert.deepEqual({name:"Jason"},instances.getstore())
                 });
                 it("should count the name Jason", function(){

                    var instances =  GreetFactory();
                    instances.setCount("Jason")
                    instances.setCount("Jason")
                    instances.setCount("Jason")
                    instances.setCount("Jason")
                    instances.setCount("Jason")
                    assert.equal(5, instances.getCount())
                     });
                
    });