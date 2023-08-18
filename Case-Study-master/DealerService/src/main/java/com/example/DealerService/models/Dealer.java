package com.example.DealerService.models;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "dealers")
public class Dealer {
	
	
	private String dealerEmail;
	private String dealerPass;
	private String dealerName;
	
	
	public Dealer(String dealerEmail, String dealerPass, String dealerName) {
		super();
		this.dealerEmail = dealerEmail;
		this.dealerPass = dealerPass;
		this.dealerName = dealerName;
	}


	public Dealer() {
		
	}


	public String getDealerEmail() {
		return dealerEmail;
	}


	public void setDealerEmail(String dealerEmail) {
		this.dealerEmail = dealerEmail;
	}


	public String getDealerPass() {
		return dealerPass;
	}


	public void setDealerPass(String dealerPass) {
		this.dealerPass = dealerPass;
	}


	public String getDealerName() {
		return dealerName;
	}


	public void setDealerName(String dealerName) {
		this.dealerName = dealerName;
	}
	
	
	
	
	
	
	
}
