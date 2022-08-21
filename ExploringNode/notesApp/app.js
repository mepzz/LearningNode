const fs = require('fs') //This const takes the value of calling require. The module name is required but the const can be any name.

fs.writeFileSync('notebook.txt', 'My name is Alex.')




//It is best to use a const that is commonly used by others..
//For example, fs is commonly a short form of FileSystem