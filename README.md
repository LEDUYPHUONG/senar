senar-app:

1. setting project:
  npx create-react-app senar --template typescript
  npm i bootstrap axios @reduxjs/toolkit lodash react-redux node-sass react-router-dom sass-loader history

+ change:
  - readme.md
  - gitignore: /nodemodules, /build

+ delete:
  all in src without index.tsx

+ settup fonder:
  - assets/scss && fonts
    - scss/base
    - scss/component
    - scss/fonts
    - scss/pages
    - scss/responsive
    - scss/themes/
    - slyte.scss && import it to index.tsx
  - component
  - data
  - HOC
  - Model
  - pages/Home.tsx && AdminPage.tsx
  - redux/configStore.tsx && reducer
  - templates/AdminTemplate.tsx
  - util/setting.tsx

+ setting index.tsx:
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import { Provider } from 'react-redux';
  import { Route, Routes } from 'react-router';
  import { BrowserRouter, Navigate } from 'react-router-dom';
  import { store } from './redux/configStore';
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
  
+ 