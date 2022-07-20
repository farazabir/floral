document.body.addEventListener("mousemove", (evt) => {
    const mouseX = evt.clientX;
    const mouseY = evt.clientY;

    gsap.set(".ccursor", {
      x: mouseX,
      y: mouseY
    });

    gsap.to(".shape", {
      x: mouseX,
      y: mouseY,
      stagger: -0.1 
    });


  })
  window.onload=()=>{
    const $ = document.querySelector.bind(document);
const $All = document.querySelectorAll.bind(document);

$('#menu').onclick=()=>{              $('#menu').classList.toggle('rotate')
  $('.nav-page1').classList.toggle('transform')
  $('.nav-page2').classList.toggle('transform')
  $('.menu-line1').classList.toggle('rotate1')
   $('.menu-line2').classList.toggle('rotate2')
}
}