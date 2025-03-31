import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import UserRegisterStep1 from './UserRegisterStep1';
import UserRegisterStep2 from './UserRegisterStep2';
import { UserRegisterForm } from './types/User';

// 会員登録項目
const UserRegister: React.FC = () => {
  const [formData, setFormData] = useState<UserRegisterForm> ({
    loginId: '',
    password: '',
    category: '',
    personalNumber: '',
    firstNameKanji: '',
    lastNameKanji: '',
    firstNameKana: '',
    lastNameKana: '',
    postalCode1: '',
    postalCode2: '',
    address1: '',
    address2: '',
    address3: '',
    phone: '',
    birthDate: '',
    sex: 0,
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