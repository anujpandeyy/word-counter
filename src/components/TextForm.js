import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
       setText(newText);
    }

    const handleDwClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleTtsClick=()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
    }



const [text,setText] = useState("Enter Text Here");
  return (
    <>
    <div className='textcontainer'>
        <h2 className='prophead'>{props.head}</h2>
        <textarea rows="20" value={text} onChange={handleOnChange} cols="50"></textarea>
        <button className='upperbtn' onClick={handleUpClick}>Upper Case</button>
        <button className='lowerbtn' onClick={handleDwClick}>Lower Case</button>
        <button className='ttsbtn' onClick={handleTtsClick}>Text To Speech</button>
    </div>

    <div className='textcontainer2'>
        <h2 className='textc'>Text Summary</h2>
        <p>Number of Words:{text.split(" ").length} Number of Characters:{text.length}</p>
        <p>Reading Time:{0.008*text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>

    </>
  )
}

