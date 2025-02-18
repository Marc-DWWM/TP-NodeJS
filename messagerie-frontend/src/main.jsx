import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import NewMessage from './NewMessage.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/new', element: <NewMessage /> }
]);

// ...
<RouterProvider router={router} />
