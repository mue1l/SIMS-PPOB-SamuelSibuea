import ReactDOM from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store'; 
import './index.css';
import LoginForm from './pages/login';
import RegisterForm from './pages/register';
import Beranda from './pages/Beranda';
import Pembayaran from './pages/Pembayaran';
import Profile from './pages/Profile';
import Topup from './pages/TopUp';
import Transaksi from './pages/transaksi';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Definisikan router Anda
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/registration",
    element: <RegisterForm />,
  },
  {
    path: "/beranda",
    element: <Beranda />,
  },
  {
    path: "/topup",
    element: <Topup />,
  },
  {
    path: "/transaction",
    element: <Pembayaran />,
  },
  {
    path: "/transaction/history",
    element: <Transaksi />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

// Render aplikasi dengan Provider dan RouterProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
