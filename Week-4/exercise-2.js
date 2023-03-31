var Person = function() {};

Person.prototype.initialize = function(name,age) { 
    this.name=name;
    this.age=age;
    } // TODO: create the class Teacher and a method teach


function Teacher(name){
    Person.call(this,name);
    this.name = name;
    // this.sub = sub;
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype)

Teacher.prototype.teach = function(sub){
    console.log(`${this.name} is teaching ${sub}`);
}


var him = new Teacher();
him.initialize("Adam",45);
him.teach("Inheritance");