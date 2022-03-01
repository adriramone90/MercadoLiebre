let express = require("express");

let app = express()

let PORT = 3030
let path = require("path")

function ruta(rutaSolicitada){
    return path.join(__dirname, rutaSolicitada)
}

app.use(express.static(ruta("public")))

app.listen(PORT, function(){
    console.log(`Servidor levantado en el puerto ${PORT}`)

})

rutaHtml = rutaSolicitada => path.join(__dirname, rutaSolicitada)

app.get("/", function(req, res){
    res.sendFile(rutaHtml("./views/home.html"))
})

app.get("/home.html", function(req, res){
    res.sendFile(rutaHtml("./views/home.html"))
})

app.get("/register", function(req, res){
    res.sendFile(rutaHtml("./views/register.html"))
})

app.get("/register.html", function(req, res){
    res.sendFile(rutaHtml("./views/register.html"))
})

app.get("/login", function(req, res){
    res.sendFile(rutaHtml("./views/login.html"))
})

app.get("/login.html", function(req, res){
    res.sendFile(rutaHtml("./views/login.html"))
})