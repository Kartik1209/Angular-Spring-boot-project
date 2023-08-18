package com.example.DealerService.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.DealerService.models.Dealer;

public interface DealerRepository extends MongoRepository<Dealer,String>{

}
