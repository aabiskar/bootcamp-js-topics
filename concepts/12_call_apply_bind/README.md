# Call, Apply and Bind

Useful [link](https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb)

## Bind

The `bind() method creates a new function` that, when called, has its this keyword set to the provided value.

```
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function() {
    console.log(this.getPokeName() + 'I choose you!');
};

var logPokemon = pokemonName.bind(pokemon);// creates new function and binds pokemon to it. 'this' keyword now points to the pokemon object inside pokemonName function

logPokemon(); // 'Pika Chu I choose you!'
```

> A point to note here is that `bind()` method doesn't invokes a function immediately.

## Call and Apply

The `call()` method calls a function with a given this value and arguments provided individually.

### Difference between bind() and call() methods

The main differences between `bind()` and `call()` is that the `call()` method:

1. Accepts additional parameters as well
2. Executes the function it was called upon right away.
3. The call() method does not make a copy of the function it is being called on.

`apply()` serve the exact same purpose as `call()`. The only difference between how they work is that `call()` expects all parameters to be passed in individually, whereas `apply()` expects an array of all of our parameters.
```
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms
```