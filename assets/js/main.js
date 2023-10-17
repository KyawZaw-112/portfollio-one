AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



let showBtn = document.querySelector('#showBtn');
let showPara = document.querySelector('.read-hide');
let hideBtn = document.querySelector('.hide-btn');
let showBtn1 = document.querySelector('#showBtn1');
let showPara1 = document.querySelector('.read-hide1');
let hideBtn1 = document.querySelector('.hide-btn1');
let showBtn2 = document.querySelector('#showBtn2');
let showPara2 = document.querySelector('.read-hide2');
let hideBtn2 = document.querySelector('.hide-btn2');
let showBtn3 = document.querySelector('#showBtn3');
let showPara3 = document.querySelector('.read-hide3');
let hideBtn3 = document.querySelector('.hide-btn3');



let show = function () {
  showPara.style.display = 'block';
  showBtn.style.display = 'none';
  hideBtn.style.display = 'none';
}
let show1 = function () {
  showPara1.style.display = 'block';
  showBtn1.style.display = 'none';
  hideBtn1.style.display = 'none';
}
let show2 = function () {
  showPara2.style.display = 'block';
  showBtn2.style.display = 'none';
  hideBtn2.style.display = 'none';
}
let show3 = function () {
  showPara3.style.display = 'block';
  showBtn3.style.display = 'none';
  hideBtn3.style.display = 'none';
}

showBtn.onclick = show;
showBtn1.onclick = show1;
showBtn2.onclick = show2;
showBtn3.onclick = show3;
