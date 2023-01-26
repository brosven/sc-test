import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes/root/Root';
import store from './stores/root-store';
import './index.css';
import { Service } from './routes/service/Service';
import { Task } from './routes/task/Task';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: 'services/:serviceId', element: <Service /> },
      { path: 'tasks/:taskId', element: <Task /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
