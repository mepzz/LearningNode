const fs = require('fs') 

fs.writeFileSync('notebook.txt', 'My name is Alex.')
fs.appendFileSync('notebook.txt', ' I am 19 and live in Ottawa.' ) 




//The appendFileSync adds more data to the file.
//In this example, I added another string which saved onto the external file named "notebook.txt".
//This could be very helpful as it doesn't overwrite the file while writeFileSync does.
