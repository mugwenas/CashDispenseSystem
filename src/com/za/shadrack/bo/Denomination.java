package com.za.shadrack.bo;

import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Random;

public class Denomination {
	
	private double validDenomination[]= {100, 50 ,20, 10, 5, 2, 1, 0.50, 0.25, 0.10 , 0.05};
	
	private NumberFormat randFormat = NumberFormat.getCurrencyInstance(Locale.getDefault());	
	private DecimalFormat decimalFormat = new DecimalFormat("# Cent");
	private DecimalFormat randomAmountFormat = new DecimalFormat("#.00");
		
	public Denomination() {}

	public List<String> getDenominations(double amount) {
		List<String> resultDenomination = new ArrayList<>();
		int count = 0;
		double totalDenominated = 0d;

		for(int i=0; i < validDenomination.length; i++) 
		{
			count= (int) (amount / validDenomination[i]); 
			if(count != 0)
			{
				String formatedDenominator = "" ;
				totalDenominated = totalDenominated + (validDenomination[i] * count);
				if (validDenomination[i] % 1 == 0 ) {
					formatedDenominator = randFormat.format((int)validDenomination[i]);
				} else {
					formatedDenominator = decimalFormat.format(validDenomination[i] * 100);
				}
				
				resultDenomination.add(count+"\tx\t  " + formatedDenominator);
			}
			amount = amount % validDenomination[i];
		}
		resultDenomination.add("TOTAL\t\t= " + randFormat.format(totalDenominated));
	
		return resultDenomination;
	}
	
	public String getRandomAmount() {
		Random random = new Random();
		int min = 10;
		int max = 1000;
		double randomAmount = min + (random.nextDouble() * (max - min));
		
		return randomAmountFormat.format(randomAmount);
	
	}
		
}
