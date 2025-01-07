import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserRegisterStep1 from './UserRegisterStep1';
import UserRegisterStep2 from './UserRegisterStep2';

// 会員登録項目
const UserRegister = () => {
  const [formData, setFormData] = useState({
    loginId: '',
    password: '',
    category: '',
    personalNumber: '',
    firstName: '',
    lastName: '',
    firstNameKana: '',
    lastNameKana: '',
    postalCode1: '',
    postalCode2: '',
    address1: '',
    address2: '',
    address3: '',
    phone: '',
    birthDate: '',
    sex: '',
    email: ''
  });

  // 会員登録ステップ1とステップ2のルーティング
  return (
    <Routes>
      <Route path="/step1" element={<UserRegisterStep1 formData={formData} setFormData={setFormData} />} />
      <Route path="/step2" element={<UserRegisterStep2 formData={formData} setFormData={setFormData} />} />
    </Routes>
  );
};

export default UserRegister;