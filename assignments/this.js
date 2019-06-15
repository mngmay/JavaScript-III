/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding
        The value of 'this' will be bound to the window/console Object -
* 2. Implicit Binding
        The value of 'this' is bound to what is left of the dot - implied by the syntax/environment that you are calling it in
* 3. New Binding
        The value of 'this' is bound to specific instance of the object (variable) that is created and returned by the constructor function that was invoked.
        This is indicated by the use of 'new'
* 4. Explicit Binding
*       The value of 'this' is bound to the new object you're pointing it to through a function method such as .bind .call or .apply
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

const globalBinding = () => console.log(this);   //console.logs the window object - all of JavaScript!
globalBinding();

// Principle 2

// code example for Implicit Binding

const cat = {
    species: 'cat',
    color: 'black',
    action: function(action) {
        console.log(`You ${action} the ${this.color} ${this.species}`); //this is referring to the cat object it's referenced in
    }
};

cat.action('pet');

// Principle 3

// code example for New Binding

function Animal(newanimal, color) {
    this.species = newanimal;
    this.color = color;
    this.action = function(action) {
        console.log(`You ${action} the ${this.color} ${this.species}`);
    };
};

const dog = new Animal('dog', 'gray');  //making a new instance of an object
dog.action('pet');

// Principle 4

// code example for Explicit Binding

cat.action.call(dog, 'hugged');  //even though the obj is cat, dog is called for the action