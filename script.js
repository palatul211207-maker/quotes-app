const auth = firebase.auth();

function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(() => alert("Registered Successfully"))
    .catch(err => alert(err.message));
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => alert("Login Successful"))
    .catch(err => alert(err.message));
}

function logout() {
  auth.signOut();
}

function showApp() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("quoteBox").style.display = "block";
}

auth.onAuthStateChanged(user => {
  if (user) showApp();
});

const quotes = [
  "Success comes to those who work hard.",
  "Never give up.",
  "Believe in yourself.",
  "Dream big and dare to fail."
];

function newQuote() {
  document.getElementById("quote").innerText =
    quotes[Math.floor(Math.random() * quotes.length)];
}
