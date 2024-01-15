import React, { useState } from "react";

export default function Home() {   
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };
    
    const handleTextChange = (event) => {
        setText(event.target.value);
    };
    
    const handleSave = (event) => {
        event.preventDefault();
        localStorage.setItem(title, text);
        // Add any additional logic here
    };
    
    return (
        <div className="home">
            <h1>Home</h1>
            <form className="post-form">
                <h3>Post something here.</h3>
                <label htmlFor="title" style={{textAlign:"start"}}>Title</label>
                <input type="text" id="title" className="post-form-input" placeholder="Title" onChange={handleTitleChange} value={title} />
                <label htmlFor="text" style={{textAlign:"start"}}>Text</label>
                <textarea className="post-form-text" id="text" placeholder="Text" cols="30" rows="10" onChange={handleTextChange} value={text}></textarea>
                <button className="post-form-button" type="submit" onClick={handleSave}>Save</button>
            </form>
        </div>
    );
}