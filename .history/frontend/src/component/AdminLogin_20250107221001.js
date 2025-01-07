import React, { useState } from 'react';
import './Login.css';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // ログイン処理をここに追加
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-form">
      <h2>管理者ログイン画面</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
          ログインID：
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
          パスワード：
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">ログイン</button>
      </form>
    </div>
  );
}

export default AdminLogin;