// ✅ Load saved data from localStorage or use default fallback
const userDatabase = JSON.parse(localStorage.getItem("userDatabase")) || {
  "admin": "admin123",
  "jitu": "jitu123"
};

const EmailDatabase = JSON.parse(localStorage.getItem("EmailDatabase")) || {
  "admin": "Kalitajitumoni19@gmail.com",
  "jitu": "jitu@gmail.com"
};

console.log(userDatabase);

// ✅ DOM Ready
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const forgotForm = document.getElementById("forgotForm");

  // ✅ LOGIN Handler
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;

      if (userDatabase[username] && userDatabase[username] === password) {
        alert("✅ Login successful!");
        localStorage.setItem("loggedInUser", username);
        window.location.href = "dashboard.html";
      } else {
        alert("❌ Invalid username or password.");
      }
    });
  }

  // ✅ FORGOT PASSWORD Handler
  if (forgotForm) {
    forgotForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("forgotUsername").value.trim();
      const email = document.getElementById("confirmEmail").value.trim();

      if (EmailDatabase[username] && EmailDatabase[username] === email) {
        const otp = Math.floor(Math.random() * 9000) + 1000;
        alert("Your OTP is: " + otp + " (please copy it)");
        console.log("Generated OTP:", otp);

        localStorage.setItem("generatedOTP", otp);
        localStorage.setItem("loggedInUser", username);

        window.location.href = "otp.html";
      } else {
        alert("❌ Invalid username or email.");
      }
    });
  }
});

// ✅ Global login function (can be reused anywhere)
function login(username, password) {
  const userDatabase = JSON.parse(localStorage.getItem("userDatabase")) || {};
  if (userDatabase[username] === password) {
    localStorage.setItem("loggedInUser", username);
    window.location.href = "otp.html";
  } else {
    alert("❌ Invalid credentials");
  }
}


