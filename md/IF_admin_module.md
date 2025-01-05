# 管理者情報取得API/IF仕様書
### エンドポイント
- URL: /api/admins/login
- HTTPメソッド: GET

### 説明
このエンドポイントは管理者情報を取得し、login_idとpasswordのみを含むレスポンスを返却します。

### リクエスト
- パラメータ: なし

### レスポンス
- HTTPステータスコード: 200 OK
- レスポンス形式: application/json
- レスポンスボディ:
    - 型: 配列
    - 要素: オブジェクト
        - プロパティ:
            - login_id (文字列): 管理者のログインID
            - password (文字列): 管理者のパスワード

### レスポンス例
```json
[
  {
    "login_id": "Admin12345",
    "password": "s4xwH6PNreTHiXaupJc6"
  },
  {
    "login_id": "Admin56789",
    "password": "B3dB3JKxLz2sKhVFtGhn"
  }
]