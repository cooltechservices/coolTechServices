const actionMenuToggle = document.getElementById("menuToggle");
const menuList = document.getElementById("menuList");
const header = document.getElementById("header");

//methods
const menuToggle = () => {
  if (menuList.classList.contains("active")) {
    menuList.classList.remove("active");
    actionMenuToggle.textContent = "menu";
  } else {
    menuList.classList.add("active");
    actionMenuToggle.textContent = "close";
    header.classList.add("header-background");
  }
};

const handleScroll = () => {
  if (window.scrollY > 0) {
    header.classList.add("header-background");
  } else {
    if (actionMenuToggle.textContent === "close") {
      header.classList.add("header-background");
    } else {
      header.classList.remove("header-background");
    }
  }
};

// ****user actions**** //
// on scroll set header color background
window.addEventListener("scroll", handleScroll);

//on menu toggle
actionMenuToggle.addEventListener("click", menuToggle);
