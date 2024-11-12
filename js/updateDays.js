function updateDays() {
    const monthSelect = document.getElementById("month");
    const daySelect = document.getElementById("day");
    const selectedMonth = parseInt(monthSelect.value);
        
    daySelect.innerHTML = '<option value="">Day</option>';

    if (selectedMonth) {
        let daysInMonth;

        if (selectedMonth === 2) {
            const year = new Date().getFullYear();
            daysInMonth = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
        } else if ([4, 6, 9, 11].includes(selectedMonth)) {
            daysInMonth = 30;
        } else {
            daysInMonth = 31;
        }

        for (let day = 1; day <= daysInMonth; day++) {
            daySelect.innerHTML += `<option value="${day}">${day}</option>`;
        }
    }
}
