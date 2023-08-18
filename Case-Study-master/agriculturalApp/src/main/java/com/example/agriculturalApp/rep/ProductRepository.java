package com.example.agriculturalApp.rep;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.agriculturalApp.models.Product;

public interface ProductRepository extends MongoRepository<Product, String>{

	List<Product> findByProdManufacturer(String manufacturerName);

	List<Product> findByProdName(String prodName);

}
