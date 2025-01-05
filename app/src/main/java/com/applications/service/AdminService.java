package com.applications.service;

import com.applications.model.Admin;
import com.applications.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.List;

@Service
public class AdminService {

    // DBとのやり取りを行うためのadminRepositoryを自動的に注入
    @Autowired
    private AdminRepository adminRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // ログイン認証を行うメソッド
    public boolean authenticate(String loginId, String password) {
        // DBからloginIdに一致する情報を取得
        Admin admin = adminRepository.findByLoginId(loginId);
        // パスワードが一致するか確認
        return admin != null && passwordEncoder.matches(password, admin.getPassword());
    }

    // DBから全ての情報を取得するメソッド
    public List<Admin> getAllAdmins() {
        /*
         * DBとの接続エラーや取得時エラーの例外処理、
         * リストが空の場合の例外処理が必要
         */

        // リスト形式で全ての情報を返す
        return adminRepository.findAll();
    }

    // 管理者情報をDBに保存するメソッド
    public void saveAdmin(Admin admin) {
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        adminRepository.save(admin);
    }
}