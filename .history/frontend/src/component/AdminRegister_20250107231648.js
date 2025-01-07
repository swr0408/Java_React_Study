import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AdminRegister.module.css';

const AdminRegister = () => {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState('');
  const [registDate] = useState('');
  const [register, setRegister] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // バリデーション
  const validateForm = () => {
    const newErrors = {};
    if (loginId.length < 5 || loginId.length > 10) {
      newErrors.loginId = 'ログインIDは5文字以上、10文字以内で入力してください';
    }
    if (password.length < 8) {
      newErrors.password = 'パスワードは8文字以上で入力してください';
    }
    if (auth !== '1' && auth !== '2') {
      newErrors.auth = '権限は1または2で入力してください';
    }
    if (register.length > 20) {
      newErrors.register = '登録者は20文字以内で入力してください';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 登録処理
  const handleRegister = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      // 管理者登録APIを呼び出して処理
      const response = await fetch('${baseUrl}/api/admins/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ loginId, password, auth, registDate, register }),
      });
      if (response.ok) {
        navigate('/admin/login'); 
      } else {
        const data = await response.json();
        setErrors({ form: data.message || '登録に失敗しました' });
      }
    } catch (error) {
      setErrors({ form: '登録に失敗しました' });
    }
  };

  return (
    <div className={styles.registerPage}>
      <h2>管理者新規登録</h2>
      <form onSubmit={handleRegister} className={styles.registerForm}>
        <div className={styles.formGroup}>
          <label htmlFor="loginId">ログインID:</label>
          <input
            type="text"
            id="loginId"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
            required
          />
          {errors.loginId && <span className={styles.error}>{errors.loginId}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">パスワード:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <span className={styles.error}>{errors.password}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="auth">権限:</label>
          <select
            id="auth"
            value={auth}
            onChange={(e) => setAuth(e.target.value)}
            required
          >
            <option value="">選択してください</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
          {errors.auth && <span className={styles.error}>{errors.auth}</span>}
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="register">登録者:</label>
          <input
            type="text"
            id="register"
            value={register}
            onChange={(e) => setRegister(e.target.value)}
            required
          />
          {errors.register && <span className={styles.error}>{errors.register}</span>}
        </div>
        {errors.form && <p className={styles.error}>{errors.form}</p>}
        <button type="submit" className={styles.registerButton}>登録</button>
      </form>
    </div>
  );
};

export default AdminRegister;