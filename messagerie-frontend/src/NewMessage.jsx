fetch('http://localhost:3000/messages', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ author: 'Alice', content: 'Coucou'})
});

export default NewMessage;