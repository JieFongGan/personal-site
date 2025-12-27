import gsap from "gsap";

let started = false;

export function initHero() {
  if (started) return;
  started = true;

  /* Immediately hide elements before animation to prevent flicker */
  gsap.set(".hero-clock, .hero-greeting span span, .hero-name > *, .hero-cta > *, .hero-icon", { 
    opacity: 0,
    visibility: "visible"
  });

  /* Enhanced Entrance Timeline */
  const tl = gsap.timeline({ 
    defaults: { 
      ease: "power3.out"
    } 
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

  /* Enhanced Icon Float Animation with GSAP */
  const icon = document.querySelector(".hero-icon svg");
  if (icon) {
    gsap.to(icon, {
      y: -20,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });
    // Add subtle rotation
    gsap.to(icon, {
      rotation: 5,
      duration: 4,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });
  }

  /* Background Blobs Animation */
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
    gsap.to(blob, {
      x: i % 2 === 0 ? 30 : -30,
      y: i % 2 === 0 ? -20 : 20,
      duration: 10 + i * 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });
  });

  /* Button Hover Animations */
  const buttons = document.querySelectorAll(".hero-cta a");
  buttons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { 
        scale: 1.05, 
        duration: 0.3, 
        ease: "back.out(2)" 
      });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { 
        scale: 1, 
        duration: 0.3, 
        ease: "power2.inOut" 
      });
    });
  });

  /* Enhanced Live Clock */
  const clock = document.getElementById("live-clock");
  const tz = document.getElementById("timezone-display");
  
  function updateClock() {
    if (!clock || !tz) return;
    
    const now = new Date();
    const newTime = now.toLocaleTimeString("en-GB", { hour12: false });
    const newTz = now.toLocaleTimeString("en-US", { timeZoneName: "short" }).split(" ").pop() || "LOCAL";
    
    // Only update if changed to prevent unnecessary DOM manipulation
    if (clock.textContent !== newTime) {
      // Subtle flash animation on update
      gsap.fromTo(clock, 
        { opacity: 0.7 },
        { opacity: 1, duration: 0.2 }
      );
      clock.textContent = newTime;
    }
    
    if (tz.textContent !== newTz) {
      tz.textContent = newTz;
    }
  }
  updateClock();
  setInterval(updateClock, 1000);

  /* Pulse animation for the clock indicator */
  const indicator = document.querySelector(".hero-clock .relative.flex");
  if (indicator) {
    gsap.to(indicator, {
      scale: 1.2,
      opacity: 0.6,
      duration: 1.5,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true
    });
  }
}