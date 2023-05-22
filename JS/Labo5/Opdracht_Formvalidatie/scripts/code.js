const setup = () => {

    const btnValidation = document.getElementById("btnValidation");
    btnValidation.addEventListener('click', validateForm)
}

function validateForm() {
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const birthDate = document.getElementById("birthDate");
    const email = document.getElementById("email");
    const kids = document.getElementById("kids");

    if (firstName.value.length > 30) {
        alert("First name should be less than 30 characters");
        return false;
    }

    if (lastName.value.length === 0) {
        alert("Last name can't be empty");
        return false;
    }

    if (!isValidDate(birthDate)) {
        alert("Birth date should be in ISO format (yyyy-mm-dd)");
        return false;
    }

    if (!isValidEmail(email)) {
        alert("Email should be in the format of example@example.com");
        return false;
    }

    if (kids.value < 0 || kids.value >= 99) {
        alert("Kids amount should be a positive number less than 99");
        return false;
    }

    return true;
}

function isValidDate(dateString) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) return false;

    const year = dateString.substring(0, 4);
    const month = dateString.substring(5, 7);
    const day = dateString.substring(8, 10);

    let date = new Date(year, month - 1, day);

    return (
        date.getFullYear() === year &&
        date.getMonth() + 1 === month &&
        date.getDate() === day
    );
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
window.addEventListener("load", setup);