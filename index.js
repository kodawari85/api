const express = require("express")

const app = express();

app.get("/", (request, response)=>{
    return response.send({server_status: "ON"})
})

app.listen(3333)