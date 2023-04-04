import React, { useState } from 'react'
import axios from "axios"
import "../css/uploadFile.css"

const UploadFile = () => {
    const [file,setFile] = useState();

    const handleFile = (e) =>{
        const {target} = e;
        setFile(target.files[0]);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const data = new FormData();
        data.append("file",file);
        console.log(data,file);

        axios.post("//localhost:5000/upload",data).then((res)=>{
            alert("SUCCESS");
        }).catch((err)=>{
            alert("FAILED");
        })
    }

  return (
    <div>
        <form action="#" method='post' onSubmit={handleSubmit}>
        <label for="images" className="drop-container">
          <span className="drop-title">Upload File</span>
          <input type="file" required onChange={handleFile}/>
        </label>
        <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default UploadFile