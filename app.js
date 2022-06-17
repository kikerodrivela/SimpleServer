const express = require("express");
const app = express();
var fs = require('fs');


app.get("/", (request, response) => {
    response.send("Hi there");
});

app.use(express.json());

app.post('/', function (request, response) {
    console.log(request.body);      // your JSON
    response.send(request.body);    // echo the result back
});

app.post('/sensores', function (request, response) {
    date = new Date();
    datelocal = date.toLocaleString();

    console.log(".............................................");
    console.log("Recieved a post request");
    console.log("request.body: ", request.body);        // your JSON
    console.log("Hora y Dia de envio: ", datelocal);
    response.send(request.body);                        // echo the result back
    console.log(".............................................");

});


app.listen(3000, () => {
    console.log(".............................................");
    console.log("                                              ");
    console.log("Servidor iniciado en el puerto 3000");
    console.log("                                              ");
    console.log(".............................................");
});