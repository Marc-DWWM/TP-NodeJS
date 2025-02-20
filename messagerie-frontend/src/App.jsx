import { useState } from 'react';
import { Link } from 'react-router-dom';
import List from './components/List';
function App() {

  const [messages, setList] = useState([]);

  const deleteMessage = (index) => {
    setMessages(messages.filter((_, i) => i !== index));
  };


  return (
    <div>
      <h1>Liste des Messages</h1>
      <ul>
        {list.map(msg => (
          <li key={msg.id}>
            <strong>{msg.author}:</strong> {msg.content}
          </li>
        ))}
      </ul>
      <Link to="/new"><button>Créer un nouveau message</button></Link>
    </div>
  );
}

export default App;