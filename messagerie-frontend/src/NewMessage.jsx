import React, { useState } from 'react';

function NewMessage() {

    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
  const [editId, setEditId] = useState(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/messages', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ author, content })
        })
    };
    

    return (
        <div>
            <h1>Nouveau Message</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Auteur"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required />
                <textarea placeholder="Message"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
};

export default NewMessage;

