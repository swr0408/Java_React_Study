package com.applications;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    // ホームページへのアクセス
    @GetMapping("/")
    public String home() {
        return "{\"message\": \"Welcome to the Home Page\"}";
    }
}