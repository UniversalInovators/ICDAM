// loader
document.querySelector("body").style.cssText = "visibility: hidden;";
document.querySelector("#loader").style.cssText = "visibility: visible; opacity: 1";
document.querySelector(".main_header").style.cssText = "visibility: hidden; opacity: 0";
document.querySelector(".sidebar_container").style.cssText = "visibility: hidden; opacity: 0";
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").removeAttribute("style");
    document.querySelector(".main_header").removeAttribute("style")
    document.querySelector(".sidebar_container").style.cssText =
      `-webkit-transition: 0.7s ease; 
      -moz-transition: 0.7s ease; 
      transition: 0.7s ease; 
      -o-transition: 0.7s ease;`
  }, 1000)
})
// sidebar-toggles
let toggle_forward = document.querySelector(".sidebar_toggler");
let toggle_forward_mobile = document.querySelector(".sidebar_toggler-mobile");
let toggle_back = document.querySelector(".toggle_sidebar_close");
let sidebar = document.querySelector(".sidebar_container");
toggle_forward.onclick = () =>
(sidebar.style.cssText =
  `-ms-transform: translateX(0%);
  -o-transform: translateX(0%);
  -moz-transform: translateX(0%);
  -webkit-transform: translateX(0%);
  transform: translateX(0%);
  -webkit-transition: 0.7s ease; 
  -moz-transition: 0.7s ease; 
  transition: 0.7s ease; 
  -o-transition: 0.7s ease;`);
toggle_forward_mobile.onclick = () =>
(sidebar.style.cssText =
  `-ms-transform: translateX(0%);
  -o-transform: translateX(0%);
  -moz-transform: translateX(0%);
  -webkit-transform: translateX(0%);
  transform: translateX(0%);
  -webkit-transition: 0.7s ease; 
  -moz-transition: 0.7s ease; 
  transition: 0.7s ease; 
  -o-transition: 0.7s ease;`);
toggle_back.onclick = () => sidebar.style.cssText =
  `-webkit-transition: 0.7s ease; 
-moz-transition: 0.7s ease; 
transition: 0.7s ease; 
-o-transition: 0.7s ease;`;

let pageparams = window.location.pathname;
pageparams = pageparams.split("/")[1];
let links = document.querySelectorAll(".link_container ul a li");
pageparams = pageparams.toString();

switch (pageparams) {
  case "about":
    changeactivelink(links[1]);
    break;
  case "papers":
    changeactivelink(links[2]);
    break;
  case "special-sessions":
    changeactivelink(links[3]);
    break;
  case "registrations":
    changeactivelink(links[4]);
    break;
  case "sponsorship":
    changeactivelink(links[5]);
    break;
  case "publication":
    changeactivelink(links[6]);
    break;
  case "committe":
    changeactivelink(links[7]);
    break;
  case "conference-venue":
    changeactivelink(links[8]);
    break;
  case "downloads":
    changeactivelink(links[9]);
    break;
  case "previous-conference":
    changeactivelink(links[10]);
    break;
  case "":
    changeactivelink(links[0]);
    break;
}

function changeactivelink(link) {
  links.forEach((ele) => {
    ele.removeAttribute("class");
  });
  link.classList.add("active");
}

// slider
if (pageparams == "") {
  document.querySelector(".home_component").style.cssText = "visibility: hidden; opacity: 0";
  document.addEventListener("DOMContentLoaded", () => { setTimeout(() => { document.querySelector(".home_component").removeAttribute("style") }, 1000) })
  function changeactiveItem() {
    let activeobj;
    let slider_con = document.querySelector(".slider_component");
    let carousel_items = [...slider_con.children];
    for (let i = 0; i < carousel_items.length; i++) {
      if (carousel_items[i].classList.contains("active-citem")) {
        activeobj = carousel_items[i];
        break;
      }
    }

    activeobj.classList.replace("active-citem", "inactive-citem");
    if (activeobj.nextElementSibling) {
      activeobj.nextElementSibling.classList.replace(
        "inactive-citem",
        "active-citem"
      );
    } else {
      carousel_items[0].classList.replace("inactive-citem", "active-citem");
    }
  }

  setInterval(function () {
    changeactiveItem();
  }, 6000);

  // partner control
  let partner_con = document.querySelector(".partner_container");
  function partnercontrol(x) {
    let scroll_part = document.querySelectorAll(".scroll_partner button");
    scroll_part.forEach((ele) => {
      ele.classList.remove("activeview");
    });
    x.classList.add("activeview");
    let vector = x.classList[0];
    if (vector == "scroll-left") {
      partner_con.scrollLeft = 0;
    } else {
      partner_con.scrollLeft = 1000;
    }
  }
}

// about section
if (pageparams == "about") {
  document.querySelector(".about_component").style.cssText = "visibility: hidden; opacity: 0";
  document.addEventListener("DOMContentLoaded", () => { setTimeout(() => { document.querySelector(".about_component").removeAttribute("style") }, 1000) })
  let togglers = document.querySelectorAll(".about_uni");
  let aboutItem = document.querySelectorAll(".about_item");
  togglers.forEach((ele, ind) => {
    ele.addEventListener("click", function () {
      togglers.forEach((elem) => {
        elem.classList.remove("activeitem");
      })
      ele.classList.add("activeitem")
      aboutItem.forEach((elem) => {
        elem.classList.replace("activeabitem", "inactiveabitem")
      })
      aboutItem[ind].classList.replace("inactiveabitem", "activeabitem")
    })
  })
}

