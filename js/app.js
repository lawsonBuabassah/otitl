// window.addEventListener("scroll", function () {
//     const header = document.querySelector(".header");
//     const content = document.querySelector(".main");
    
//     if (window.scrollY > 0) {
//       header.classList.add("sticky");
//       content.style.marginTop = header.clientHeight + "px";
//     } else {
//       header.classList.remove("sticky");
//       content.style.marginTop = 0;
//     }
//   });

  var menu = document.querySelector('.menu');
  var menuBtn = document.querySelector('.menu-btn');
  var closeBtn = document.querySelector('.close-btn');

  menuBtn.addEventListener("click", ()=>{
    menu.classList.add('active');
  });

  closeBtn.addEventListener("click", ()=>{
    menu.classList.remove('active');
  });
  