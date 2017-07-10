function logOutUser() {
	var logoutToken = new Object();
	logoutToken.id = window.sessionStorage.getItem("id");
   	logoutToken.token =  window.sessionStorage.getItem("token");
   	logOut(logoutToken);
	
};

function logOut (logoutToken) {
    jQuery.ajax({
        type: "POST",
        url: getBaseUrl() + "CashDispenseSystem/resources/users/user/logout/" + logoutToken.id,
        data: JSON.stringify(logoutToken),
        contentType: "application/json",
        dataType: "json",
        success: function (data, status, jqXHR) {
        	window.sessionStorage.removeItem("id");
       	 	window.sessionStorage.removeItem("token");
             $(location).attr("href",getBaseUrl() + "/CashDispenseSystem/login.html");
        },
         error: function (jqXHR, status) {
        	 window.sessionStorage.removeItem("id");
        	 window.sessionStorage.removeItem("token");
        	 $(location).attr("href",getBaseUrl() + "CashDispenseSystem/login.html");
        }

    });
}

function getBaseUrl () {
	var getUrl = window.location;
	var baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
	return baseUrl;
};