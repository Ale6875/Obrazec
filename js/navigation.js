document.getElementById("signInLink").onclick = function() {
    document.getElementById("page0").style.display = "none";
    document.getElementById("page").style.display = "block";
};

document.getElementById("log").onclick = function() {
    const emailAddress = document.getElementById("emaill");
    const passwordd = document.getElementById("see");

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailAddress.value === "" || passwordd.value === "") {
        emailAddress.style.border='none';
        emailAddress.style.border='1px solid #FF6961';
        passwordd.style.border='none';
        passwordd.style.border='1px solid #FF6961';
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please fill in all fields: Email and Password!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else if (!emailPattern.test(emailAddress.value)) {
        emailAddress.style.border='none';
        emailAddress.style.border='1px solid #FF6961';
        passwordd.style.border='none';
        passwordd.style.border='1px solid #c1c1c1';
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please enter a valid email address!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Log in succesfull!',
            text: 'You have successfully logged in!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                document.getElementById("page6").style.display = "none";
                document.getElementById("page0").style.display = "block";
                
                document.getElementById('country').selectedIndex = 0;
                document.getElementById('month').selectedIndex = 0;
                document.getElementById('day').selectedIndex = 0;
                document.getElementById('year').selectedIndex = 0;
                document.getElementById('email').value = "";
                document.getElementById('se').value = "";
                document.getElementById('re').value = "";
                document.getElementById('ci').value = "";
                document.getElementById('storpr').value = "";
                document.getElementById('po').value = "";
                document.getElementById('onlineid').value = "";
                document.getElementById('fe').value = "";
                document.getElementById('sse').value = "";
                document.getElementById('emaill').value = "";
                document.getElementById('see').value = "";
            }
        });
        document.getElementById("page").style.display = "none";
        document.getElementById("page0").style.display = "block";
    }
};

document.getElementById("exit_btn").addEventListener("click", function(event) {
    document.getElementById("page").style.display = "none";
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "none";
    document.getElementById("page4").style.display = "none";
    document.getElementById("page5").style.display = "none";
    document.getElementById("page6").style.display = "none";
    document.getElementById("page0").style.display = "block";
});

document.getElementById("create").onclick = function() {
    document.getElementById("page0").style.display = "none";
    document.getElementById("page1").style.display = "block";
};

document.getElementById("back0").onclick = function() {
    document.getElementById("page1").style.display = "none";
    document.getElementById("page0").style.display = "block";
};

