import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function App() {

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/messages')
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((err) => console.error(err));
  }, []);

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