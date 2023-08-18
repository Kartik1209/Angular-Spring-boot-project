package com.example.agriculturalApp.productServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.agriculturalApp.models.Product;
import com.example.agriculturalApp.rep.ProductRepository;
import com.example.agriculturalApp.service.prodService;
import java.util.Random;

@Service
public class ProductService implements prodService{
	
	@Autowired
	private ProductRepository productRepository;

	public String addProduct(Product prod) {
		// TODO Auto-generated method stub
		 Random random = new Random();
	        // Generate a random integer between 0 and 99 (inclusive)
	        int randomNumber = random.nextInt(100);
	        String randomNumberString = String.valueOf(randomNumber);

	       
		prod.setProdId(randomNumberString);
		return productRepository.save(prod).getProdId();
	}
	
	public ResponseEntity<?> getAvailableProducts(){
		return ResponseEntity.ok(this.productRepository.findAll());
	} 



}
