// package com.applications.model;

// import javax.persistence.Entity;
// import javax.persistence.Id;
// import javax.persistence.Table;
// import javax.persistence.Column;
// import java.sql.Timestamp;
// import java.time.LocalDate;

// //DBのlogin_login_infoテーブルに接続し、操作するためのクラス
// @Entity
// @Table(name = "users")
// public class UserList {

//   // 項目名：ログインID
//   @Id
//   @Column(name = "login_id", nullable = false)
//   private String loginId;

//   // 項目名：パスワード
//   @Column(name = "personal_number", nullable = false)
//   private String personalNumber;

//   // 項目名：名前
//   @Column(name = "last_name_kanji", nullable = true)
//   private String lastNameKanji;

//   @Column(name = "first_name_kanji", nullable = true)
//   private String firstNameKanji;

//   @Column(name = "last_name_kana", nullable = true)
//   private String lastNameKana;

//   @Column(name = "first_name_kana", nullable = true)
//   private String firstNameKana;

//   // 項目名：郵便番号
//   @Column(name = "postal_code1", nullable = false)
//   private String postalCode1;

//   @Column(name = "postal_code2", nullable = false)
//   private String postalCode2;

//   // 項目名：住所
//   @Column(name = "address1", nullable = true)
//   private String address1;

//   @Column(name = "address2", nullable = true)
//   private String address2;

//   @Column(name = "address3", nullable = true)
//   private String address3;

//   // 項目名：電話番号
//   @Column(name = "phone", nullable = true)
//   private String phone;

//   // 項目名：生年月日
//   @Column(name = "birth_date", nullable = true)
//   private LocalDate birthDate;

//   // 項目名：性別
//   @Column(name = "sex", nullable = true)
//   private int sex;

//   // 項目名：メールアドレス
//   @Column(name = "email", nullable = true)
//   private String email;

//   // 項目名：登録日
//   @Column(name = "regist_date", nullable = false)
//   private Timestamp registDate;

//   // 項目名：更新日
//   @Column(name = "update_date", nullable = true)
//   private Timestamp updateDate;

//   // 各項目のgetterとsetter
//   // ログインID
//   public String getLoginId() {
//     return loginId;
//   }

//   public void setLoginId(String loginId) {
//     this.loginId = loginId;
//   }

//   // 個人識別番号
//   public String getPersonalNumber() {
//     return personalNumber;
//   }

//   public void setPersonalNumber(String personalNumber) {
//     this.personalNumber = personalNumber;
//   }

//   // 名前
//   public String getLastNameKanji() {
//     return lastNameKanji;
//   }

//   public void setLastNameKanji(String lastNameKanji) {
//     this.lastNameKanji = lastNameKanji;
//   }

//   public String getFirstNameKanji() {
//     return firstNameKanji;
//   }

//   public void setFirstNameKanji(String firstNameKanji) {
//     this.firstNameKanji = firstNameKanji;
//   }

//   public String getLastNameKana() {
//     return lastNameKana;
//   }

//   public void setLastNameKana(String lastNameKana) {
//     this.lastNameKana = lastNameKana;
//   }

//   public String getFirstNameKana() {
//     return firstNameKana;
//   }

//   public void setFirstNameKana(String firstNameKana) {
//     this.firstNameKana = firstNameKana;
//   }

//   // 郵便番号
//   public String getPostalCode1() {
//     return postalCode1;
//   }

//   public void setPostalCode1(String postalCode1) {
//     this.postalCode1 = postalCode1;
//   }

//   public String getPostalCode2() {
//     return postalCode2;
//   }

//   public void setPostalCode2(String postalCode2) {
//     this.postalCode2 = postalCode2;
//   }

//   // 住所
//   public String getAddress1() {
//     return address1;
//   }

//   public void setAddress1(String address1) {
//     this.address1 = address1;
//   }

//   public String getAddress2() {
//     return address2;
//   }

//   public void setAddress2(String address2) {
//     this.address2 = address2;
//   }

//   public String getAddress3() {
//     return address3;
//   }

//   public void setAddress3(String address3) {
//     this.address3 = address3;
//   }

//   // 電話番号
//   public String getPhone() {
//     return phone;
//   }

//   public void setPhone(String phone) {
//     this.phone = phone;
//   }

//   // 生年月日
//   public LocalDate getBirthDate() {
//     return birthDate;
// }

// public void setBirthDate(LocalDate birthDate) {
//     this.birthDate = birthDate;
// }

//   // 性別
//   public int getSex() {
//     return sex;
//   }

//   public void setSex(int sex) {
//     this.sex = sex;
//   }

//   // メールアドレス
//   public String getEmail() {
//     return email;
//   }

//   public void setEmail(String email) {
//     this.email = email;
//   }

//   // 登録日
//   public Timestamp getRegistDate() {
//     return registDate;
//   }

//   public void setRegistDate(Timestamp registDate) {
//     this.registDate = registDate;
//   }

//   // 更新日
//   public Timestamp getUpdateDate() {
//     return updateDate;
//   }

//   public void setUpdateDate(Timestamp updateDate) {
//     this.updateDate = updateDate;
//   }
// }
