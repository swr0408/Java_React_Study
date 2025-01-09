import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function AdminLogin() {
  //ユーザー名、パスワード、エラーメッセージの状態を保持
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  //別のコンポーネントに移動すらためのナビゲーション
  const navigate = useNavigate();

  //フォーム送信時に呼び出される関数
  const handleSubmit = async (event) => {
    //ブラウザのデフォルト操作を防ぐ
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
      // ログイン成功・失敗の処理
      if (response.ok) {
        navigate('/admin/myPage');
      } else {
        //非同期処理でresponse.json()が完了するまで待機(asunc内のみ使える)
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
        {/* //リロードを防ぐために関数呼び出し */}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            {/* ReactでのForの書き方 */}
            <label htmlFor="username">ログインID：</label>
            <input
              type="text"
              id="username"
              value={username}
              // 入力されるたびにstateを更新
              onChange={(e) => setUsername(e.target.value)}
              //必須項目であることを示す
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