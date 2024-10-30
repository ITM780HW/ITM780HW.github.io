
// saving form data to localStorage
function saveToStorage() {
    // collect all values from form elements
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var experience = document.getElementById("experience").value;
    
    // collect selected radio button value
    var roleInputs = document.getElementsByName("role");
    var selectedRole = "";
    for(var i = 0; i < roleInputs.length; i++) {
        if(roleInputs[i].checked) {
            selectedRole = roleInputs[i].value;
            break;
        }
    }
    
    // Collect selected checkboxes
    var checkboxes = document.getElementsByName("factors");
    var selectedFactors = [];
    for(var i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            selectedFactors.push(checkboxes[i].id);
        }
    }
    
    var expectations = document.getElementById("expectations").value;
    
    // Store in localStorage
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("experience", experience);
    localStorage.setItem("role", selectedRole);
    localStorage.setItem("factors", JSON.stringify(selectedFactors));
    localStorage.setItem("expectations", expectations);
    
    alert("Form data saved successfully!");
}

// Load saved data when the  page loads
window.onload = function() {
    document.getElementById("firstName").value = localStorage.getItem("firstName") || "";
    document.getElementById("lastName").value = localStorage.getItem("lastName") || "";
    document.getElementById("email").value = localStorage.getItem("email") || "";
    document.getElementById("experience").value = localStorage.getItem("experience") || "less1";
    
    var savedRole = localStorage.getItem("role");
    if(savedRole) {
        document.querySelector('input[value="' + savedRole + '"]').checked = true;
    }
    
    var savedFactors = JSON.parse(localStorage.getItem("factors")) || [];
    savedFactors.forEach(function(factor) {
        document.getElementById(factor).checked = true;
    });
    
    document.getElementById("expectations").value = localStorage.getItem("expectations") || "";
}