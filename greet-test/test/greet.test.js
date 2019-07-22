describe('greeting', function () {
    it("It should greet my name in english", function () {
        var input = GreetFactory();
        input.message("jason")
        input.greetInput("English", "Jason")
        assert.equal(input.message(), "Hello, Jason");

    });
    it("It should greet my name in Isizulu", function () {
        var input = GreetFactory();
        input.message("Joseph")
        input.greetInput("IsiZulu", "Joseph")
        assert.equal(input.message(), "Sawubona, Joseph");
    });
    it("It should greet my name in IsiXhosa", function () {
        var input = GreetFactory();
        input.message("Thando")
        input.greetInput("IsiXhosa", "Thando")
        assert.equal(input.message(), "Molo, Thando");
    });
    it("It will not return an empty string", function () {
        var input = GreetFactory();
        input.message("")
        input.greetInput()
        assert.equal(input.message(), "please enter the firstname or select a languege");
    });
    it("It must turn the name Jason to upperCase", function () {

        var input = GreetFactory();
        input.message("jason")
        input.greetInput("IsiXhosa", "Jason")

        assert.equal(input.message(), "Molo, Jason")
    });
    it("It is counting the names of people that have been entered in the textbox ", function () {

        var input = GreetFactory();
        input.greetInput("English", "Jason");
        input.greetInput("English", "John");
        input.greetInput("English", "Jesse");
        input.greetInput("English", "Daniel");
        assert.equal(input.counter(), 4)
    });
    it("My greetings app doesn't allow users to enter the same name twice", function () {

        var input = GreetFactory();
        input.greetInput("English", "Jason");
        input.greetInput("English", "Jason");
        input.greetInput("English", "Jason");
        input.greetInput("English", "Jason");
        assert.equal(input.counter(), 1)
    });
});