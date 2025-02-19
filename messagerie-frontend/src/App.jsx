import { Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Page d'accueil</h1>
      <Link to="/new">Ajouter un message</Link>
      <Link to="/list">Liste des messages</Link>
    </div>
  );
}
export default App;