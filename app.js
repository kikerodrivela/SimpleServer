const express = require("express");
const app = express();
var fs = require('fs');


app.get("/", (request, response) => {
    response.send("Hi there");
});

app.get("/about", (request, response) => {
    response.send("<h1>About</h1>");
});


app.use(express.json());

app.post('/', function(request, response){

    console.log(".............................................");
    console.log("Recieved a post request");
    console.log("request.body: ", request.body);        // your JSON
    response.send(request.body);                        // echo the result back
    console.log(".............................................");
});

app.post('/sensores', function(request, response){
    // Save to the request body to a file.json

    console.log(request.body);      // your JSON
    response.send(request.body);    // echo the result back

    // Save to the request body to a file.json
    // fs.writeFile('file.json', JSON.stringify(request.body), function (err) {
    //     if (err) throw err;
    //     console.log('Saved to file.json');
    // });


});



app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});