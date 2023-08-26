function registerUser() {
    const firstName = document.querySelector("#first-name").value;
    const lastName = document.querySelector("#last-name").value;
    const email = document.querySelector("#email-input").value;

    if (firstName && lastName && email) {
        const message = "Thanks for registration!";
        alert(message);
    } else {
        alert("Please fill out all fields.");
    }
}
