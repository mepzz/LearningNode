console.log('utils.js') //Displays a log in the console to show the use of this Js.

const add = function (x, y) { //Function to add x+y,two values that are obtained in "app.js"
    return x + y //Returns the value.
}

module.exports = add //Exports the "Add" variable to the other program.


//With the module.exports command, the information can not be shared between
//the two.