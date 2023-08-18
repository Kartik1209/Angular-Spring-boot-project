package com.example.agriculturalApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;

import springfox.documentation.swagger2.annotations.EnableSwagger2;


@SpringBootApplication
@EnableDiscoveryClient
public class AgriculturalAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(AgriculturalAppApplication.class, args);
	}
	

}
