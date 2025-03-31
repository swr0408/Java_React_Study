import React from "react";
import { useNavigate } from 'react-router-dom';

type UserLoginFormProps = {
    loginId: string;
    password: string;
    setLoginId: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    error: string | null;
}

const UserLoginForm: React.FC<UserLoginFormProps> = ({ loginId, setLoginId, password, setPassword, handleSubmit, error}) => {
    const navigate = useNavigate();
    return (
        <div className="login-container">
          <div className="login-form">
            {/* ログインフォームメインの部分 */}
            <h2 className="user-login-title">会員ログイン画面</h2>
            {/* ログインメソッドの呼び出し（フォーム送信時ブラウザがページをリロードし送信した情報を表示することするのを防ぎ、loginメソッドを呼び出す */}
            <form onSubmit={handleSubmit}>
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

    export default UserLoginForm;