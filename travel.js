// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    // NAVBAR LINKS
    document.querySelector("a[href='#']:nth-child(1)").onclick = () => {
        window.location.href = "explore.html";
    };

    document.querySelector("a[href='#']:nth-child(2)").onclick = () => {
        window.location.href = "deals.html";
    };

    document.querySelector("a[href='#']:nth-child(3)").onclick = () => {
        window.location.href = "support.html";
    };

    document.querySelector("a[href='#']:nth-child(4)").onclick = () => {
        window.location.href = "bookinghistory.html";
    };

    // PROFILE BUTTON
    document.querySelector(".primary-btn").onclick = () => {
        window.location.href = "profile.html";
    };
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

const profileLetter = document.getElementById("profileLetter");
const profileImg = document.getElementById("profileImg");

// Load profile on page load
if (loggedUser) {
    if (loggedUser.profilePic) {
        profileImg.src = loggedUser.profilePic;
        profileImg.style.display = "block";
        profileLetter.style.display = "none";
    } else {
        profileLetter.innerText = loggedUser.name.charAt(0);
    }
}

// Open file picker
function openUpload() {
    document.getElementById("profileUpload").click();
}

// Upload & save image
function uploadProfile(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function () {
        profileImg.src = reader.result;
        profileImg.style.display = "block";
        profileLetter.style.display = "none";

        // Save to localStorage
        loggedUser.profilePic = reader.result;
        localStorage.setItem("loggedInUser", JSON.stringify(loggedUser));
    };
    reader.readAsDataURL(file);
}


    // SEARCH BUTTON
    document.querySelector(".search button").onclick = () => {
        window.location.href = "deals.html";
    };

    // TRAVEL MOOD BUTTONS
    document.querySelectorAll(".card button")[0].onclick = () => {
        window.location.href = "explore.html";
    };

    document.querySelectorAll(".card button")[1].onclick = () => {
        window.location.href = "explore.html";
    };

    document.querySelectorAll(".card button")[2].onclick = () => {
        window.location.href = "explore.html";
    };

    // DEAL CARDS
    document.querySelectorAll(".deal-card button")[0].onclick = () => {
        window.location.href = "deals.html";
    };

    document.querySelectorAll(".deal-card button")[1].onclick = () => {
        window.location.href = "deals.html";
    };

    document.querySelectorAll(".deal-card button")[2].onclick = () => {
        window.location.href = "deals.html";
    };
});


