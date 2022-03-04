import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("uppercase was clicked"+ text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success");
    }
    const handleLoClick =()=>{
        console.log("lowecase was clicked"+ text);
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClearText =()=>{
        console.log("text clear"+ text);
        let newText= "";
        setText(newText)
        props.showAlert("Text is cleared","success");
    }
    const handleOnChange =(event)=>{
        console.log('onchange');
        setText(event.target.value)
    }
    const handleCopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard","success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra space removed","success");
    }
   
    

    const [text, setText] = useState('');
  return (
      <> 
    <div className="container" style={{color:props.mode==='dark'? 'white' : 'black'}}>
    <h1 className='my-3'>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control textarea " style={{backgroundColor:props.mode==='dark'? 'grey' : 'white',color:props.mode==='dark'? 'white' : 'black'}} value={text} id="mybox" onChange={handleOnChange} rows="8"></textarea>
</div>
<button disabled={text.length===0} className='btn btn-success' onClick={handleUpClick}>Convert to uppercase</button>
<button disabled={text.length===0} className='btn btn-success mx-2 my-1' onClick={handleLoClick}>Convert to lowerrcase</button>
<button disabled={text.length===0} className='btn btn-success mx-2 my-1' onClick={handleClearText}>Clear Text</button>
<button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container"style={{color:props.mode==='dark'? 'white' : 'black'}} >
        <h1 className="my-4">Your text summary</h1>
        <p className="para ">{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}characters</p>
        <p className="para "> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2 className="text-center my-2">Preview</h2>
        <p className="para2text">{text.length>0?text:"Enter something in above the textbox to preview here"}</p>
    </div>
    </>
  )
}
