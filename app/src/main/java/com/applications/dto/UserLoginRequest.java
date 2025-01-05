package com.applications.dto;

//クライアントから送られたJSONデータを格納するクラス
public class UserLoginRequest {
    private String loginId;
    private String password;

    //各項目のgetterとsetter
    public String getLoginId() {
        return loginId;
    }

    public void setLoginId(String loginId) {
        this.loginId = loginId;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}