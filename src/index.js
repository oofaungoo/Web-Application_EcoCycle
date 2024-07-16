import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Form from './pages/form/Form';
import MainLayout from './MainLayout';
import Reward from './pages/reward/Reward';
import PriceCheck from './pages/pricecheck/PriceCheck';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Login />} />
          <Route path='home' element={<Home />} />
          <Route path='home/form' element={<Form />} />
          <Route path='home/reward' element={<Reward />} />
          <Route path='home/pricecheck' element={<PriceCheck />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

{/* Source code credit by Pawaris Chomphuphan (Fuang) */ }