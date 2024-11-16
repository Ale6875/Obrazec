document.getElementById("emaill").addEventListener("input", function () {
    if (this.value !== "" && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(this.value)) {
        this.style.border = "";
    }
});

document.getElementById("see").addEventListener("input", function () {
    if (this.value !== "") {
        this.style.border = "";
    }
});

document.getElementById("country").addEventListener("input", function () {
    if (this.value !== "") {
        this.style.border = "";
    }
});

document.getElementById("month").addEventListener("input", function () {
    if (this.value !== "") {
        this.style.border = "";
    }
});

document.getElementById("day").addEventListener("input", function () {
    if (this.value !== "") {
        this.style.border = "";
    }
});

document.getElementById("year").addEventListener("input", function () {
    if (this.value !== "") {
        this.style.border = "";
    }
});

document.getElementById("email").addEventListener("input", function () {
    if (this.value !== "" && /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(this.value)) {
        this.style.border = "";
    }
});

document.getElementById("se").addEventListener("input", checkPasswordsMatch);
document.getElementById("re").addEventListener("input", checkPasswordsMatch);

function checkPasswordsMatch() {
    const passwordInput = document.getElementById("se");
    const rePasswordInput = document.getElementById("re");

    if (passwordInput.value === rePasswordInput.value) {
        passwordInput.style.border = "";
        rePasswordInput.style.border = "";
    }
}

document.getElementById("ci").addEventListener("input", function () {
    if (this.value !== "") {
        this.style.border = "";
    }
});

document.getElementById("storpr").addEventListener("input", function () {
    if (this.value !== "") {
        this.style.border = "";
    }
});

document.getElementById("po").addEventListener("input", function () {
    if (this.value !== "") {
        this.style.border = "";
    }
});

document.getElementById('onlineid').addEventListener('input', function () {
    this.style.borderColor = '';
});

document.getElementById('fe').addEventListener('input', function () {
    this.style.borderColor = '';
});

document.getElementById('sse').addEventListener('input', function () {
    this.style.borderColor = '';
});

document.querySelectorAll('.ran').forEach(div => {
    div.addEventListener('click', function () {
        document.querySelectorAll('#oid input').forEach(input => {
            input.style.borderColor = '';
        });
    });
});