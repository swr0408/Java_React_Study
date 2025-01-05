CREATE TABLE admin_login_info (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'ログインID',
    password CHAR(20) NOT NULL COMMENT 'パスワード',
    auth INT(1) NOT NULL COMMENT '権限',
    regist_date TIMESTAMP NOT NULL COMMENT '登録日',
    register VARCHAR(20) NOT NULL COMMENT '登録者名',
    update_date TIMESTAMP NOT NULL COMMENT '更新日',
    updater VARCHAR(20) NULL COMMENT '更新者名'
)COMMENT = '管理機能ログイン情報'

CREATE TABLE user_login_info (
    id INT NOT NULL PRIMARY KEY COMMENT 'ログインID',
    password CHAR(20) NOT NULL COMMENT 'パスワード',
    auth INT(1) NULL COMMENT '権限',
    regist_date TIMESTAMP NOT NULL COMMENT '登録日',
    register VARCHAR(20) NOT NULL COMMENT '登録者名',
    update_date TIMESTAMP NOT NULL COMMENT '更新日',
    updater VARCHAR(20) NOT NULL COMMENT '更新者名'
)COMMENT = '会員機能ログイン情報'

CREATE TABLE users (
    login_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'ログインID',
    personal_number CHAR(5) NOT NULL COMMENT '個人登録番号',
    last_name_kanji VARCHAR(10) NOT NULL COMMENT '氏名_氏（漢字',
    first_name_kanji VARCHAR(10) NOT NULL COMMENT '氏名_名（漢字)',
    last_name_kana VARCHAR(20) NOT NULL COMMENT '氏名_氏（カナ）',
    first_name_kana VARCHAR(20) NOT NULL COMMENT '氏名_名（カナ）',
    postal_code CHAR(7) NOT NULL COMMENT '郵便番号',
    address1 VARCHAR(5) NOT NULL COMMENT '住所１',
    address2 VARCHAR(100) NOT NULL COMMENT '住所2',
    address3 VARCHAR(100) NULL COMMENT '住所3',
    phone_type CHAR(1) NULL COMMENT '電話番号_種別',
    phone1 CHAR(11) NULL COMMENT '電話番号１',
    phone2 CHAR(11) NULL COMMENT '電話番号２',
    birth_date CHAR(8) NULL COMMENT '生年月日',
    age INT(3) NULL COMMENT '年齢',
    email VARCHAR(100) NOT NULL COMMENT 'E-mail',
    regist_date TIMESTAMP NOT NULL COMMENT '登録日',
    register VARCHAR(20) NOT NULL COMMENT '登録者名',
    update_date TIMESTAMP NOT NULL COMMENT '更新日',
    updater VARCHAR(20) NOT NULL COMMENT '更新者名'
)COMMENT = '個人情報'

CREATE TABLE prefectures (
    prefecture_number INT(2) NOT NULL PRIMARY KEY COMMENT '都道府県番号',
    prefecture_name_kanji VARCHAR(10) NOT NULL COMMENT '都道府県名_漢字'
)COMMENT = '都道府県マスタ'

CREATE TABLE messages (
    message_id CHAR(7) NOT NULL PRIMARY KEY COMMENT 'メッセージID',
    message VARCHAR(100) NOT NULL COMMENT 'メッセージ'
)COMMENT = 'メッセージマスタ'


