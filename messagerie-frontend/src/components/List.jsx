import DeleteMessage from './DeleteMessage';
import { useState, useEffect } from 'react';

const List = ({ messages, onDeleteMessage }) => {
    const [messages, setList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/messages')
            .then((res) => res.json())
            .then((data) => setList(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <ul>
            {messages.map((message, index) => (
                <DeleteMessage key={index} message={message} onDelete={() => onDeleteMessage(message.id)} />
            ))}
        </ul>
    );
};

export default List;
