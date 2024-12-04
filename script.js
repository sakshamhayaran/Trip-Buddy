//let count=0;
//document.querySelector("#bar").addEventListener("click", () => {
//    count++;
//    if(count%2 != 0) { document.querySelector("#navoptions_mini").style.display = "flex"; }
//    else  { document.querySelector("#navoptions_mini").style.display = "none"; } }
//);

//Condition for checking valid phone number and alert message
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
