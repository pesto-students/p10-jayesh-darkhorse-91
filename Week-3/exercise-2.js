/*  
    Application Of 
    1. call()
    2. bind()
    3. apply()
*/


// bind()
var car = {
    regNum: "UP32LX0478",
    model: "Volvo CX90",

    displayDetails: function () {
        console.log(this.regNum + " " + this.model)
    }
}

car.displayDetails(); //! This will return the object elements as - UP32LX0478 Volvo CX90

// But wait here is a catch

var myCarDetail = car.displayDetails;
myCarDetail(); //! This will return - undefined undefined

/* 
Why are we getting undefined and undefined ? -> 
Because now the this lookup is happening not in the object scope but global scope.
*/

//What to do ? - bind() here for the rescue

var myCarDetailWithBind = car.displayDetails.bind(car); //here we are limiting the scope of displayDetails methos within the car object
myCarDetailWithBind(); //! This will return the object elements as - UP32LX0478 Volvo CX90


/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


// call()

// Call also scopes this value of an object function but the difference is that it invokes the function instantaneously
// But with bind we have to call function separately

var carWithOwner = {
    regNum: "UP32LX0478",
    model: "Volvo CX90",

    displayDetails: function (ownerName) {
        console.log(this.regNum + " " + this.model + " this car belongs to " + ownerName);
    }
}


carWithOwner.displayDetails.call(carWithOwner, 'Aniket'); //! UP32LX0478 Volvo CX90 this car belongs to Aniket

//! As we see it invoked instantaneously unlike the bind.


/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


// apply()

// apply() is very similar to the call(), only difference is that
// it takes arguments as a array


var carWithOwner = {
    regNum: "UP32LX0478",
    model: "Volvo CX90",

    displayDetails: function (ownerName) {
        console.log(this.regNum + " " + this.model + " this car belongs to " + ownerName);
    }
}


carWithOwner.displayDetails.apply(carWithOwner, ['Aniket']); //! UP32LX0478 Volvo CX90 this car belongs to Aniket


/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/