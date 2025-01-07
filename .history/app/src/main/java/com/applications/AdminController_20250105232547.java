package com.applications;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.applications.model.Admin;
import com.applications.service.AdminService;
import com.applications.dto.UserLoginRequest;
import java.sql.Timestamp;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

//HTTPリクエストを処理し、HTTPレスポンスを直接返す役割。戻り値はJSON形式。
@RestController
/* リクエストするURLを指定
   管理機能ログインのためのコントローラー */
@RequestMapping("/api/admins")
public class AdminController {

    //DBとのやり取りを行うためのadminServiceを自動的に注入
    @Autowired
    private AdminService adminService;

    @GetMapping
    public List<AdminResponse> adminLogin() {
        //DBとの接続エラーや取得時エラーの例外処理が必要

        /* サービスクラスからデータを取得し、
           Stream()で変換やフィルタリングが行いやすいようにして取得し返す処理 */
        return adminService.getAllAdmins().stream()
                //データ変換時の例外処理・nullや空文字の場合の例外処理が必要

                //必要な情報のみを取得しオブジェクトを生成
                .map(admin -> new AdminResponse(admin.getLoginId(), admin.getPassword()))
                //生成したオブジェクトをリストにまとめ格納
                .collect(Collectors.toList());
    }

    //ログイン処理
    @PostMapping("/login")
    public ResponseEntity<?> adminLogin(@RequestBody UserLoginRequest loginRequest) {
        boolean isAuthenticated = adminService.authenticate(loginRequest.getLoginId(), loginRequest.getPassword());
        if (isAuthenticated) {
            return ResponseEntity.ok("{\"message\": \"Login successful\"}");
        } else {
            return ResponseEntity.status(401).body("{\"message\": \"Invalid credentials\"}");
        }
    }

    //管理者登録処理
    @PostMapping("/register")
    public ResponseEntity<?> registerAdmin(@RequestBody Admin admin) {
        //登録情報の入力チェック
        if (admin.getLoginId() == null || admin.getLoginId().isEmpty()) {
            return ResponseEntity.badRequest().body("{\"message\": \"Login ID is required\"}");
        }
        if (admin.getPassword() == null || admin.getPassword().isEmpty()) {
            return ResponseEntity.badRequest().body("{\"message\": \"Password is required\"}");
        }
        if (admin.getAuth() == 0) {
            return ResponseEntity.badRequest().body("{\"message\": \"Auth is required\"}");
        }
        if (admin.getRegister() == null || admin.getRegister().isEmpty()) {
            return ResponseEntity.badRequest().body("{\"message\": \"Register is required\"}");
        }
        admin.setRegistDate(Timestamp.from(Instant.now()));
        //登録処理
        adminService.saveAdmin(admin);
        return ResponseEntity.ok("{\"message\": \"Admin registered successfully\"}");
    }

    /*  管理者情報をくライアントに返すためのデータを保持するためのクラス
        取得した情報を格納するためのクラス */
    public static class AdminResponse {
        private String loginId;
        private String password;

        //コンストラクタを定義（オブジェクト生成時に値をセットする）
        public AdminResponse(String loginId, String password) {
            this.loginId = loginId;
            this.password = password;
        }

        public String getLoginId() {
            return loginId;
        }

        public String getPassword() {
            return password;
        }
    }

    // //ログイン情報を保持するためのクラス
    // public static class LoginRequest {
    //     private String loginId;
    //     private String password;

    //     public String getLoginId() {
    //         return loginId;
    //     }

    //     public void setLoginId(String loginId) {
    //         this.loginId = loginId;
    //     }

    //     public String getPassword() {
    //         return password;
    //     }

    //     public void setPassword(String password) {
    //         this.password = password;
    //     }
    // }
}
