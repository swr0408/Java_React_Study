import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // ログイン処理
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // 環境変数からAPIのベースURLを取得
      const baseUrl = process.env.REACT_APP_API_BASE_URL; 
      // ログインAPIを呼び出す
      const response = await fetch(`${baseUrl}/api/admins/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ loginId: username, password }),
      });
      // ログインの処理
      if (response.ok) {
        navigate('/admin/myPage');
      } else {
        const data = await response.json();
        setError(data.message || 'ログインに失敗しました');
      }
    } catch (error) {
      setError('ログインに失敗しました');
    }
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
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
}

export default AdminLogin;