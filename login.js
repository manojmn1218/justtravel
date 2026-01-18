// -------------------- TOGGLE FORMS --------------------
function showSignup() {
    document.getElementById("login-form").classList.add("hidden");
    document.getElementById("signup-form").classList.remove("hidden");
    document.getElementById("form-title").innerText = "Sign Up";
}

function showLogin() {
    document.getElementById("signup-form").classList.add("hidden");
    document.getElementById("login-form").classList.remove("hidden");
    document.getElementById("form-title").innerText = "Login";
}

// -------------------- GET USERS --------------------
function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

// -------------------- SAVE USERS --------------------
function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

// -------------------- SIGNUP --------------------
document.querySelector(".signup-btn").addEventListener("click", function (e) {
    e.preventDefault();

    const name = document.querySelector(".signup-name").value.trim();
    const email = document.querySelector(".signup-email").value.trim();
    const password = document.querySelector(".signup-password").value.trim();

    if (!name || !email || !password) {
        alert("All fields are required");
        return;
    }

    let users = getUsers();

    if (users.some(user => user.email === email)) {
        alert("User already exists");
        return;
    }

    // ✅ ADMIN EMAIL DEFINITION
    const ADMIN_EMAIL = "admin@travel.com";
    const role = email === ADMIN_EMAIL ? "admin" : "user";

    users.push({ name, email, password, role });
    saveUsers(users);

    alert("Signup successful");
    showLogin();
});

// -------------------- LOGIN --------------------
document.querySelector(".login-btn").addEventListener("click", function (e) {
    e.preventDefault();

    const email = document.querySelector(".login-email").value.trim();
    const password = document.querySelector(".login-password").value.trim();

    const users = getUsers();

    const user = users.find(
        u => u.email === email && u.password === password
    );

    if (!user) {
        alert("Invalid credentials");
        return;
    }

    // ✅ SAVE LOGGED IN USER
    localStorage.setItem("loggedInUser", JSON.stringify(user));

    // ✅ ROLE BASED REDIRECT
    if (user.role === "admin") {
        window.location.href = "admin.html";
    } else {
        window.location.href = "travel.html";
    }
});

// -------------------- LOGOUT --------------------
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
