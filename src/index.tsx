import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from './routes/root/Root';
import store, { persistor } from './stores/root-store/root-store';
import { Service } from './routes/service/Service';
import { Task } from './routes/task/Task';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

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
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
