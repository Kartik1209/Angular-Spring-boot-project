package com.example.agriculturalApp.models;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "users")
public class User {
	private String useremail;
	private String userpass;
	private String userphone;
	
	
	public User() {
		
		// TODO Auto-generated constructor stub
	}


	public User(String useremail, String userpass, String userphone) {
		super();
		this.useremail = useremail;
		this.userpass = userpass;
		this.userphone = userphone;
	}


	public String getUseremail() {
		return useremail;
	}


	public void setUseremail(String useremail) {
		this.useremail = useremail;
	}


	public String getUserpass() {
		return userpass;
	}


	public void setUserpass(String userpass) {
		this.userpass = userpass;
	}


	public String getUserphone() {
		return userphone;
	}


	public void setUserphone(String userphone) {
		this.userphone = userphone;
	}
	
	
	
	
}
