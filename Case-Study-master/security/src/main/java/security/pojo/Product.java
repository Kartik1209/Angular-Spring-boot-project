package security.pojo;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Document(collection = "products")
public class Product {

	@Id
	private String prodId;
	private String prodName;
	private double prodPrice;
	private String prodManufacturer;
	
public Product() {
	
	}

public Product(String prodId, String prodName, double prodPrice, String prodManufacturer) {
	
	this.prodId = prodId;
	this.prodName = prodName;
	this.prodPrice = prodPrice;
	this.prodManufacturer = prodManufacturer;
}


public String getProdId() {
	return prodId;
}


public void setProdId(String prodId) {
	this.prodId = prodId;
}


public String getProdName() {
	return prodName;
}


public void setProdName(String prodName) {
	this.prodName = prodName;
}


public double getProdPrice() {
	return prodPrice;
}


public void setProdPrice(double prodPrice) {
	this.prodPrice = prodPrice;
}


public String getProdManufacturer() {
	return prodManufacturer;
}


public void setProdManufacturer(String prodManufacturer) {
	this.prodManufacturer = prodManufacturer;
}




	
}
