package com.example.DealerService.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.DealerService.models.Dealer;
import com.example.DealerService.models.Product;
import com.example.DealerService.repo.DealerRepository;
import com.example.DealerService.repo.ProductRepository;


@RestController
@RequestMapping("/dealer")
@CrossOrigin(origins = "http://localhost:51320")
public class dealerController {
	
	@Autowired
	private ProductRepository repository;
	
	@Autowired
	private DealerRepository dealerRepo;
	
	
	
	
	@PostMapping("/addProduct")
	public String saveProduct(@RequestBody Product product) {
		repository.save(product);
		return "Added product with id: " + product.getProdId();
	}
	
	@GetMapping("/getAllProducts")
	public List<Product> getAvailableProducts(){
		return repository.findAll();
	}
	
	@GetMapping("/findAllProduct/{prodId}")
	public Optional<Product> getProduct(@PathVariable String prodId){
		return repository.findById(prodId);
	}
	
	@DeleteMapping("/delete/{prodId}")
	public String deleteBook(@PathVariable String prodId) {
		repository.deleteById(prodId);
		return "Product with id "+prodId+" deleted.";
	}
	
}
