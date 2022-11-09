package com.example.springboot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling 
@SpringBootApplication(scanBasePackages={"com.example.demo", "com.example.springboot", "com.example.java"})
@EnableJpaRepositories(basePackages = "com.example.demo.repository")
@EntityScan(basePackages = {"com.example.demo.entity"})
public class SpringBootTestApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootTestApplication.class, args);
 
	}

}
