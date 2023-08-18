package com.example.agriculturalApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.agriculturalApp.models.User;
import com.example.agriculturalApp.rep.UserRepository;

@RestController
@RequestMapping("/user")
public class UserController {
	
	@Autowired
	UserRepository userRepo;
	
	@PostMapping("/register")
	public ResponseEntity<String> registerUser(@RequestBody User user){
		try {
			userRepo.save(user);
		}
		catch(Exception e)
		{
			return ResponseEntity.ok( "User Not Saved");
		}
		return ResponseEntity.ok("Successfull User Registered.");
	}
}
