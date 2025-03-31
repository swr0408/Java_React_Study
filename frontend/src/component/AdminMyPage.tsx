import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './css/AdminMyPage.module.css';
import { User } from './types/User';
import { formatPhoneNumber } from './utils';

const AdminMyPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [page, setPage] = useState<number>(0);
  const navigate = useNavigate();

  // ページが読み込まれた時に管理者一覧を取得
  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  // 管理者一覧を取得する関数
  const fetchUsers = (page: number) => {
    // APIのURLを環境変数から取得
    const baseUrl = process.env.REACT_APP_API_BASE_URL;
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

  //ボタン押下時のリダイレクト処理
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