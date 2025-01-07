package com.applications;

import com.applications.service.UserService;
import com.applications.dto.UserRegisterRequest;
import com.applications.dto.UserLoginRequest;
import com.applications.dto.UserLoginResponse;
import com.applications.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.transaction.annotation.Transactional;

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    //UserServiceクラスを呼び出しログイン認証を行う
    private UserService userService;

    //会員登録処理
    @PostMapping("/register")
    @Transactional
    public ResponseEntity<?> registerUser(@RequestBody UserRegisterRequest registerRequest) {
        try {
            userService.registerUser(registerRequest);
            return ResponseEntity.ok("{\"message\": \"登録に成功しました\"}");
        } catch (Exception e) {
            return ResponseEntity.status(500).body("{\"message\": \"登録に失敗しました\"}");
        }
    }


    //ログイン処理
    @PostMapping("/login")
    //クライアントから送られたJSONデータをLoginRequestクラスに変換し、ログイン認証を行う
    public ResponseEntity<UserLoginResponse> userLogin(@RequestBody UserLoginRequest loginRequest) {
        //UserServiceクラスのauthenticateメソッドにオブジェクトを渡し、認証結果を取得
        boolean isAuthenticated = userService.authenticate(loginRequest.getLoginId(), loginRequest.getPassword());
        [{
            "resource": "/C:/Users/swr04/Downloads/SE資料/training_java_vue-feature-kiuchi/training_java_react/app/src/main/java/com/applications/UserController.java",
            "owner": "_generated_diagnostic_collection_name_#5",
            "code": "16777235",
            "severity": 8,
            "message": "Type mismatch: cannot convert from ResponseEntity<String> to ResponseEntity<UserLoginResponse>",
            "source": "Java",
            "startLineNumber": 41,
            "startColumn": 20,
            "endLineNumber": 41,
            "endColumn": 76
        },{
            "resource": "/C:/Users/swr04/Downloads/SE資料/training_java_vue-feature-kiuchi/training_java_react/app/src/main/java/com/applications/UserController.java",
            "owner": "_generated_diagnostic_collection_name_#5",
            "code": "16777235",
            "severity": 8,
            "message": "Type mismatch: cannot convert from ResponseEntity<String> to ResponseEntity<UserLoginResponse>",
            "source": "Java",
            "startLineNumber": 43,
            "startColumn": 20,
            "endLineNumber": 43,
            "endColumn": 93
        }]

    //会員情報取得処理
    @GetMapping("/{loginId}")
    public ResponseEntity<User> getUser(@PathVariable String loginId) {
        User user = userService.findUserWithDetails(loginId);
        //認証結果をクライアントに返す
        if (user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}