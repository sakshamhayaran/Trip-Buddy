document.querySelector("#contact_form").addEventListener("submit", function () {
    let phoneNumber = document.querySelector('#phone').value;
    if (phoneNumber.length !== 10 || isNaN(phoneNumber))
    {
        alert("!! Enter valid phone number !!");
        return false;   // prevent form submission
    }
    alert("We will Contact you soon !");
    return false;   // prevent form submission since we're redirecting manually
});
