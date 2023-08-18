package com.example.agriculturalApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.agriculturalApp.models.Product;
import com.example.agriculturalApp.rep.ProductRepository;
import com.example.agriculturalApp.service.prodService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:51320")
public class MyController {
	
	@Autowired
	private prodService productservice;
	
	@Autowired
	private ProductRepository prodRepo;

	Logger logger = LoggerFactory.getLogger(MyController.class);
	
	
	@GetMapping("/availableProducts")
	public ResponseEntity<?> getAvailableProducts(){
		logger.info("Recieved all the products from the database.");
		return productservice.getAvailableProducts();
	}
	
	@GetMapping("/availableProducts/{manufacturerName}")
	public List<Product> getProductsByManufacturerName(@PathVariable String manufacturerName){
		logger.info("Products found with manufacturer name "+manufacturerName);
		return prodRepo.findByProdManufacturer(manufacturerName);
	}
	
	
	@GetMapping("/availableProductsByProductName/{prodName}")
	public List<Product> buyProducts(@PathVariable String prodName){
		logger.info("Prodcuts found with products name "+prodName);
		return prodRepo.findByProdName(prodName);
	}
	
	
}