// Paper Section
if (pageparams == "papers") {
  document.querySelector(".papers_component").style.cssText = "visibility: hidden; opacity: 0";
  document.addEventListener("DOMContentLoaded", () => { setTimeout(() => { document.querySelector(".papers_component").removeAttribute("style") }, 1000) })
  let poption = document.querySelectorAll(".poption");
  let paper_data = document.querySelectorAll(".paper_data");
  if (localStorage.getItem("active-link")) {
    for (let i = 0; i < poption.length; i++) {
      if (poption[i].innerHTML == localStorage.getItem("active-link")) {
        changepapers(poption[i]);
        paper_data[i].classList.remove("data-inactive");
      }
    }
  }

  for (let i = 0; i < poption.length; i++) {
    poption[i].addEventListener("click", function () {
      changepapers(poption[i]);
      paper_data[i].classList.remove("data-inactive");
    });
  }

  function changepapers(selop) {
    let poptionscoped = document.querySelectorAll(".poption");
    let paper_datascoped = document.querySelectorAll(".paper_data");
    poptionscoped.forEach((ele) => {
      ele.classList.remove("pactive");
    });
    paper_datascoped.forEach((ele) => {
      ele.classList.add("data-inactive");
    });
    selop.classList.add("pactive");
    localStorage.setItem("active-link", selop.innerHTML);
  }
}

// Registration section
if (pageparams == "registrations") {
  // document.querySelector(".registration_container").style.cssText = "visibility: hidden; opacity: 0";
  // document.addEventListener("DOMContentLoaded", () => { setTimeout(() => { document.querySelector(".registration_container").removeAttribute("style") }, 1000) })
  // let targetString = document.querySelector(".ml6 .letters");
  // targetString.innerHTML = targetString.textContent.replace(
  //   /\S/g,
  //   "<span class='letter'>$&</span>"
  // );

  // anime
  //   .timeline({ loop: true })
  //   .add({
  //     targets: ".ml6 .letter",
  //     translateY: ["1.2em", 0],
  //     translateZ: 0,
  //     duration: 750,
  //     delay: (el, i) => 50 * i,
  //   })
  //   .add({
  //     targets: ".ml6",
  //     opacity: 0,
  //     duration: 1000,
  //     easing: "easeOutExpo",
  //     delay: 1000,
  //   });
}

// committee section
if (pageparams == "committe") {
  document.querySelector(".committee_container").style.cssText = "visibility: hidden; opacity: 0";
  document.addEventListener("DOMContentLoaded", () => { setTimeout(() => { document.querySelector(".committee_container").removeAttribute("style") }, 1000) })
  let dropdown = document.querySelector(".coption_container");
  let dropini = document.querySelector(".committee_page_options");
  let activeop = document.querySelector(".active_option");
  let coption = document.querySelectorAll(".coption");
  let commcontainer = document.querySelectorAll(".comm_container");
  let section_headings = document.querySelectorAll(".section_heading");

  if (localStorage.getItem("active-selLink")) {
    for (let i = 0; i < coption.length; i++) {
      if (coption[i].innerHTML == localStorage.getItem("active-selLink")) {
        changeactivelinkcom(coption[i], section_headings[i]);
      }
    }
  }

  for (let i = 0; i < coption.length; i++) {
    coption[i].addEventListener("click", function () {
      changeactivelinkcom(coption[i], section_headings[i]);
    });
  }

  function changeactivelinkcom(delop, coplop) {
    let coptionscoped = document.querySelectorAll(".coption");
    let activeopscoped = document.querySelector(".active_option");
    let commcontainerscoped = document.querySelectorAll(".comm_container");
    coptionscoped.forEach((ele) => {
      ele.classList.remove("cactive");
    });
    activeopscoped.innerHTML = delop.innerHTML;
    delop.classList.add("cactive");
    localStorage.setItem("active-selLink", delop.innerHTML);
    let parentEle = coplop.parentElement;
    commcontainerscoped.forEach((ele) => {
      if (!ele.classList.contains("vanish")) {
        ele.classList.add("vanish");
      }
    });
    parentEle.classList.remove("vanish");
  }

  document.addEventListener("click", function (event) {
    let isClciked = event.target;

    if (isClciked.classList.contains(dropini.classList)) {
      if (dropini.getAttribute("data-active") == "0") {
        dropini.setAttribute("data-active", "1");
        dropdown.classList.remove("vanish");
        dropini.classList.add("active-dropdown");
        setTimeout(function () {
          dropdown.style.cssText = "visibility: visible; opacity: 1;";
        }, 0);
        return;
      } else {
        dropini.setAttribute("data-active", "0");
        dropdown.removeAttribute("style");
        dropini.classList.remove("active-dropdown");
        setTimeout(function () {
          dropdown.classList.add("vanish");
        }, 400);
      }
      return;
    } else {
      if (dropdown.hasAttribute("style")) {
        dropini.setAttribute("data-active", "0");
        dropdown.removeAttribute("style");
        dropini.classList.remove("active-dropdown");
        setTimeout(function () {
          dropdown.classList.add("vanish");
        }, 400);
      } else {
        dropini.setAttribute("data-active", "0");
      }
      return;
    }
  });
}

// prev conf page
if (pageparams == "previous-conference") {
  $(".slick_container").slick({
    dots: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  });
}
