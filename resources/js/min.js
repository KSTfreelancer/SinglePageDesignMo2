 let menu = document.querySelector(".nav .main-menu");
 let threeDot = document.querySelector(".mobile-menu.threeDot");
 let cros = document.querySelector(".mobile-menu.coros");

//  console.log(cros)

threeDot.addEventListener('click',function(){
  threeDot.style.display = 'none';
  cros.style.display = "block";
  menu.style.display = "block";
});
cros.addEventListener('click',function(){
  threeDot.style.display = 'block';
  cros.style.display = "none";
  menu.style.display = "none";
});