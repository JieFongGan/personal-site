import gsap from "gsap";

let started = false;

export function initHero() {
  if (started) return;
  started = true;

  // 1. GENERATE GREETINGS FIRST
  const container = document.getElementById("greeting-container");
  if (container) {
    const hour = new Date().getHours();
    let greetings: string[] = [];

    if (hour >= 5 && hour < 12) greetings = ["Good Morning", "Selamat Pagi", "早上好"];
    else if (hour >= 12 && hour < 18) greetings = ["Good Afternoon", "Selamat Tengahari", "下午好"];
    else greetings = ["Good Evening", "Selamat Malam", "晚上好"];

    container.innerHTML = "";
    greetings.forEach((text) => {
      // Create nested spans to match the ".hero-greeting span span" selector
      const outerSpan = document.createElement("span");
      const innerSpan = document.createElement("span");
      innerSpan.textContent = text;
      outerSpan.appendChild(innerSpan);
      container.appendChild(outerSpan);
    });
  }

  // 2. SET INITIAL STATES
  // This overrides the CSS "visibility: hidden" once the JS is ready to take over
  gsap.set(".hero-clock, .hero-greeting span span, .hero-name > *, .hero-cta > *, .hero-icon", { 
    opacity: 0,
    visibility: "visible"
  });

  // 3. ENTRANCE TIMELINE
  const tl = gsap.timeline({ 
    defaults: { ease: "power3.out" } 
  });

  tl.to(".hero-clock, .hero-greeting span span, .hero-name > *, .hero-cta > *, .hero-icon", {
    opacity: 1,
    duration: 0.6
  })
  .from(".hero-clock", { 
    y: 30, 
    duration: 0.6,
    ease: "back.out(1.2)",
    clearProps: "y,transform"
  }, 0)
  .from(".hero-greeting span span", { 
    y: 40, 
    stagger: 0.1, 
    duration: 0.6,
    ease: "power4.out",
    clearProps: "y,transform"
  }, "-=0.3")
  .from(".hero-name > *", { 
    y: 30, 
    stagger: 0.15,
    duration: 0.6,
    clearProps: "y,transform"
  }, "-=0.3")
  .from(".hero-cta > *", { 
    y: 25, 
    stagger: 0.12, 
    duration: 0.5,
    ease: "power2.out",
    clearProps: "y,transform"
  }, "-=0.3")
  .from(".hero-icon", { 
    scale: 0.7, 
    rotate: -15, 
    duration: 1,
    ease: "elastic.out(1, 0.5)",
    clearProps: "scale,rotate,transform"
  }, "-=0.6");

  // 4. PERSISTENT ANIMATIONS (Clock & Floating)
  initBackgroundAnimations();
  initClockLogic();
}

function initClockLogic() {
  const clock = document.getElementById("live-clock");
  const tz = document.getElementById("timezone-display");
  
  function updateClock() {
    if (!clock || !tz) return;
    const now = new Date();
    const newTime = now.toLocaleTimeString("en-GB", { hour12: false });
    const newTz = now.toLocaleTimeString("en-US", { timeZoneName: "short" }).split(" ").pop() || "LOCAL";
    
    if (clock.textContent !== newTime) {
      clock.textContent = newTime;
    }
    if (tz.textContent !== newTz) {
      tz.textContent = newTz;
    }
  }
  updateClock();
  setInterval(updateClock, 1000);
}

function initBackgroundAnimations() {
  // Icon Float
  const icon = document.querySelector(".hero-icon svg");
  if (icon) {
    gsap.to(icon, { y: -20, duration: 3, ease: "sine.inOut", repeat: -1, yoyo: true });
    gsap.to(icon, { rotation: 5, duration: 4, ease: "sine.inOut", repeat: -1, yoyo: true });
  }

  // Blobs
  const blobs = document.querySelectorAll("#hero > div[class*='absolute']");
  blobs.forEach((blob, i) => {
    gsap.to(blob, {
      scale: 1.1,
      duration: 8 + i * 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      delay: i * 1
    });
  });
}