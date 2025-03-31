import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Login.css';
import { User } from './types/User';
import { ErrorMessage } from './types/Admin';
import UserLoginForm from './UserLoginForm';

const UserLogin: React.FC = () => {
  const [loginId, setLoginId] = useState<User['loginId']>('');
  const [password, setPassword] = useState<User['password']>('');
  const [error, setError] = useState<ErrorMessage>(null);
  const navigate = useNavigate();

  // 会員ログイン処理
  const login = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const baseUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await fetch(`${baseUrl}/api/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ loginId, password }),
      });
      const data = await response.json();
      if (response.ok && data.success) {
        // ログイン成功時の処理
        console.log('Login successful');
        navigate('/user/myPage', { state: { loginId } });
      } else {
        // ログイン失敗時の処理
        setError(data.message || 'ログインに失敗しました');
      }
    } catch (error) {
      setError('ログインに失敗しました');
    }
  };

  return (
    <UserLoginForm
    loginId={loginId}
    setLoginId={setLoginId}
    password={password}
    setPassword={setPassword}
    handleSubmit={login}
    error={error}
    />
  );
};

  

export default UserLogin;