package com.za.shadrack.endpoint;

import java.util.List;

import javax.annotation.Resource;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

import com.za.shadrack.service.DenominationService;

@Resource
@Path("/denominations")
public class DenominationEndpoint {
	
	private DenominationService denominationService;
	
	public DenominationEndpoint(DenominationService denominationService) {
		this.denominationService = denominationService;
	}
	
	
	@GET
	@Produces({MediaType.APPLICATION_JSON})
	public Response getRandomAmount() {
		String randomAmount = this.denominationService.getRandAmount();
		Amount amount = new Amount();
		amount.setValue(randomAmount);
		return Response.ok(amount).build();
	}

	@GET
	@Path("/{amount}")
	@Produces({MediaType.APPLICATION_JSON})
	public Response getDenominations(@PathParam("amount") String amount) {
		List<String> denominations = this.denominationService.getDenominations(amount);
		return Response.ok(denominations).build();
	}
	
	@XmlRootElement(name = "amount")
	private static class Amount {
		private String value;
		@XmlElement				
		public String getValue() {
			return value;
		}
		public void setValue(String value) {
			this.value = value;
		}
					
	}
}
