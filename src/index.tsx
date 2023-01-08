import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { store } from './redux/configStore';
import "bootstrap/dist/css/bootstrap.min.css";
import './assets/scss/style.scss';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import AdminTemplate from './templates/AdminTemplate';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='' element={<HomePage />}>
          <Route index element={<HomePage />}></Route>
          <Route path='home' element={<HomePage />}></Route>
        </Route>
        <Route path='admin' element={<AdminTemplate />}>
            <Route path='/admin' element={<AdminPage />}></Route>
        </Route>
        <Route path='*' element={<Navigate to='' />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
