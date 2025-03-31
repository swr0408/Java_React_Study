import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './css/AdminRegister.module.css';
import { AdminRegisterForm, AdminValidation } from './types/Admin';
import AdminRegisterInput from './AdminRegisterform';

const AdminRegister: React.FC = () => {
  const [formData, setFormData] = useState<AdminRegisterForm>({
    loginId: '',
    password: '',
    auth: '' as '1' | '2',
    registDate: '',
    register: '',
  });
  
  const [errors, setErrors] = useState<AdminValidation>({});
  const navigate = useNavigate();

  // バリデーション
  const validateForm = (): boolean => {
    const newErrors: AdminValidation = {};
    if (formData.loginId.length < 5 || formData.loginId.length > 10) {
      newErrors.loginId = 'ログインIDは5文字以上、10文字以内で入力してください';
    }
    if (formData.password.length < 8) {
      newErrors.password = 'パスワードは8文字以上で入力してください';
    }
    if (formData.auth !== '1' && formData.auth !== '2') {
      newErrors.auth = '権限は1または2で入力してください';
    }
    if (formData.register.length > 20) {
      newErrors.register = '登録者は20文字以内で入力してください';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 管理者登録処理
  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      // 管理者登録APIを呼び出して処理
      const baseUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await fetch(`${baseUrl}/api/admins/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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
      <AdminRegisterInput formData={formData} setFormData={setFormData} errors={errors} />
      {errors.form && <p className={styles.error}>{errors.form}</p>}
      <button type="submit" className={styles.registerButton} onClick={handleRegister}>登録</button>
    </div>
  );
};

export default AdminRegister;