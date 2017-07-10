
function getRandAmountDue() {
	
    jQuery.ajax({
        type: "GET",
        url: getBaseUrl() + "CashDispenseSystem/resources/denominations",
        dataType: "json",
        beforeSend : function( xhr ) {
        	if (window.sessionStorage.token) {
                xhr.setRequestHeader("Authorization", "Bearer " +  window.sessionStorage.token);
            }
        },
        success: function (data, status, jqXHR) {
        	
        	document.getElementById("amountId").value = data.value;
        	document.getElementById("amount").innerHTML = "R " + data.value;
            
        },
         error: function (jqXHR, status) {            
        	 status
        }

    });
    
};

function getRandNoteDenimonation() {
	var randAmountCaptured = document.getElementById("randAmountCaptured").value;
	var amountDue = document.getElementById("amountId").value;
	if (randAmountCaptured == "" || (Number(randAmountCaptured) < Number(amountDue))) {
		alert("Please enter amount greater than or equal amount due above.");
		document.getElementById("randAmountCaptured").value = "";
		return;
	}
	var denominationAmountDiff = Number(randAmountCaptured) - Number(amountDue);
	
	getDenimonations(denominationAmountDiff);
	
};

function getDenimonations( randAmountCaptured ) {
	jQuery.ajax({
        type: "GET",
        url: getBaseUrl() + "CashDispenseSystem/resources/denominations/" + randAmountCaptured,
        dataType: "json",
        beforeSend : function( xhr ) {
        	if (window.sessionStorage.token) {
                xhr.setRequestHeader("Authorization", "Bearer " +  window.sessionStorage.token);
            }
        },
        success: function (data, status, jqXHR) {
        	var str = "" ;
            $.each(data , function(i, item) {
            	str += "<p>" + item +  "</p>";
			});
            document.getElementById("denoId").innerHTML = str;
                   
        },
         error: function (jqXHR, status) {            
        	 status
        }

    });
};

function reload() {
	document.getElementById("randAmountCaptured").value = "";
	document.getElementById("denoId").innerHTML = "";
	getRandAmountDue();
 
};

function getBaseUrl () {
	var getUrl = window.location;
	var baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
	return baseUrl;
};