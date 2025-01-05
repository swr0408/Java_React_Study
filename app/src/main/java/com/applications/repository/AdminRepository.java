package com.applications.repository;

import com.applications.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

/* JpaRepositoryを継承しAdminクラスを指定することで、DBのadmin_login_info
   テーブルに接続しデータを取得するためのクラス */
   public interface AdminRepository extends JpaRepository<Admin, String> {
      Admin findByLoginId(String loginId);
  }