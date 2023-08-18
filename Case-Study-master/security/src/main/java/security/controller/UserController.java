package security.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import security.pojo.Product;

import security.proxy.DealerProxy;

@RestController
@RequestMapping("/api/user")
public class UserController {

	
	@Autowired
	private DealerProxy dealerproxy;
	
//=================================Dealer Services==========================================================	
	
	
	// service to add product to the database.
	@PreAuthorize("hasRole('ADMIN')")
	@PostMapping(value = "/addProduct", produces = "application/json")
	public String saveProduct(@RequestBody Product product,@RequestHeader("Authorization") String authorization) {
		return dealerproxy.saveProduct(product,authorization);
	}
	
	
	// service to get all the products from the database.
	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping(value = "/getAllProducts", produces = "application/json")
	public List<Product> getAvailableProducts(@RequestHeader("Authorization") String authorization){
		return dealerproxy.getAvailableProducts(authorization);
	}
	
	
	// service to find the products with the given productId.
	@PreAuthorize("hasRole('ADMIN')")
	@GetMapping(value = "/findAllProduct/{prodId}", produces="application/json")
	public Optional<Product> getProduct(@PathVariable String prodId,@RequestHeader("Authorization") String authorization){
		return dealerproxy.getProduct(prodId,authorization);
	}
	
	
	// service to delete the product with help of the given product Id.
	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping(value = "/delete/{prodId}", produces = "application/json")
	public String deleteBook(@PathVariable String prodId,@RequestHeader("Authorization") String authorization) {
		return dealerproxy.deleteBook(prodId,authorization);
	}

}
