function validateForm(step) {
    let isValid = true;
    let form;
    if (step === 1) {
        document.addEventListener('keydown', function (event) {
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                event.preventDefault(); // Prevent form submission on Enter key
            }
        });
        form = document.querySelector('#studentForm');
        let stFName = document.querySelector('#stFName');
        let stLName = document.querySelector('#stLName');
        let courseName = document.querySelector('#courseName');
        let stId = document.querySelector('#stID');
        let stIdFormat = /^([A-Za-z]{2}|\d{4})\d{4,}/;
        let stEmail = document.querySelector('#stEmail');
        let stEmailFormat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let stMobile = document.querySelector('#stMobile');
        let stMobileFormat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

        if (stFName.value.trim() === '') {
            stFName.nextElementSibling.textContent = 'Enter first name';
            isValid = false;
        } else {
            stFName.nextElementSibling.textContent = ''; // Clear error message
        }
        if (stLName.value.trim() === '') {
            stLName.nextElementSibling.textContent = 'Enter last name';
            isValid = false;
        } else {
            stLName.nextElementSibling.textContent = ''; // Clear error message
        }
        if (courseName.value.trim() === '') {
            courseName.nextElementSibling.textContent = 'Enter Course Name';
            isValid = false;
        } else {
            courseName.nextElementSibling.textContent = ''; // Clear error message
        }
        if (stLName.value.trim() === '') {
            stLName.nextElementSibling.textContent = 'Enter last name';
            isValid = false;
        } else {
            stFName.nextElementSibling.textContent = ''; // Clear error message
        }
        if (stId.value.trim() === '') {
            stId.nextElementSibling.textContent = 'Enter your registered id';
            isValid = false;
        } else if (!stIdFormat.test(stId.value)) {
            stId.nextElementSibling.textContent = 'Enter valid registered id';
            isValid = false;
        } else {
            stId.nextElementSibling.textContent = ''; // Clear error message
        }
        if (stEmail.value.trim() === '') {
            stEmail.nextElementSibling.textContent = 'Enter registered email';
            isValid = false;
        } else if (!stEmailFormat.test(stEmail.value)) {
            stEmail.nextElementSibling.textContent = 'Enter registered email';
            isValid = false;
        } else {
            stEmail.nextElementSibling.textContent = ''; // Clear error message
        }
        if (stMobile.value.trim() === '') {
            stMobile.nextElementSibling.textContent = 'Enter registered mobile number';
            isValid = false;
        } else if (!stMobileFormat.test(stMobile.value)) {
            stMobile.nextElementSibling.textContent = 'Enter valid registered mobile number';
            isValid = false;
        } else {
            stMobile.nextElementSibling.textContent = ''; // Clear error message
        }
    } else if (step === 2) {
        // Add validation for step 2 fields
        // Similar logic as step 1

        let min = 999999;
        let max = 100000;
        let OTP;
        let OTPS;
        let verifyOTP;

        function genrateOTP(){
            OTP = Math.floor(Math.random() * (max- min) + min);
            console.log(OTP);
            
        }

        genrateOTP();

    } else if (step === 3) {
        // Add validation for step 3 fields
        // Similar logic as step 1
    }

    return isValid;
}


$(function() {
    $("#stSDate").datepicker({
        dateFormat: "dd-mm-yy",
        changeMonth: true,
        changeYear: true,
        minDate: new Date(2021, 0, 1), // Set minimum selectable date to January 1, 2021
        onSelect: function(selectedDate) {
            // When start date is selected, update minimum selectable date for end date
            $("#stEDate").datepicker("option", "minDate", selectedDate);

            // Calculate the minimum end date (90 days after the start date)
            var minEndDate = new Date(selectedDate);
            minEndDate.setDate(minEndDate.getDate() + 90);

            // Get the selected end date
            var selectedEndDate = $("#stEDate").datepicker("getDate");

            // If selected end date is earlier than the minimum end date, show error
            if (selectedEndDate < minEndDate) {
                $("#stEDate").val(""); // Clear the end date field
                $("#stEDate").next().text("End date must be at least 90 days after start date");
            } else {
                $("#stEDate").next().text(""); // Clear error message
            }
        }
    });

    $("#stEDate").datepicker({
        dateFormat: "dd-mm-yy",
        changeMonth: true,
        changeYear: true,
        minDate: new Date(2021, 0, 1), // Set minimum selectable date to January 1, 2021
        onSelect: function(selectedDate) {
            // Clear any error message when end date is selected
            $(this).next().text("");
        }
    });
});
