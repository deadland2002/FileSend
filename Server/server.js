const express = require("express")
const app = express();
const http = require("http").createServer(app);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/build/index.html")
})

app.use(express.static("build"))

http.listen(8080,()=>{
    console.log("Server running at PORT 5000")
})