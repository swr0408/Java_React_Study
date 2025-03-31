import React from "react";
import { UserRegisterForm } from "./types/User";

type UserRegisterFormFieldsProps = {
    formData: UserRegisterForm;
    setFormData: React.Dispatch<React.SetStateAction<UserRegisterForm>>;
}

const UserRegisterFormfields: React.FC<UserRegisterFormFieldsProps> = ({ formData, setFormData, }) => {
    return(
        <>
            <div className="formGroup">
                <label htmlFor="loginId">ログインID:</label>
                <input
                    type="text"
                    id="loginId"
                    value={formData.loginId}
                    onChange={(e) => setFormData({ ...formData, loginId: e.target.value })}
                    required
                />
            </div>
            <div className="formGroup">
                <label htmlFor="password">パスワード:</label>
                <input
                    type="password"
                    id="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                />
            </div>
            <div className="formGroup">
                <label htmlFor="category">カテゴリ:</label>
                <input
                    type="number"
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                />
            </div>
        </>
    );
};

export default UserRegisterFormfields;