import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminLogin from './component/AdminLogin';
import UserLogin from './component/UserLogin';
import AdminMyPage from './component/AdminMyPage';
import UserMyPage from './component/UserMyPage';
import AdminRegister from './component/AdminRegister';
import UserRegister from './component/UserRegister';

// ルーティング
const App = () => {
  return (
    <div id="app">
      <Router>
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/user/login" element={<UserLogin />} /> 
          <Route path="/admin/myPage" element={<AdminMyPage />} />
          <Route path="/user/myPage" element={<UserMyPage />} />
          <Route path="/admin/register" element={<AdminRegister />} />
          <Route path="/user/register/*" element={<UserRegister />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;