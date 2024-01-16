import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../Styles/Home.css"

export default function Home() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm(); // Access reset function

  const onSubmit = (data) => {
    localStorage.setItem(data.title, data.text);
    reset(); // Clear form after brief alert display
    // Add a CSS class to control visibility
    document.querySelector('.success-alert').classList.add('visible');

    // Remove the class after a timeout
    setTimeout(() => {
        document.querySelector('.success-alert').classList.remove('visible');
    }, 2000); // Adjust timeout as needed Adjust timeout duration as needed
  };

  return (
    <div className="container">
      <h1>Home</h1>
      <form className="post-form" onSubmit={handleSubmit(onSubmit)}>
        <h3>Post something here.</h3>
        <label htmlFor="title" style={{textAlign:"start"}}>Title</label>
        <input type="text" id="title" className="post-form-input" placeholder="Title"
        {...register("title", {
            required: {
                value: true,
                message: 'Title is required',
            },
        })}/>
        <span>{errors?.title?.message}</span>
        <label htmlFor="text" style={{textAlign:"start"}}>Text</label>
        <textarea className="post-form-text" id="text" placeholder="Text" cols="30" rows="10"
        {...register("text", {
            required: {
                value: true,
                message: 'Text is required',
            },
        })}/>
        <span>{errors?.text?.message}</span>
        <button className="main-button" type="submit">Save</button>
      </form>
      
      <div className="success-alert">
        Post saved successfully!
      </div>
      
    </div>
  );
}
