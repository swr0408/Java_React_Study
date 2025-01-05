package com.applications;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    //セキュリティの設定
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
        // CSRF対策を無効化
            .csrf().disable() 
            .authorizeRequests()
            // 指定のエンドポイントを認証なしでアクセス可能
            .antMatchers("/api/admins/login", "/api/admins/register", "/api/users/latest","/api/user/login","/api/user/**","/api/user/register/**").permitAll() 
            // その他のエンドポイントは認証を要求する
            .anyRequest().authenticated() 
            .and()
            .httpBasic(); 

        return http.build();
    }
}