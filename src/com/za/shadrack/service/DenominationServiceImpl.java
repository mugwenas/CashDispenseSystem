package com.za.shadrack.service;

import java.util.List;

import com.za.shadrack.bo.Denomination;
import com.za.shadrack.exception.MyException;

public class DenominationServiceImpl implements DenominationService {
	
	private Denomination denomination;
	
	public DenominationServiceImpl(Denomination denomination) {
		this.denomination = denomination;
	}

	@Override
	public String getRandAmount() throws MyException {
		return this.denomination.getRandomAmount();
	}

	@Override
	public List<String> getDenominations(String amount) throws MyException {
		return this.denomination.getDenominations(Double.parseDouble(amount));
	}

}
