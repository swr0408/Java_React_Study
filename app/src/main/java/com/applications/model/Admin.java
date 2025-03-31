// package com.applications.model;

// import javax.persistence.*;
// import java.sql.Timestamp;

// //DBのadmin_login_infoテーブルに接続し、データを取得するためのクラス
// @Entity
// @Table(name = "admin_login_info")
// public class Admin {

//     @Id
//     //項目目:ログインID
//     @Column(name = "login_id", nullable = false, unique = true)
//     private String loginId; 

//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     //項目名:管理者ID
//     @Column(name = "id", unique = true, nullable = false)
//     private int id;

//     //項目名:パスワード
//     @Column(name = "password", nullable = false)
//     private String password;

//     //項目名:権限
//     @Column(name = "auth", nullable = false)
//     private int auth;

//     //項目名:登録日
//     @Column(name = "regist_date", nullable = false)
//     private Timestamp registDate;

//     //項目名:登録管理者
//     @Column(name = "register", nullable = false)
//     private String register;

//     //各項目のgetterとsetter
//     public String getLoginId() {
//         //nullや空文字の場合の例外処理が必要

//         return loginId;
//     }

//     public void setLoginId(String loginId) {
//         //nullや空文字の場合の例外処理が必要

//         this.loginId = loginId;
//     }

//     public int getId() {
//         //nullや空文字の場合の例外処理が必要  

//         return id;
//     }

//     public void setId(int id) {
//         //nullや空文字の場合の例外処理が必要

//         this.id = id;
//     }

//     public String getPassword() {
//         //nullや空文字の場合の例外処理が必要

//         return password;
//     }

//     public void setPassword(String password) {
//         this.password = password;
//         //nullや空文字の場合の例外処理が必要

//     }

//     public int getAuth() {
//         //nullや空文字、1か2以外の数字の場合の例外処理が必要

//         return auth;
//     }

//     public void setAuth(int auth) {
//         //nullや空文字、1か2以外の数字の場合の例外処理が必要

//         this.auth = auth;
//     }

//     public Timestamp getRegistDate() {
//         //nullの場合の例外処理が必要

//         return registDate;
//     }

//     public void setRegistDate(Timestamp registDate) {
//         //nullの場合の例外処理が必要

//         this.registDate = registDate;
//     }

//     public String getRegister() {
//         //nullや空文字の場合の例外処理が必要

//         return register;
//     }

//     public void setRegister(String register) {
//         //nullや空文字の場合の例外処理が必要
        
//         this.register = register;
//     }
// }
