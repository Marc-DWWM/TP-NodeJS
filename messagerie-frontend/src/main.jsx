import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import NewMessage from './NewMessage.jsx';
import MessageList from './MessageList.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/new', element: <NewMessage /> },
  { path: 'list', element: <MessageList /> }
]);

// ...
<RouterProvider router={router} />