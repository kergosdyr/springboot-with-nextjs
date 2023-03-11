package com.tester.springboot.controller;

import java.util.UUID;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NextController {

    @PostMapping("/next")
    public String next() {
        return UUID.randomUUID().toString();
    }

}
