//! Implementing using prototype

var Person = function () { };

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}

 
function Teacher(name) {
    Person.call(this, name);
    this.name = name;
    // this.sub = sub;
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype)

Teacher.prototype.teach = function (sub) {
    console.log(`${this.name} is teaching ${sub}`);
}



var him = new Teacher();
him.initialize("Adam", 45);
him.teach("Inheritance");

/*----------------------------------------------------------------------------------------------*/


//! Implementing using ES6 Classes

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}


class Teacher extends Person {
    constructor(name, sub) {
        super(name);
        this.sub = sub;
    }
    teach(sub) {
        console.log(`${this.name} is teaching ${this.sub}.`)
    }
}


var him = new Teacher("Adam", 45);
// him.initialize("Adam",45);
him.teach("Inheritance");