// Mouse Follower
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

"#3F3F3F","FFFFFF"
const colors = [
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.border = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() { 
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;
    
    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
  
  requestAnimationFrame(animateCircles);
}
animateCircles();

function smoothscroll(){
  const lenis = new Lenis()
  lenis.on('scroll', (e) => {
    console.log(e)
  })
  
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  
  requestAnimationFrame(raf)
}
smoothscroll();

function loaderanimation(){
  var loader = document.querySelector("#loader");
  setTimeout(() => {
    loader.style.top = "-100%"
  }, 3500);
}
loaderanimation()

// Animation :
const image = document.querySelector(".imagecont img");
const gola = document.querySelector(".gola");

// Set initial scale
gsap.set([gola, image], { scale: "0" });

// Create a timeline for gola and image with a delay of 3 seconds
const golaImageTimeline = gsap.timeline({ defaults: { duration: 3, ease: "expo.out" }, delay: 3 });

// Add staggered animations to gola and image
golaImageTimeline.to([gola, image], { scale: "1", stagger: 0.2 });


