const express = require("express")
const cors = require("cors")
const multer = require("multer")

const app = express();
app.use(cors());

const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,"files")
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+"-"+file.originalname)
    }
});

const upload = multer({storage}).single("file")

app.get("/",(req,res)=>{
    res.send("server running");
})

app.post("/upload",(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })
});


app.listen(5000,()=>{
    console.log("server running on PORT 5000");
})