CREATE TABLE admin_login_info (
    id INT(4) NOT NULL AUTO_INCREMENT UNIQUE COMMENT '管理者ID',
    login_id CHAR(10) NOT NULL PRIMARY KEY COMMENT 'ログインID',
    password CHAR(20) NOT NULL COMMENT 'パスワード',
    auth INT(1) NOT NULL COMMENT '権限',
    regist_date TIMESTAMP NOT NULL COMMENT '登録日',
    register VARCHAR(20) NOT NULL COMMENT '登録管理者'
) COMMENT = '管理機能ログイン情報'
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;