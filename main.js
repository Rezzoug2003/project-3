document.addEventListener("click", (e) => {

  if (e.target == document.querySelector(".header .main-nav > li:last-child a")) {
    
    document
      .querySelector(".header .main-nav > li:last-child .mega-menu")
      .classList.toggle("Open");
    }
    if (e.target != document.querySelector(".header .main-nav > li:last-child a")) {
         document
           .querySelector(".header .main-nav > li:last-child .mega-menu")
           .classList.remove("Open");
    }
});

