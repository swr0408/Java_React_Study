CREATE TABLE users (
    login_id CHAR(10) NOT NULL PRIMARY KEY COMMENT 'ログインID',
    personal_number CHAR(5) NOT NULL COMMENT '個人登録番号',
    last_name_kanji VARCHAR(10) NOT NULL COMMENT '氏名_氏（漢字',
    first_name_kanji VARCHAR(10) NOT NULL COMMENT '氏名_名（漢字)',
    last_name_kana VARCHAR(20) NOT NULL COMMENT '氏名_氏（カナ）',
    first_name_kana VARCHAR(20) NOT NULL COMMENT '氏名_名（カナ）',
    postal_code1 CHAR(3) NOT NULL COMMENT '郵便番号1',
    postal_code2 CHAR(4) NOT NULL COMMENT '郵便番号2',
    address1 VARCHAR(5) NOT NULL COMMENT '都道府県',
    address2 VARCHAR(100) NOT NULL COMMENT '市区町村',
    address3 VARCHAR(100) NULL COMMENT '住所',
    phone CHAR(11) NOT NULL COMMENT '電話番号',
    -- birth_date CHAR(8) NOT NULL COMMENT '生年月日',
    MODIFY COLUMN birth_date DATE NOT NULL COMMENT '生年月日';
    sex INT(1) NOT NULL COMMENT '性別',
    email CHAR(100) NOT NULL COMMENT 'E-mail',
    regist_date TIMESTAMP NOT NULL COMMENT '登録日',
    update_date TIMESTAMP NULL COMMENT '更新日'
)COMMENT = '個人情報'
CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;