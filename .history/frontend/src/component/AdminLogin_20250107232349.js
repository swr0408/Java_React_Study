import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/admins/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ loginId: username, password }),
      });
      if (response.ok) {
        // ログイン成功時にAdminMyPageにリダイレクト
        navigate('/admin/myPage');
      } else {
        const data = await response.json();
        setError(data.message || 'ログインに失敗しました');
      }
    } catch (error) {
      setError('ログインに失敗しました');
    }
  };

  // ログイン成功時にAdminMyPageにリダイレクト
  navigate('/admin/myPage');
};

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="admin-login-title">管理者ログイン画面</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">ログインID：</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">パスワード：</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">ログイン</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;