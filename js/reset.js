window.onload = function() {
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

    document.getElementById("next6").onclick = function() {
        Swal.fire({
            icon: 'success',
            title: 'Account Created!',
            text: 'Your account has been created successfully.',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                document.getElementById("page6").style.display = "none";
                document.getElementById("page").style.display = "block";
                
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
    };
};
