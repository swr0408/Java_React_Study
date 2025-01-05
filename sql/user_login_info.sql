CREATE TABLE user_login_info (
    id INT(4) NOT NULL AUTO_INCREMENT UNIQUE COMMENT 'ID',
    login_id CHAR(10) NOT NULL PRIMARY KEY COMMENT 'ログインID',
    password CHAR(20) NOT NULL COMMENT 'パスワード',
    category INT(1) NULL COMMENT 'ユーザー種別',
    regist_date TIMESTAMP NOT NULL COMMENT '登録日',
    update_date TIMESTAMP NULL COMMENT '更新日'
)COMMENT = '会員機能ログイン情報'
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;