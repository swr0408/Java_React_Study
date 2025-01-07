import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AdminMyPage.module.css';

const AdminMyPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const navigate = useNavigate();

  // ページが読み込まれた時に管理者一覧を取得
  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  // 管理者一覧を取得する関数
  const fetchUsers = (page) => {
    const baseUrl = process.env.REACT_APP_API_BASE_URL; // 環境変数から取得
  fetch(`${baseUrl}/api/users/latest?page=${page}`)
      .then(response => {
        if (!response.ok) {
          return response.text().then(text => {
            console.error('Error response text:', text);
            throw new Error('Network response was not ok');
          });
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched users:', data);
        setUsers(data.content);
      })
      .catch(error => console.error('Error fetching users:', error));
  };

  // 電話番号のフォーマット
  const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return '';

    // 携帯電話番号のフォーマット
    if (phoneNumber.startsWith('090') || phoneNumber.startsWith('080') || phoneNumber.startsWith('070') || phoneNumber.startsWith('050')) {
      return phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3');
    }

    // 固定電話番号のフォーマット
    return phoneNumber.replace(/(\d{2,4})(\d{2,4})(\d{4})/, '$1-$2-$3');
  };

  //リダイレクト処理
  const handleLogout = () => {
    navigate('/admin/login'); 
  };

  const handleRegister = () => {
    navigate('/admin/register'); 
  };

  return (
    <div className={styles.myPage}>
      <h2 className={styles.myPageTitle}>新規/検索選択</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.myPageButton} onClick={handleRegister}>管理者新規登録</button>
        <button className={styles.myPageButton}>検索</button>
        <button className={styles.myPageButton} onClick={handleLogout}>ログアウト</button>
      </div>
      <div className={styles.userList}>
        {users.map(user => (
          <div key={user.loginId} className={styles.userItem}>
            <span>{user.lastNameKanji} {user.firstNameKanji}</span>
            <span>{user.lastNameKana} {user.firstNameKana}</span>
            <span>{formatPhoneNumber(user.phone)}</span>
            <span>{user.email}</span>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        {page > 0 && (
          <button className={styles.prevButton} onClick={() => setPage(page > 0 ? page - 1 : 0)}>前へ</button>
        )}
        <button className={styles.nextButton} onClick={() => setPage(page + 1)}>次へ</button>
      </div>
    </div>
  );
};

export default AdminMyPage;