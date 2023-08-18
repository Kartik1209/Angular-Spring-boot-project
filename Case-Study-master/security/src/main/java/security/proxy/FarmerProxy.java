package security.proxy;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;

import security.pojo.Product;



@FeignClient(value="farmerservice", url="http://localhost:9002/user/")
public interface FarmerProxy {
	
	@GetMapping(value = "/availableProducts", produces = "application/json")
	public ResponseEntity<?> getAvailableProducts(@RequestHeader("Authorization") String authorization);
	
	@GetMapping("/availableProducts/{manufacturerName}")
	public List<Product> getProductsByManufacturerName(@PathVariable String manufacturerName,@RequestHeader("Authorization") String authorization);
	
}
