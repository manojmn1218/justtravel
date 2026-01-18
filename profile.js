const user = JSON.parse(localStorage.getItem("loggedInUser"));

if (!user) {
    window.location.href = "login.html";
}

// Elements
const profileLetter = document.getElementById("profileLetter");
const profileImg = document.getElementById("profileImg");

document.getElementById("displayName").innerText = user.name;
document.getElementById("displayRole").innerText = user.role.toUpperCase();

document.getElementById("name").value = user.name;
document.getElementById("email").value = user.email;
document.getElementById("phone").value = user.phone || "";
document.getElementById("address").value = user.address || "";

// Profile picture logic
if (user.profilePic) {
    profileImg.src = user.profilePic;
    profileImg.style.display = "block";
    profileLetter.style.display = "none";
} else {
    profileLetter.innerText = user.name.charAt(0).toUpperCase();
}

// Upload
function openUpload() {
    document.getElementById("uploadPic").click();
}

function uploadImage(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function () {
        profileImg.src = reader.result;
        profileImg.style.display = "block";
        profileLetter.style.display = "none";

        user.profilePic = reader.result;
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        updateUserList();
    };
    reader.readAsDataURL(file);
}

// Save profile
function saveProfile() {
    user.name = document.getElementById("name").value;
    user.phone = document.getElementById("phone").value;
    user.address = document.getElementById("address").value;

    localStorage.setItem("loggedInUser", JSON.stringify(user));
    updateUserList();

    alert("Profile updated successfully");
}

// Sync with users list
function updateUserList() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users = users.map(u => u.email === user.email ? user : u);
    localStorage.setItem("users", JSON.stringify(users));
}
function back() {
    window.location.href = "travel.html";
}
// Logout
function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "login.html";
}
