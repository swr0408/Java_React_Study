import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UserRegister.module.css';

// 会員登録ステップ2
const UserRegisterStep2 = ({ formData, setFormData }) => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // ランダムな5桁の数字を生成してformDataに設定
    const generateRandomPersonalNumber = () => {
      return Math.floor(10000 + Math.random() * 90000).toString();
    };

    setFormData((prevFormData) => ({
      ...prevFormData,
      personalNumber: generateRandomPersonalNumber(),
      firstName: prevFormData.firstName || '',
      lastName: prevFormData.lastName || '',
      firstNameKana: prevFormData.firstNameKana || '',
      lastNameKana: prevFormData.lastNameKana || '',
      postalCode1: prevFormData.postalCode1 || '',
      postalCode2: prevFormData.postalCode2 || '',
      address1: prevFormData.address1 || '',
      address2: prevFormData.address2 || '',
      address3: prevFormData.address3 || '',
      phone: prevFormData.phone || '',
      birthDate: prevFormData.birthDate || '',
      sex: prevFormData.sex || '',
      email: prevFormData.email || ''
    }));
  }, [setFormData]);

  // 会員登録Step2の処理
  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/user/register', {
        const baseUrl = process.env.REACT_APP_API_BASE_URL; 
      const response = await fetch(`${baseUrl}/api/admins/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate('/user/login'); 
      } else {
        const data = await response.json();
        setError(data.message || '登録に失敗しました');
      }
    } catch (error) {
      setError('登録に失敗しました');
    }
  };

  return (
    <div className={styles.registerPage}>
      <form onSubmit={handleRegister} className={styles.registerForm}>
        <h2>会員新規登録 - ステップ2</h2>
        <div className={styles.formGroup}>
          <label htmlFor="loginId">ログインID:</label>
          <input
            type="text"
            id="loginId"
            value={formData.loginId}
            readOnly
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="personalNumber">個人番号:</label>
          <input
            type="text"
            id="personalNumber"
            value={formData.personalNumber}
            readOnly
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastName">姓:</label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">名:</label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="lastNameKana">姓（カナ）:</label>
          <input
            type="text"
            id="lastNameKana"
            value={formData.lastNameKana}
            onChange={(e) => setFormData({ ...formData, lastNameKana: e.target.value })}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="firstNameKana">名（カナ）:</label>
          <input
            type="text"
            id="firstNameKana"
            value={formData.firstNameKana}
            onChange={(e) => setFormData({ ...formData, firstNameKana: e.target.value })}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="postalCode1">郵便番号（前半3桁）:</label>
          <input
            type="text"
            id="postalCode1"
            value={formData.postalCode1}
            onChange={(e) => setFormData({ ...formData, postalCode1: e.target.value })}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="postalCode2">郵便番号（後半4桁）:</label>
          <input
            type="text"
            id="postalCode2"
            value={formData.postalCode2}
            onChange={(e) => setFormData({ ...formData, postalCode2: e.target.value })}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address1">住所（都道府県）:</label>
          <input
            type="text"
            id="address1"
            value={formData.address1}
            onChange={(e) => setFormData({ ...formData, address1: e.target.value })}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address2">住所（市区町村）:</label>
          <input
            type="text"
            id="address2"
            value={formData.address2}
            onChange={(e) => setFormData({ ...formData, address2: e.target.value })}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address3">住所（番地）:</label>
          <input
            type="text"
            id="address3"
            value={formData.address3}
            onChange={(e) => setFormData({ ...formData, address3: e.target.value })}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone">電話番号（ハイフンなし）:</label>
          <input
            type="text"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="birthDate">生年月日:</label>
          <input
            type="date"
            id="birthDate"
            value={formData.birthDate}
            onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="sex">性別:</label>
          <select
            id="sex"
            value={formData.sex}
            onChange={(e) => setFormData({ ...formData, sex: e.target.value })}
            required
          >
            <option value="">選択してください</option>
            <option value="0">男性</option>
            <option value="1">女性</option>
            <option value="2">その他</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">メールアドレス:</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <button type="submit" className={styles.registerButton}>登録</button>
      </form>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default UserRegisterStep2;