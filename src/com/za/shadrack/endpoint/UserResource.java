package com.za.shadrack.endpoint;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement (name = "user")
public class UserResource implements Serializable {
	/**
	 * @author Shadrack.Mugwena
	 */
	private static final long serialVersionUID = 1L;
	
	private long id;
	private String username;
	private String password;
	
	@XmlElement
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	@XmlElement(required = true)
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
		
	@XmlElement(required = true)
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}


}
