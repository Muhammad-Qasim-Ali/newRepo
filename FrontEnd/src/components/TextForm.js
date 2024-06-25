import React, { useState } from 'react';

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  }
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  }
  const handleSpeakClick = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speak text!", "success");
  }
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied text!", "success");
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces!", "success");
  }
  const handleClearClick = () => {
    setText('');
    props.showAlert("Cleared text!", "success");
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleDataBase = async () => {
    
    try{
      const response = await fetch('http://localhost:5000/api/save/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      console.log(response);
    }catch(error){
      console.log(error);
    }
  }

  const [text, setText] = useState('');

  return (
    <>
      <div className='container mx-auto' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <div className="mb-3">
          <h1 className='mb-4 text-3xl'>{props.heading}</h1>
          <textarea className={`w-full p-3 rounded-md ${props.mode === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black'}`} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSpeakClick}>Speak</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" value={text} onClick={handleExtraSpaces}>Remove Extra Spaces</button>

        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleDataBase}>Add To DataBase</button>
      </div>
      <div className="container mx-auto my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2 className="text-2xl">Your text summary</h2>
        <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Minutes to read</p>
        <h2 className="text-2xl">Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  )
}
