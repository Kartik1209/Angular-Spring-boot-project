package security.proxy;

import java.util.List;
import java.util.Optional;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;

import security.pojo.Product;



@FeignClient(value="dealerService", url="http://localhost:9003/dealer")
public interface DealerProxy {
	
	
	@PostMapping(value = "/addProduct", produces = "application/json")
	public String saveProduct(@RequestBody Product product,@RequestHeader("Authorization") String authorization);
	
	@GetMapping(value = "/getAllProducts", produces = "application/json")
	public List<Product> getAvailableProducts(@RequestHeader("Authorization") String authorization);
	
	@GetMapping(value = "/findAllProduct/{prodId}", produces="application/json")
	public Optional<Product> getProduct(@PathVariable String prodId,@RequestHeader("Authorization") String authorization);
	
	@DeleteMapping(value = "/delete/{prodId}", produces = "application/json")
	public String deleteBook(@PathVariable String prodId,@RequestHeader("Authorization") String authorization);
	
}
