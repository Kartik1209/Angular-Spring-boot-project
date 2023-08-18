package security.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import security.pojo.Product;
import security.proxy.FarmerProxy;

@RestController
@RequestMapping("/api/farmer")
public class AdminController {

	
	@Autowired
	private FarmerProxy farmerproxy;
	
	
	@PreAuthorize("hasRole('USER')")
	@GetMapping(value = "/availableProducts", produces = "application/json")
	public ResponseEntity<?> getAvailableProducts(@RequestHeader("Authorization") String authorization){
		return farmerproxy.getAvailableProducts(authorization);
	}
	
	@PreAuthorize("hasRole('USER')")
	@GetMapping(value = "/availableProducts/{manufacturerName}", produces = "application/json")
	public List<Product> getProductsByManufacturerName(@PathVariable String manufacturerName, @RequestHeader("Authorization") String authorization){
		return farmerproxy.getProductsByManufacturerName(manufacturerName,authorization);
	}



}