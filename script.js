const auth = firebase.auth();

function register() {
  const email = email.value;
  const password = password.value;
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => alert("Registered"))
    .catch(e => alert(e.message));
}

function login() {
  auth.signInWithEmailAndPassword(email.value, password.value)
    .catch(e => alert(e.message));
}

function logout() {
  auth.signOut();
}

auth.onAuthStateChanged(user => {
  if (user) {
    loginBox.style.display = "none";
    quoteBox.style.display = "block";
  }
});

const quotes = [
  "Success comes to those who work hard",
  "Never give up",
  "Believe in yourself",
  "Dream big"
];

function newQuote() {
  quote.innerText = quotes[Math.floor(Math.random() * quotes.length)];
}
