const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener("click", showLinks);

function showLinks() {
    let navigationList = document.querySelector(".navigation__list-box");
    if (navigationList.style.display === "block") {
        navigationList.style.display = "none";
    } else {
        navigationList.style.display = "block";
    }
}