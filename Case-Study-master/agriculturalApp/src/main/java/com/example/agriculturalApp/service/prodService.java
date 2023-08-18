package com.example.agriculturalApp.service;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.example.agriculturalApp.models.Product;

@Repository
public interface prodService {
	
	public String addProduct(Product prod);
	
	public ResponseEntity<?> getAvailableProducts();
	

}
