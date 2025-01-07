package com.applications;

import com.applications.model.Admin;
import com.applications.model.User;
import com.applications.repository.AdminRepository;
import com.applications.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class PasswordHasher implements CommandLineRunner {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private UserRepository userRepository;

    private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Override
    // パスワードをハッシュ化する処理
    public void run(String... args) throws Exception {
        // パスワードがハッシュ化されていない場合、ハッシュ化する
        List<Admin> admins = adminRepository.findAll();
        for (Admin admin : admins) {
            String rawPassword = admin.getPassword();
            if (!rawPassword.startsWith("$2a$")) { 
                String encodedPassword = passwordEncoder.encode(rawPassword);
                admin.setPassword(encodedPassword);
                adminRepository.save(admin);
            }
        }

        // ユーザーのパスワードがハッシュ化されていない場合、ハッシュ化する
        @Override
    public void run(String... args) throws Exception {
        List<User> users = userRepository.findAll();
        for (User user : users) {
            String rawPassword = user.getPassword();
            if (!rawPassword.startsWith("$2a$")) { 
                String encodedPassword = passwordEncoder.encode(rawPassword);
                user.setPassword(encodedPassword);
                userRepository.save(user);
            }
        }
    }
}
