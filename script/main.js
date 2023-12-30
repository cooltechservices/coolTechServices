const actionMenuToggle = document.getElementById("menuToggle");
const menuList = document.getElementById("menuList");
const header = document.getElementById("header");
const servicesCardList = document.getElementById("service-card-list");
const salesCardList = document.getElementById("sales-card-list");
const whyChooseUsList = document.getElementById("why-choose-us-list");
const pageServices = document.getElementById("blog-services");
const pageSales = document.getElementById("blog-sales");
import { salesAndServiceData } from "../assets/data/salesAndServices.js";
import { whyChooseUs } from "../assets/data/whyChooseUs.js";

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
if (servicesCardList) {
  salesAndServiceData.services.forEach((data) => {
    const servicesCard = document.createElement("div");
    servicesCard.innerHTML = `
    <div class="app-card">
      <div class="app-card__img">
        <img src=${data.image} width="100%" height="100%" alt=${data.service}>
      </div>
      <div>
        <h5>${data.service}</h5>
        <article class="app-card__desc">
        ${data.serviceDesc}
        </article>
      </div>
      <a href=${data.action} class="app-card__btn app-card__btn-service">View in detail</a>
    </div>
    `;
    servicesCardList.appendChild(servicesCard);
  });
}

if (salesCardList) {
  salesAndServiceData.sales.forEach((data) => {
    const salesCard = document.createElement("div");
    salesCard.innerHTML = `
    <div class="app-card">
      <div class="app-card__img">
        <img src=${data.image} width="100%" height="100%" alt=${data.product}>
      </div>
      <div>
        <h5>${data.product}</h5>
        <article class="app-card__desc">
        ${data.productDesc}
        </article>
      </div>
      <a href=${data.action} class="app-card__btn app-card__btn-sales">View in detail</a>
    </div>
    `;
    salesCardList.appendChild(salesCard);
  });
}
if (whyChooseUsList) {
  whyChooseUs.lists.forEach((data) => {
    const whyChooseUsEle = document.createElement("div");
    whyChooseUsEle.innerHTML = `
      <div class="choose-us-item">
        <div class="choose-us-item__icon">
          <img src="${data.icon}" alt="${data.title}" width="100%" height="100%">
        </div>
        <div class="choose-us-item__content">
          <h5 class="choose-us-item__heading">${data.title}</h5>
          <article class="choose-us-item__desc">
            ${data.content}
          </article>
        </div>
      </div>
    `;
    whyChooseUsList.appendChild(whyChooseUsEle);
  });
}

if (pageSales) {
  salesAndServiceData.sales.forEach((data) => {
    const salesPage = document.createElement("section");
    salesPage.classList.add("page-top-offset");
    salesPage.id = data.navigatorId;
    salesPage.innerHTML = `
    <div class="container">
    <div class="services-sales">
      <div class="services-sales__short">
        <div class="services-sales__title-desc">
          <h2>${data.product}</h2>
          <p>
            ${data.productDesc}
          </p>
        </div>
        <div class="services-sales__img">
          <img
            src="${data.orgImg}"
            alt=""
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div class="services-sales__detail">
        <p>
         ${data.productLonDesc}
        </p>
      </div>
    </div>
  </div>
    `;
    pageSales.appendChild(salesPage);
  });
}

if (pageServices) {
  salesAndServiceData.services.forEach((data) => {
    const servicesPage = document.createElement("section");
    servicesPage.classList.add("page-top-offset");
    servicesPage.id = data.navigatorId;
    servicesPage.innerHTML = `
    <div class="container">
    <div class="services-sales">
      <div class="services-sales__short">
        <div class="services-sales__title-desc">
          <h2>${data.service}</h2>
          <p>
            ${data.serviceDesc}
          </p>
        </div>
        <div class="services-sales__img">
          <img
            src="${data.orgImg}"
            alt=""
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div class="services-sales__detail">
        <p>
         ${data.serviceLonDesc}
        </p>
      </div>
    </div>
  </div>
    `;
    pageServices.appendChild(servicesPage);
  });
}
// ****user actions**** //
// on scroll set header color background
window.addEventListener("scroll", handleScroll);

//on menu toggle
actionMenuToggle.addEventListener("click", menuToggle);
