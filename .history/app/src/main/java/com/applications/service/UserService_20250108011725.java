package com.applications.service;

import com.applications.repository.UserListRepository;
import com.applications.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.applications.model.User;
import com.applications.model.UserList;
import com.applications.dto.UserRegisterRequest;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


import java.sql.Timestamp;
import java.time.Instant;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class UserService {

    // ログを取得
    private static final Logger logger = LoggerFactory.getLogger(UserService.class);

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserListRepository userListRepository;

    @Transactional
    public void registerUser(UserRegisterRequest registerRequest) {
        try {
            // user_login_info テーブルに登録
            User user = new User();
            user.setLoginId(registerRequest.getLoginId());
            user.setPassword(registerRequest.getPassword());
            user.setCategory(registerRequest.getCategory());
            user.setRegistDate(Timestamp.from(Instant.now()));
            user.setUpdateDate(Timestamp.from(Instant.now()));
            userRepository.save(user);

            // users テーブルに登録
            UserList userList = new UserList();
            userList.setLoginId(registerRequest.getLoginId());
            userList.setPersonalNumber(registerRequest.getPersonalNumber());
            userList.setFirstNameKanji(registerRequest.getFirstName());
            userList.setLastNameKanji(registerRequest.getLastName());
            userList.setFirstNameKana(registerRequest.getFirstNameKana());
            userList.setLastNameKana(registerRequest.getLastNameKana());
            userList.setPostalCode1(registerRequest.getPostalCode1());
            userList.setPostalCode2(registerRequest.getPostalCode2());
            userList.setAddress1(registerRequest.getAddress1());
            userList.setAddress2(registerRequest.getAddress2());
            userList.setAddress3(registerRequest.getAddress3());
            userList.setPhone(registerRequest.getPhone());
            userList.setBirthDate(registerRequest.getBirthDate());
            userList.setSex(registerRequest.getSex());
            userList.setEmail(registerRequest.getEmail());
            userList.setRegistDate(Timestamp.from(Instant.now()));
            userList.setUpdateDate(Timestamp.from(Instant.now()));
            userListRepository.save(userList);
        } catch (Exception e) {
            logger.error("Error occurred while registering user: {}", e.getMessage(), e);
            throw e; // 例外を再スローしてトランザクションをロールバックする
        }
    }

    // ログインIDとパスワードが一致するかを確認するメソッド
    public boolean authenticate(String loginId, String password) {
        // ログインIDが一致するユーザーを取得
        // UserRepositoryでUserエンティティにアクセスし、loginIdを検索
        User user = userRepository.findByLoginId(loginId);
        // ユーザーが存在し、パスワードが一致する場合はtrueを返す
        return user != null && user.getPassword().equals(password);
    }

    // ログインIDに基づいてユーザーを取得するメソッド
    public User findByLoginId(String loginId) {
        return userRepository.findByLoginId(loginId);
    }

    // データベースに接続できるかを確認するメソッド
    public boolean isDatabaseConnected() {
        try {
            // レコード数を取得し、接続できる場合はtrueを返す
            userRepository.count();
            return true;
            // 接続できない場合はfalseを返す
        } catch (Exception e) {
            return false;
        }
    }

    // ログインIDに基づいてユーザーを取得するメソッド
    public User findUserWithDetails(String loginId) {
        return userRepository.findByLoginId(loginId);
    }
}