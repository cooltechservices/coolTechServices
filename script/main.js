const actionMenuToggle = document.getElementById("menuToggle");
const menuList = document.getElementById("menuList");
const header = document.getElementById("header");
const servicesCardList = document.getElementById("service-card-list");
const salesCardList = document.getElementById("sales-card-list");
const whyChooseUsList = document.getElementById("why-choose-us-list");
const pageServices = document.getElementById("blog-services");
const pageSales = document.getElementById("blog-sales");
const footer = document.getElementById("footer");
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

footer.innerHTML = `
<div class="container">
  <h2 class="text-center section-heading">Get In Touch</h2>
  <h4 class="text-center">Cool Tech Services is here for you.</h4>
  <p class="text-center mb-5">
    Explore our services and products or reach out to us directly for
    personalized assistance.
  </p>
  <div class="get-in-touch">
    <div class="store-location">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3890.4413196871137!2d79.73140307507377!3d12.814733987486393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDQ4JzUzLjAiTiA3OcKwNDQnMDIuMyJF!5e0!3m2!1sen!2sin!4v1703011189994!5m2!1sen!2sin"
        width="100%"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
       referrerpolicy="no-referrer-when-downgrade"
     ></iframe>
   </div>
   <div>
    <address class="shop-address">
      <h5>Cool Tech Service</h5>
      <p>No:45/318,</p>
      <p>Varadhappa nagar,</p>
      <p>Periya thottam, Little kanchipuram</p>
      <p>Tamil nadu - 631501</p>
      <div>
        <div class="d-inline-flex">
          <span
            class="material-symbols-outlined contact-icon c-pointer mr-2"
            >call</span
          >
          <span
            ><a href="tel:91+9944217027"><span>9944217027</span></a
            >,<a href="tel:91+9655594799"
              ><span>9655594799</span></a
            ></span
          >
        </div>
      </div>
      <div>
        <a
          class="d-inline-flex"
          href="mailtocooltechservices31@gmail.com"
          ><span
            class="material-symbols-outlined contact-icon c-pointer mr-2"
            >email</span
          ><span>cooltechservices31@gmail.com</span></a
        >
      </div>
    </address>
    <div class="social-media">
      <a
        href="https://www.instagram.com/cooltechservices2023?igsh=MXRxa3U3cHJ6ZzNzdA=="
        class="social-link"
        target="_blank"
        ><img
          src="./assets/images/social/instagram.png"
          alt="Cool Tech Services Instagram"
          width="100%"
          height="100%"
      /></a>
      <a
        href="https://www.facebook.com/cooltechservices.2023?mibextid=hIlR13"
        class="social-link"
        target="_blank"
        ><img
          src="./assets/images/social/facebook.png"
          alt="Cool Tech Services Facebook"
          width="100%"
          height="100%"
      /></a>
      <a
        href="https://www.youtube.com/channel/UCPRMCnvrWkAwk5y-XCL9pDQ "
        class="social-link"
        target="_blank"
        ><img
          src="./assets/images/social/youtube.png"
          alt="Cool Tech Services Youtube"
          width="100%"
          height="100%"
      /></a>
      <a
        href="https://twitter.com/CoolTech2023"
        class="social-link"
        target="_blank"
        ><img
          src="./assets/images/social/twitter.png"
          alt="Cool Tech Services Twitter"
          width="100%"
          height="100%"
      /></a>
    </div>
  </div>
</div>
<div class="text-center">
  <p class="mb-2">© Copyright-2024 Cool Tech Services</p>
  <p class="m-0">All Rights Reserved</p>
</div>
</div>
<div class="whatsapp social-link-float">
<a href="https://wa.me/9944217027" class="social-link"
  ><img
    src="./assets/images/social/whatsapp.png"
    alt="Cool Tech Services Instagram"
    width="100%"
    height="100%"
/></a>
</div>
<div class="phone social-link-float">
<a href="tel:91+9944217027" class="social-link"
  ><img
    src="./assets/images/social/telephone.png"
    alt="Cool Tech Services Instagram"
    width="100%"
    height="100%"
/></a>
</div>`;
