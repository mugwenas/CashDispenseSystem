package com.za.shadrack.service;

import java.util.List;

import com.za.shadrack.exception.MyException;

public interface DenominationService {
	
	public String getRandAmount() throws MyException;
	
	public List<String> getDenominations(String amount) throws MyException; 

}
