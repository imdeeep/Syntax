
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
// Cursor Follower 


// Mouse Follower
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
 "#3F3F3F","FFFFFF"
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



// Animation :
  const logo = document.querySelector(".logo");
  const logoHeading = document.querySelector(".logoheading");
  const chat = document.querySelector(".chatbtn");
  const cont = document.querySelector(".contbtn");
  const image = document.querySelector(".imagecont img");
  const gola = document.querySelector(".gola");

  // Set initial positions and scale
  gsap.set([logo, chat, cont], { y: "-1000%" });
  gsap.set([logoHeading], { x: "-1000%" });
  gsap.set([gola, image], { scale: "0" });

  // Create a main timeline
  const mainTimeline = gsap.timeline({ defaults: { duration: 0.8, ease: "expo.out" } });

  // Add animations to the main timeline
  mainTimeline.to(logo, { y: "0%" })
              .to(chat, { y: "0%", stagger: 0.1 })
              .to(cont, { y: "0%", stagger: 0.1 })
              .to(logoHeading, { x: "0%", stagger: 0.1 });

  // Create a timeline for gola and image
  const golaImageTimeline = gsap.timeline({ defaults: { duration: 3, ease: "expo.out" } });

  // Add staggered animations to gola and image
  golaImageTimeline.to([gola, image], { scale: "1", stagger: 0.2 });



