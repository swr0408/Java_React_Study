import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const UserLogin = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // 会員ログイン処理
  const login = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ loginId, password }),
      });
      if (response.ok) {
        // ログイン成功時の処理
        console.log('Login successful');
        navigate('/user/myPage', { state: { loginId } });
      } else {
        // ログイン失敗時の処理
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
      {/* ログインフォームメインの部分 */}
      <div className="login-form">
        <h2 className="user-login-title">会員ログイン画面</h2>
        {/* ログインメソッドの呼び出し（フォーム送信時ブラウザがページをリロードし送信した情報を表示することするのを防ぎ、loginメソッドを呼び出す */}
        <form onSubmit={login}>
          {/* ログインIDテキストボックスの表示 */}
          <div className="input-group">
            <label htmlFor="loginId">ログインID：</label>
            <input
              type="text"
              id="loginId"
              value={loginId}
              onChange={(e) => setLoginId(e.target.value)}
              required
            />
          </div>
          {/* パスワードテキストボックスの表示（type属性をpasswordに設定し、入力内容を非表示） */}
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
        {/* エラーメッセージの表示 */}
        {error && <div className="error-message">{error}</div>}
        <div className="register-link">
        <a href="#" onClick={() => navigate('/user/register/step1')}>会員新規登録</a>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;