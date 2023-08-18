package com.example.agriculturalApp.rep;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.agriculturalApp.models.User;

public interface UserRepository extends MongoRepository<User, String>{

}
