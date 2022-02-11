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

app.get("/", function(req, res){
    res.sendFile(ruta("/views/home.html"))
})