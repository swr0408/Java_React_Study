import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UserRegister.module.css';

// 会員登録ステップ1
const UserRegisterStep1 = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  //Step1入力完了後の「次へ」の処理
  const handleNext = (event) => {
    event.preventDefault();
    navigate('/user/register/step2');
  };

  return (
    <div className={styles.registerPage}>
      <h2>会員新規登録 - ステップ1</h2>
      <form onSubmit={handleNext} className={styles.registerForm}>
        <div className={styles.formGroup}>
          <label htmlFor="loginId">ログインID:</label>
          <input
            type="text"
            id="loginId"
            value={formData.loginId}
            onChange={(e) => setFormData({ ...formData, loginId: e.target.value })}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">パスワード:</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="category">カテゴリ:</label>
          <input
            type="number"
            id="category"
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            required
          />
        </div>
        <button type="submit" className={styles.registerButton}>次へ</button>
      </form>
    </div>
  );
};

export default UserRegisterStep1;