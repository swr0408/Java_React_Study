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
        return ResponseEntity.ok(new UserLoginResponse(isAuthenticated));
    }

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