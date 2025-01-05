# 会員情報取得API/IF仕様書
### エンドポイント
- URL: /api/user/login
- HTTPメソッド: POST

### 説明
このエンドポイントはログイン認証を行います。クライアントで入力されたlogin_idとpasswordを一時的に保存しデータベースに照会し確認します。認証が成功すれば次ページに進みます。

### リクエスト
- パラメータ: なし
- リクエスト形式： application/json
- リクエストボディ： 
    - login_id (文字列): 会員のログインID
    - password (文字列): 会員のパスワード

### リクエスト例
```json
[
  {
    "login_id": "Userkcv5vs",
    "password": "Qrgvy9Ts4PZvyNSr6NzL"
  }
]
```

### 処理
1. **login_id**と**password**を受け取り、一時的に変数に保存。
2. データベース内で**login_id**と**password**を照会。
3. 照会結果が一致すればログイン成功、次のページに進む。
4. 一致しない場合はエラーメッセージを返却

### レスポンス
- HTTPステータスコード: 200 OK
- レスポンス形式: application/json