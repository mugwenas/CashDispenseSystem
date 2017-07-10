function createUser() {
	
	if (document.getElementById("username").value === "" ||
			document.getElementById("password").value === "") {
		alert("fields missing...");
		return false;

	}
	
	var user = new Object();
	user.id = 0;
	user.username = document.getElementById("username").value;
	user.password = document.getElementById("password").value;
			
	addUser(user)
	
};

function addUser (user) {
    jQuery.ajax({
        type: "PUT",
        url: "http://localhost:8080/CashDispenseSystem/resources/users/user/add",
        data: JSON.stringify(user),
        contentType: "application/json",
        dataType: "json",
        success: function (data, status, jqXHR) {
             alert("User: " + data.username + " successfully added.");
             $(location).attr('href','http://localhost:8080/CashDispenseSystem/index.html');
        },
         error: function (jqXHR, status) {            
        	 status
        }

    });
}