# BSS 研修課題リポジトリ

この課題はバックエンドを Java で構築します。

## 管理者インタフェース

### 1. ログインインタフェース

#### 1-1. 基本情報

- **エンドポイント**: `/api/admins/login`
- **HTTPメソッド**: `GET`
- **メソッド名**: `adminLogin`
- **インターフェースの説明**: このインターフェースは、管理者がログインするために使用されます。

#### 1-2. リクエストパラメータ

このエンドポイントは GET メソッドを使用するため、リクエストパラメータはありません。

#### 1-3. レスポンスデータ

- **レスポンスデータの種類**: `json`
- **レスポンスデータ説明**:

| レスポンスデータ名 | 種類    | 備考         |
|-------------------|---------|--------------|
| code              | number  | 0-成功、1-失敗 |
| message           | string  | メッセージ    |
| data              | object  | 戻り値        |

---

### 2. 新規登録/検索インタフェース

### 2-1. 基本情報

- **エンドポイント**:`/api/admins/select`
- **HTTPメソッド**:`GET`
- **メソッド名**:`selection`
- **インターフェースの説明**:このインターフェースは新規登録画面、会員情報検索画面に遷移、ユーザー一覧リストを表示するために使います。

### 2-2.リクエストパラメーター
このエンドポイントは GET メソッドを使用するため、リクエストパラメータはありません。

### 2-3.レスポンスデータ

- **レスポンスデータの種類**: `json`
- **レスポンスデータ説明**:

| レスポンスデータ名 | 種類    | 備考         |
|-------------------|---------|--------------|
| code              | number  | 0-成功、1-失敗 |
| message           | string  | メッセージ    |
| data              | object  | 戻り値        |
---

### 3. 個人情報新規登録インタフェース

#### 3-1. 基本情報

- **エンドポイント**: `/api/user/register`
- **HTTPメソッド**: `POST`
- **メソッド名**: `register`
- **インターフェースの説明**: このインターフェースは、個人情報を登録するために使用されます。

#### 3-2. リクエストパラメータ

- **エンティティクラス**: `users`、`user_login_info`

#### 3-3. レスポンスデータ

- **レスポンスデータの種類**: `json`
- **レスポンスデータ説明**:

| レスポンスデータ名 | 種類    | 備考         |
|-------------------|---------|--------------|
| code              | number  | 0-成功、1-失敗 |
| message           | string  | メッセージ    |
| data              | object  | 戻り値        |

---

### 4. 個人情報検索インタフェース

#### 4-1. 基本情報

- **エンドポイント**: `/api/user/search`
- **HTTPメソッド**: `GET`
- **メソッド名**: `userSearch`
- **インターフェースの説明**: このインターフェースは、個人情報を検索するために使用されます。

#### 4-2. リクエストパラメータ

| パラメータ名 | 説明                             | 種類    |
|--------------|----------------------------------|---------|
| loginId      | 会員機能ログイン情報のログインID  | String |

#### 4-3. レスポンスデータ

- **レスポンスデータの種類**: `json`
- **レスポンスデータ説明**:

| レスポンスデータ名 | 種類    | 備考         |
|-------------------|---------|--------------|
| code              | number  | 0-成功、1-失敗 |
| message           | string  | メッセージ    |
| data              | object  | 戻り値        |

---

### 5. 個人情報更新インタフェース

#### 5-1. 基本情報

- **エンドポイント**: `/api/user/update`
- **HTTPメソッド**: `PUT`
- **メソッド名**: `update`
- **インターフェースの説明**: このインターフェースは、個人情報を更新するために使用されます。

#### 5-2. リクエストパラメータ

- **エンティティクラス**: `uses`、`user_login_info`

#### 5-3. レスポンスデータ

- **レスポンスデータの種類**: `json`
- **レスポンスデータ説明**:

| レスポンスデータ名 | 種類    | 備考         |
|-------------------|---------|--------------|
| code              | number  | 0-成功、1-失敗 |
| message           | string  | メッセージ    |
| data              | object  | 戻り値        |

---

## 会員インタフェース

### 1. ログインインタフェース

#### 1-1. 基本情報

- **エンドポイント**: `/api/user/login`
- **HTTPメソッド**: `POST`
- **メソッド名**: `userLogin`
- **インターフェースの説明**: このインターフェースは、会員がログインするために使用されます。

#### 1-2. リクエストパラメータ

| パラメータ名 | 説明                                   | 種類    |
|--------------|---------------------------------------|---------|
| login_id           | 会員機能ログイン情報のログインID | String |
| password     | パスワード                            | String |

#### 1-3. レスポンスデータ

- **レスポンスデータの種類**: `json`
- **レスポンスデータ説明**:

| レスポンスデータ名 | 種類    | 備考         |
|-------------------|---------|--------------|
| code              | number  | 0-成功、1-失敗 |
| message           | string  | メッセージ    |
| data              | object  | 戻り値        |

---

### 2. 会員情報インタフェース

#### 2-1. 基本情報

- **エンドポイント**: `api/user/info`
- **HTTPメソッド**: `GET`
- **メソッド名**: `userInfo`
- **インターフェースの説明**: このインターフェースは、会員情報を取得するために使用されます。

#### 2-2. リクエストパラメータ

| パラメータ名 | 説明                                  | 種類    |
|--------------|---------------------------------------|---------|
| id           | 会員機能ログイン情報のログインID       | String |

#### 2-3. レスポンスデータ

- **レスポンスデータの種類**: `json`
- **レスポンスデータ説明**:

| レスポンスデータ名 | 種類    | 備考         |
|-------------------|---------|--------------|
| code              | number  | 0-成功、1-失敗 |
| message           | string  | メッセージ    |
| data              | object  | 戻り値        |