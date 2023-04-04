import React, { useState } from "react";
import axios from "axios";
import "../css/uploadFile.css";

const UploadFile = () => {
  const [file, setFile] = useState([]);
  const [Destination, setDestination] = useState("");

  const handleFile = (e) => {
    const { target } = e;
    setFile(target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("file", file);
    data.append("destination", Destination);


    var URL = "//localhost:5000/upload/";
    if(Destination){
      URL += "?dest="+Destination;
    }

    axios
      .post(URL, data)
      .then((res) => {
        alert("SUCCESS");
      })
      .catch((err) => {
        alert("FAILED");
      });
  };

  return (
    <div>
      <form action="#" method="post" onSubmit={handleSubmit}>
        <label className="drop-container">
          <span className="drop-title">Upload File</span>
          <input type="file" required onChange={handleFile} />
        </label>
        <div className="inpField">
          <label>Destination :</label>
          <input
            type="text"
            name="destination"
            onChange={(e) => {
              setDestination((prev) => e.target.value);
            }}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UploadFile;
