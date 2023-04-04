import React, { useState } from "react";
import "../css/uploadFile.css"



const UploadText = () => {
  const [file, setFile] = useState();
  const [text, setText] = useState();

  const handleFile = (e) => {
    const { target } = e;
    setFile(target.files[0]);
    console.log(target.files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var fr = new FileReader();
    fr.onload = () => {
      setText(fr.result);
    };
    fr.readAsText(file);
    console.log(file);
  };

  return (
    <div>
      <form action="#" method="post" onSubmit={handleSubmit}>
        <label for="images" class="drop-container">
          <span class="drop-title">Read File</span>
          <input type="file" required onChange={handleFile}/>
        </label>
        <button type="submit">Submit</button>
      </form>
      <br />
      <div className="preview">Preview</div>
      <div className="output">{text}</div>
    </div>
  );
};

export default UploadText;
