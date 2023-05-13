function validateForm() {
      var carModel = document.forms["myForm"]["carModel"].value;
      var vehicleAge = document.forms["myForm"]["vehicleAge"].value;
      

      if (carModel == "") {
        alert("Car Model must be filled out");
        return false;
      }

      if (vehicleAge == "") {
        alert("Vehicle Age must be filled out");
        return false;
      }

      // Additional email validation using regular expression
     // var emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
     // if (!emailPattern.test(email)) {
     //   alert("Invalid email address");
     //   return false;
     // }

    return true; 
    }

