# SimpleServer

A simple server made with nodejs and express

If you want to run for test your devices, use docker for simple usage,
following this steps:

1 - First you need to create your own image with this:
    "docker build --tag simple-server . "

2 - Then you need to run this command for start the container:
    "sudo docker run -d -p 3000:3000 --name simple-server simple-server"

3 - If you want to view the console.log of the container use this:
    "sudo docker logs -f <Nombre del contenedor>"