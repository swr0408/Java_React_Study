package com.applications.repository;

import com.applications.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/* JpaRepositoryを継承しUserクラスを指定することで、DBのuser_login_info
   テーブルに接続しデータを取得するためのクラス */
   @Repository
   public interface UserRepository extends JpaRepository<User, Integer> {
       User findByLoginId(String loginId);
   }