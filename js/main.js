window.addEventListener("DOMContentLoaded", () => {
  // LOADER START
  const loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.opacity = 0;
    setTimeout(function () {
      loader.style.display = "none";
    }, 500);
  }, 1000);

  // LOADER END

  const menuBtn = document.querySelector(".iconning_menu"),
    body = document.querySelector("body"),
    header = document.querySelector(".header"),
    btnX = document.querySelector(".x_btn"),
    menu = document.querySelector(".data_menu"),
    bigCar = document.querySelector(".section_block-right");

  //open menu start++++++++++++++++++++++++++
  menuBtn.addEventListener("click", showBlock);
  function showBlock() {
    menu.style.transform = "translateX(0)";
    menu.style.transition = "0.5s";
    body.style.overflow = "hidden";
    header.style.background = "rgb(169 169 169 / 53%)";

    // window click close menu start--------------------
    header.addEventListener("click", (e) => {
      if (e.target === header) {
        hideBlock();
      }
    });
  }
  //open menu end+++++++++++++++++++++++++++++

  //close menu start****************************
  btnX.addEventListener("click", hideBlock);
  function hideBlock() {
    menu.style.transform = "translateX(100%)";
    menu.style.transition = "0.5s";
    body.style.overflow = "";
    header.style.background = "";
  }
  //close menu end*******************************

  // Track drive setTimeOut start

  function driveCar() {
    bigCar.style.transform = "translateX(0%)";
    bigCar.style.transition = "1s";
    clearInterval(modalTimer);
  }
  let modalTimer = setTimeout(driveCar, 1500);
});

// window resize menu start "It's not worked"
// $(window).resize(function () {
//   if ($(window).width() < 600) {
//     $(".data_menu").remove();
//   }
// });
// window resize menu end
