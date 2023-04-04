const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
var destination = "";

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

String.prototype.replaceAll = function (str1, str2, ignore) {
  return this.replace(
    new RegExp(
      str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g, "\\$&"),
      ignore ? "gi" : "g"
    ),
    typeof str2 == "string" ? str2.replace(/\$/g, "$$$$") : str2
  );
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, destination ? destination : "files");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage }).single("file");

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("server running");
});

app.post("/upload/", (req, res) => {
  destination = req.query.dest;
  try {
    destination = destination.replaceAll("-", "/");
  } catch (err){
    
  }

  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
  });

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.listen(5000, () => {
  console.log("server running on PORT 5000");
});
