const fs = require('fs');
//read files
const myFile = './docs/blog1.txt';
//callback function
fs.readFile(myFile, (err, data) =>{
    if (err){
        console.log('An error occured:'+ err);
    }else{
        console.log(data.toString());
    }
});


//fs.readFile('./docs/blog1.txt');


//Write into files
fs.writeFile(myFile, 'Bye-Bye!', (err) => {
    if (err){
        console.log(err);
    
    }else{
        console.log("The file was updated");
    }
})

fs.appendFile(myFile, 'Good Day!', (err) => {
    if(err){
        console.log(err);
    
    }else{
        console.log("The file was updated");
    }
})

fs.writeFile('./docs/blog2.txt', 'Hello World!', (err) => {
    if(err){
        console.log(err);
    
    }else{
        console.log("The new file was created");
    }
})