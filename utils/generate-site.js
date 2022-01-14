// import filesystem tools
const fs = require('fs');


//writing files
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

//copying files
// copying file
const copyFile = () => {
    return new Promise((resolve, reject) => {
      fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: 'Stylesheet created!'
        });
      });
    });
  };
  
  /* module.exports = {
    writeFile: writeFile,
    copyFile: copyFile
  };
  We're actually exporting an object with the two functions, writeFile() and copyFile(), used as methods, writeFile and copyFile. It seems confusing and redundant to use the name of the function as both the method name and the value of the method.
 */
  module.exports = { writeFile, copyFile };