package com.tester.springboot.controller;

import static org.junit.jupiter.api.Assertions.fail;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.server.LocalServerPort;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class NextControllerTest {
    
    @LocalServerPort
    private int port;
    
    @BeforeEach
    void setUp() throws Exception {
        RestAssured.port = port;
    }
    
    @Test
    @DisplayName("Next 초기값 테스트")
    void test() {

        Response response = RestAssured.given()
            .log()
            .all()
            .when()
            .post("/next")
            .then()
            .log()
            .all()
            .extract()
            .response();

        Assertions.assertThat(response.getStatusCode()).isEqualTo(200);
        System.out.println("response = " + response);
        Assertions.assertThat(response.getBody().asString().length()).isEqualTo(36);
        
    }
    
    

}