package com.example.DealerService.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.DealerService.models.Product;

public interface ProductRepository extends MongoRepository<Product,String>{

}
