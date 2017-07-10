function loginUser() {
	var user = new Object();
	user.username = document.getElementById("username").value;
	user.password = document.getElementById("password").value;
	login(user)
	
};

function login (user) {
    jQuery.ajax({
        type: "POST",
        url: getBaseUrl() + 'CashDispenseSystem/resources/users/user/login',
        data: JSON.stringify(user),
        contentType: "application/json",
        dataType: "json",
        success: function (data, status, jqXHR) {
        	 window.sessionStorage.setItem("id", data.id);
             window.sessionStorage.setItem("token", data.token);
             $(location).attr('href', getBaseUrl() + 'CashDispenseSystem/restrictedPages.html');
        },
         error: function (jqXHR, status) {
        	 window.sessionStorage.removeItem("id");
        	 window.sessionStorage.removeItem("token");
        	 document.getElementById("error").innerHTML = "<h2><span style='color:red'>The username or password is incorrect.</span></h2>";
        }

    });
};

function home() {
	$(location).attr("href", getBaseUrl() + "CashDispenseSystem/index.html");
}

function getBaseUrl () {
	var getUrl = window.location;
	var baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
	return baseUrl;
};