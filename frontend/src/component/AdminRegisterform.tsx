import React from "react";
import styles from "./css/AdminRegister.module.css";
import { AdminRegisterForm, AdminValidation } from "./types/Admin";

type AdminRegisterInputProps  = {
    formData: AdminRegisterForm;
    setFormData: React.Dispatch<React.SetStateAction<AdminRegisterForm>>;
    errors: AdminValidation;
}

const AdminRegisterInput: React.FC<AdminRegisterInputProps> = ({ formData, setFormData, errors }) => {  
    return (
      <form  className={styles.registerForm}>
        <div className={styles.formGroup}>
          <label htmlFor="loginId">ログインID:</label>
          <input
            type="text"
            id="loginId"
            value={formData.loginId}
            onChange={(e) => setFormData({...formData, loginId: e.target.value})}
            required
          />
          {errors.loginId && <span className={styles.error}>{errors.loginId}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password">パスワード:</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value })}
            required
          />
          {errors.password && <span className={styles.error}>{errors.password}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="auth">権限:</label>
          <select
            id="auth"
            value={formData.auth}
            onChange={(e) => setFormData({...formData, auth: e.target.value as '1' | '2'})}
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
            value={formData.register}
            onChange={(e) => setFormData({...formData, register: e.target.value})}
            required
          />
          {errors.register && <span className={styles.error}>{errors.register}</span>}
        </div>       
    </form>
    );
};

export default AdminRegisterInput;