document.getElementById("next1").onclick = function() {
    const countrySelect = document.getElementById("country");

    if (countrySelect.value === "") {
        countrySelect.style.border='none';
        countrySelect.style.border='1px solid #FF6961';
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please select a country!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else {
        document.getElementById("page1").style.display = "none";
        document.getElementById("page2").style.display = "block";
    }
};

document.getElementById("back1").onclick = function() {
    document.getElementById("page2").style.display = "none";
    document.getElementById("page1").style.display = "block";
};

document.getElementById("next2").onclick = function() {
    const monthSelect = document.getElementById("month");
    const daySelect = document.getElementById("day");
    const yearSelect = document.getElementById("year");

    if (monthSelect.value === "" || daySelect.value === "" || yearSelect.value === "") {
        monthSelect.style.border='none';
        monthSelect.style.border='1px solid #FF6961';
        daySelect.style.border='none';
        daySelect.style.border='1px solid #FF6961';
        yearSelect.style.border='none';
        yearSelect.style.border='1px solid #FF6961';
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please select your date of birth!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else {
        const selectedDate = new Date(yearSelect.value, monthSelect.value - 1, daySelect.value);
        const today = new Date();
    
        let age = today.getFullYear() - selectedDate.getFullYear();
        const monthDiff = today.getMonth() - selectedDate.getMonth();
        const dayDiff = today.getDate() - selectedDate.getDate();
    
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }
    
        if (age < 18) {
            monthSelect.style.border='none';
            monthSelect.style.border='1px solid #FF6961';
            daySelect.style.border='none';
            daySelect.style.border='1px solid #FF6961';
            yearSelect.style.border='none';
            yearSelect.style.border='1px solid #FF6961';
            Swal.fire({
                icon: 'error',
                title: 'Error...',
                text: 'You must be at least 18 years old!',
                customClass: {
                    confirmButton: 'custom-confirm-button'
                }
            });
        } else {
            document.getElementById("page2").style.display = "none";
            document.getElementById("page3").style.display = "block";
        }
    }
};

document.getElementById("back2").onclick = function() {
    document.getElementById("page3").style.display = "none";
    document.getElementById("page2").style.display = "block";
};

document.getElementById("next3").onclick = function() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("se");
    const rePasswordInput = document.getElementById("re");

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (emailInput.value === "" || passwordInput.value === "" || rePasswordInput.value === "") {
        emailInput.style.border='none';
        emailInput.style.border='1px solid #FF6961';
        passwordInput.style.border='none';
        passwordInput.style.border='1px solid #FF6961';
        rePasswordInput.style.border='none';
        rePasswordInput.style.border='1px solid #FF6961';
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please fill in all fields: Email, Password, and Re-enter Password!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else if (passwordInput.value!=rePasswordInput.value) {
        emailInput.style.border='none';
        emailInput.style.border='1px solid #c1c1c1';
        passwordInput.style.border='none';
        passwordInput.style.border='1px solid #FF6961';
        rePasswordInput.style.border='none';
        rePasswordInput.style.border='1px solid #FF6961';
        Swal.fire({
            icon: 'error',
            title: 'Passwords don\'t match',
            text: 'Please ensure both fields contain the same password!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else if (!emailPattern.test(emailInput.value)) {
        emailInput.style.border='none';
        emailInput.style.border='1px solid #FF6961';
        passwordInput.style.border='none';
        passwordInput.style.border='1px solid #c1c1c1';
        rePasswordInput.style.border='none';
        rePasswordInput.style.border='1px solid #c1c1c1';
        Swal.fire({
            icon: 'error',
            title: 'Invalid Email',
            text: 'Please enter a valid email address!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else {
        document.getElementById("page3").style.display = "none";
        document.getElementById("page4").style.display = "block";
    }
};

document.getElementById("back3").onclick = function() {
    document.getElementById("page4").style.display = "none";
    document.getElementById("page3").style.display = "block";
};

document.getElementById("next4").onclick = function() {
    const cityInput = document.getElementById("ci");
    const stateOrProvinceInput = document.getElementById("storpr");
    const postCodeInput = document.getElementById("po");
    if (cityInput.value === "" || stateOrProvinceInput.value === "" || postCodeInput.value === "") {
        cityInput.style.border='none';
        cityInput.style.border='1px solid #FF6961';
        stateOrProvinceInput.style.border='none';
        stateOrProvinceInput.style.border='1px solid #c1c1c1';
        postCodeInput.style.border='none';
        postCodeInput.style.border='1px solid #c1c1c1';
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please fill in all fields: City, State or Province, Postcode!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else if (cityInput.value === "") {
        cityInput.style.border='none';
        cityInput.style.border='1px solid #FF6961';
        stateOrProvinceInput.style.border='none';
        stateOrProvinceInput.style.border='1px solid #c1c1c1';
        postCodeInput.style.border='none';
        postCodeInput.style.border='1px solid #c1c1c1';
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please fill in all fields: City, State or Province, Postcode!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else if (stateOrProvinceInput.value === "") {
        cityInput.style.border='none';
        cityInput.style.border='1px solid #c1c1c1';
        stateOrProvinceInput.style.border='none';
        stateOrProvinceInput.style.border='1px solid #FF6961';
        postCodeInput.style.border='none';
        postCodeInput.style.border='1px solid #c1c1c1';
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please fill in all fields: City, State or Province, Postcode!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else if (postCodeInput.value === "") {
        cityInput.style.border='none';
        cityInput.style.border='1px solid #c1c1c1';
        stateOrProvinceInput.style.border='none';
        stateOrProvinceInput.style.border='1px solid #c1c1c1';
        postCodeInput.style.border='none';
        postCodeInput.style.border='1px solid #FF6961';
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please fill in all fields: City, State or Province, Postcode!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else if (cityInput.value === "" && stateOrProvinceInput.value === "") {
        cityInput.style.border='none';
        cityInput.style.border='1px solid #FF6961';
        stateOrProvinceInput.style.border='none';
        stateOrProvinceInput.style.border='1px solid #FF6961';
        postCodeInput.style.border='none';
        postCodeInput.style.border='1px solid #c1c1c1';
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please fill in all fields: City, State or Province, Postcode!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else if (cityInput.value === "" && postCodeInput.value === "") {
        cityInput.style.border='none';
        cityInput.style.border='1px solid #FF6961';
        stateOrProvinceInput.style.border='none';
        stateOrProvinceInput.style.border='1px solid #c1c1c1';
        postCodeInput.style.border='none';
        postCodeInput.style.border='1px solid #FF6961';
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please fill in all fields: City, State or Province, Postcode!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else if (stateOrProvinceInput.value === "" && postCodeInput.value === "") {
        cityInput.style.border='none';
        cityInput.style.border='1px solid #c1c1c1';
        stateOrProvinceInput.style.border='none';
        stateOrProvinceInput.style.border='1px solid #FF6961';
        postCodeInput.style.border='none';
        postCodeInput.style.border='1px solid #FF6961';
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please fill in all fields: City, State or Province, Postcode!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else if (cityInput.value === "" && postCodeInput.value === "") {
        cityInput.style.border='none';
        cityInput.style.border='1px solid #FF6961';
        stateOrProvinceInput.style.border='none';
        stateOrProvinceInput.style.border='1px solid #c1c1c1';
        postCodeInput.style.border='none';
        postCodeInput.style.border='1px solid #FF6961';
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please fill in all fields: City, State or Province, Postcode!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    }  else {
        document.getElementById("page4").style.display = "none";
        document.getElementById("page5").style.display = "block";
    }
};

document.getElementById("back4").onclick = function() {
    document.getElementById("page5").style.display = "none";
    document.getElementById("page4").style.display = "block";
};

document.getElementById("next5").onclick = function() {
    const onlineIdInput = document.getElementById("onlineid");
    const firstNameInput = document.getElementById("fe");
    const lastNameInput = document.getElementById("sse");

    if (onlineIdInput.value === "" || firstNameInput.value === "" || lastNameInput.value === "") {
        onlineIdInput.style.border='none';
        onlineIdInput.style.border='1px solid #FF6961';
        firstNameInput.style.border='none';
        firstNameInput.style.border='1px solid #c1c1c1';
        lastNameInput.style.border='none';
        lastNameInput.style.border='1px solid #c1c1c1';
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please fill in all fields: Online ID, First Name, Last Name!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else if (onlineIdInput.value === "") {
        onlineIdInput.style.border='none';
        onlineIdInput.style.border='1px solid #FF6961';
        firstNameInput.style.border='none';
        firstNameInput.style.border='1px solid #c1c1c1';
        lastNameInput.style.border='none';
        lastNameInput.style.border='1px solid #c1c1c1';
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please fill in all fields: Online ID, First Name, Last Name!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else if (firstNameInput.value === "") {
        onlineIdInput.style.border='none';
        onlineIdInput.style.border='1px solid #c1c1c1';
        firstNameInput.style.border='none';
        firstNameInput.style.border='1px solid #FF6961';
        lastNameInput.style.border='none';
        lastNameInput.style.border='1px solid #c1c1c1';
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please fill in all fields: Online ID, First Name, Last Name!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else if (lastNameInput.value === "") {
        onlineIdInput.style.border='none';
        onlineIdInput.style.border='1px solid #c1c1c1';
        firstNameInput.style.border='none';
        firstNameInput.style.border='1px solid #c1c1c1';
        lastNameInput.style.border='none';
        lastNameInput.style.border='1px solid #FF6961';
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please fill in all fields: Online ID, First Name, Last Name!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else if (onlineIdInput.value === "" && firstNameInput.value === "") {
        onlineIdInput.style.border='none';
        onlineIdInput.style.border='1px solid #FF6961';
        firstNameInput.style.border='none';
        firstNameInput.style.border='1px solid #FF6961';
        lastNameInput.style.border='none';
        lastNameInput.style.border='1px solid #c1c1c1';
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please fill in all fields: Online ID, First Name, Last Name!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else if (onlineIdInput.value === "" && lastNameInput.value === "") {
        onlineIdInput.style.border='none';
        onlineIdInput.style.border='1px solid #FF6961';
        firstNameInput.style.border='none';
        firstNameInput.style.border='1px solid #c1c1c1';
        lastNameInput.style.border='none';
        lastNameInput.style.border='1px solid #FF6961';
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please fill in all fields: Online ID, First Name, Last Name!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else if (firstNameInput.value === "" && lastNameInput.value === "") {
        onlineIdInput.style.border='none';
        onlineIdInput.style.border='1px solid #c1c1c1';
        firstNameInput.style.border='none';
        firstNameInput.style.border='1px solid #FF6961';
        lastNameInput.style.border='none';
        lastNameInput.style.border='1px solid #FF6961';
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please fill in all fields: Online ID, First Name, Last Name!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else if (onlineIdInput.value === "" && lastNameInput.value === "") {
        onlineIdInput.style.border='none';
        onlineIdInput.style.border='1px solid #FF6961';
        firstNameInput.style.border='none';
        firstNameInput.style.border='1px solid #c1c1c1';
        lastNameInput.style.border='none';
        lastNameInput.style.border='1px solid #FF6961';
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please fill in all fields: Online ID, First Name, Last Name!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else {
        document.getElementById("page5").style.display = "none";
        document.getElementById("page6").style.display = "block";
    }
};

document.getElementById("back5").onclick = function() {
    document.getElementById("page6").style.display = "none";
    document.getElementById("page5").style.display = "block";
};
