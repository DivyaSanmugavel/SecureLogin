package com.example.login.controller;

import org.springframework.web.bind.annotation.*;
import com.example.login.entity.User;
import com.example.login.service.UserService;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin
public class AuthController {

    private final UserService service;

    public AuthController(UserService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        service.register(user);
        return "User registered successfully";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        boolean success = service.login(user.getEmail(), user.getPassword());
        return success ? "Login successful" : "Invalid credentials";
    }
}
