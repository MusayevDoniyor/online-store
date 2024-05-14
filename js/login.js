// *
const usernameInput = document.getElementsByName("username")[0];
const passwordInput = document.getElementsByName("password")[0];
const form = document.querySelector("form");
const loginBtn = document.querySelector(".buttonSubmit");

let username, password;

init();

// function toggleButton() {
//   if (username && password) {
//     loginBtn.disabled = false;
//   } else {
//     loginBtn.disabled.true;
//   }
// }

function init() {
  redirect();
  // loginBtn.disabled = true;

  usernameInput.oninput = function (event) {
    username = event.target.value.trim();

    // toggleButton();
  };

  passwordInput.oninput = function (event) {
    password = event.target.value.trim();

    // toggleButton();
  };

  form.onsubmit = async function (event) {
    event.preventDefault();
    console.log(username);

    const result = await login();

    saveToken(result.token);
    redirect();
  };
}

async function login() {
  const response = await fetch("https://fakestoreapi.com/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const result = await response.json();
  return result;
}

function saveToken(token) {
  localStorage.setItem("token", token);
}

function redirect() {
  const token = localStorage.getItem("token");

  if (token) {
    window.location.replace("http://127.0.0.1:5501/index.html");
  }
}
