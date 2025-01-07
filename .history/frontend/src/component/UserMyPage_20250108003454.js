import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './UserMyPage.module.css';

const UserMyPage = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { loginId } = location.state;

  // 会員情報を取得
  const login = async (event) => {
    event.preventDefault();
    try {
      const baseUrl = process.env.REACT_APP_API_BASE_URL;
      const response = await fetch(`${baseUrl}/api/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ loginId, password }),
      });
      const data = await response.json();
      if (response.ok) {
        // ログイン成功時の処理
        console.log('Login successful');
        navigate('/user/myPage', { state: { loginId } });
      } else {
        // ログイン失敗時の処理
        setError(data.message || 'ログインに失敗しました');
      }
    } catch (error) {
      setError('ログインに失敗しました');
    }
  };

    // ログインIDが存在する場合のみ会員情報取得の処理を実行
    fetchUser();
  }, [loginId]);

  // 会員情報が取得中の表示
  if (!user || !user.userList) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.userMyPage}>
      <h2>会員情報</h2>
      <div className={styles.userInfo}>
        <p><span className={styles.label}>個品登録番号:</span> <span className={styles.value}>{user.userList.personalNumber}</span></p>
        <p><span className={styles.label}>氏名:</span> <span className={styles.value}>{user.userList.lastNameKanji} {user.userList.firstNameKanji}</span></p>
        <p><span className={styles.label}>郵便番号:</span> <span className={styles.value}>{user.userList.postalCode1}-{user.userList.postalCode2}</span></p>
        <p><span className={styles.label}>住所（都道府県）:</span> <span className={styles.value}>{user.userList.address1}</span></p>
        <p><span className={styles.label}>住所（区市町村、町名番地）:</span> <span className={styles.value}>{user.userList.address2}</span></p>
        <p><span className={styles.label}>住所（ビル、号室など）:</span> <span className={styles.value}>{user.userList.address3}</span></p>
        <p><span className={styles.label}>生年月日:</span> <span className={styles.value}>{user.userList.birthDate}</span></p>
        <p><span className={styles.label}>性別:</span> <span className={styles.value}>{user.userList.sex === 0 ? '男性' : user.userList.sex === 1 ? '女性' : 'その他'}</span></p>
        <p><span className={styles.label}>電話番号:</span> <span className={styles.value}>{user.userList.phone}</span></p>
        <p><span className={styles.label}>メールアドレス:</span> <span className={styles.value}>{user.userList.email}</span></p>
        <p><span className={styles.label}>ログインID:</span> <span className={styles.value}>{user.loginId}</span></p>
        <p><span className={styles.label}>パスワード:</span> <span className={styles.value}>{'*'.repeat(user.password.length)}</span></p>
      </div>
      <button className={styles.myPageButton} onClick={() => navigate('/user/login')}>ログアウト</button>
    </div>
  );
};

export default UserMyPage;