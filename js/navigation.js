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
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please select your date of birth!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else {
        document.getElementById("page2").style.display = "none";
        document.getElementById("page3").style.display = "block";
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
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please fill in all fields: Email, Password, and Re-enter Password!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else if (passwordInput.value!=rePasswordInput.value) {
        Swal.fire({
            icon: 'error',
            title: 'Passwords don\'t match',
            text: 'Please ensure both fields contain the same password!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else if (!emailPattern.test(emailInput.value)) {
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
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Please fill in all fields: City, State or Province, Postcode!',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    } else {
        document.getElementById("page4").style.display = "none";
        document.getElementById("page5").style.display = "block";
    }
};

document.getElementById("back4").onclick = function() {
    document.getElementById("page5").style.display = "none";
    document.getElementById("page4").style.display = "block";
};