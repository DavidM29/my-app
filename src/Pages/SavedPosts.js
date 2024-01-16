import React, { useState } from 'react';
export default function SavedPosts() {
    const [savedPosts, setSavedPosts] = useState(Object.keys(localStorage));

    const handleDelete = (key) => {
        localStorage.removeItem(key);
        setSavedPosts(savedPosts.filter(postKey => postKey !== key));
    };

    return (
        <div className='container'>
            <h1>Saved Posts</h1>
            <div className="post-cards-container">
                {savedPosts.map(key => (
                    <div key={key} className="post-card">
                        <div>
                            <h3>{key}</h3>
                            <p>{localStorage.getItem(key)}</p>
                        </div>
                        <button className='main-button' onClick={() => handleDelete(key)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
}