// Quotes data
const quotes = [
    "Success comes to those who work hard.",
    "Never give up.",
    "Believe in yourself.",
    "Dream big and stay focused.",
    "Hard work always pays off.",
    "Stay positive and strong.",
    "Your future depends on what you do today."
];

// Quote function
function newQuote() {
    const random = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[random];
}

// Firebase OTP setup
window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    'recaptcha-container',
    { size: 'invisible' }
);

function sendOTP() {
    var phoneNumber = document.getElementById("phone").value;

    firebase.auth().signInWithPhoneNumber(phoneNumber, window.recaptchaVerifier)
        .then(function (confirmationResult) {
            window.confirmationResult = confirmationResult;
            alert("OTP Sent");
        })
        .catch(function (error) {
            alert(error.message);
        });
}

function verifyOTP() {
    var code = document.getElementById("otp").value;

    confirmationResult.confirm(code)
        .then(function (result) {
            alert("Login Successful 🎉");
            document.getElementById("loginBox").style.display = "none";
            document.getElementById("quoteBox").style.display = "block";
            newQuote();
        })
        .catch(function (error) {
            alert("Wrong OTP");
        });
}
