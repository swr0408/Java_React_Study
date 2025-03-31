import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './css//UserRegister.module.css';
import { UserRegisterForm } from './types/User';
import UserRegisterFormfields from './UserRegisterFormFields';

interface UserRegisterStep1Props {
  formData: UserRegisterForm;
  setFormData: React.Dispatch<React.SetStateAction<UserRegisterForm>>;
}

// 会員登録ステップ1
const UserRegisterStep1: React.FC<UserRegisterStep1Props> = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  //Step1入力完了後の「次へ」の処理
  const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    navigate('/user/register/step2');
  };

  return (
    <div className={styles.registerPage}>
      <form onSubmit={handleNext} className={styles.registerForm}>
        <h2>会員新規登録 - ステップ1</h2>
        <UserRegisterFormfields formData={formData} setFormData={setFormData} />
        <button type="submit" className={styles.registerButton}>次へ</button>
      </form>
    </div>
  );
};

export default UserRegisterStep1;