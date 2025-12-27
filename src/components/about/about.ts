import gsap from "gsap";

let started = false;

export function initAbout() {
  if (started) return;
  started = true;

  // Hide elements immediately on init
  gsap.set(".about-title, .about-summary, .about-badge, .about-subtitle, .about-paragraph, .about-social-label, .about-social-btn", {
    opacity: 0,
    visibility: "visible"
  });
  
  gsap.set(".about-card, .about-image-wrapper, .about-card-footer > *", {
    opacity: 0,
    visibility: "visible"
  });

  // Create an intersection observer for scroll-triggered animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateAboutSection();
          observer.disconnect(); // Only animate once
        }
      });
    },
    { threshold: 0.1 }
  );

  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    observer.observe(aboutSection);
  }
}

function animateAboutSection() {
  const tl = gsap.timeline({
    defaults: {
      ease: "power3.out",
      duration: 0.44
    }
  });

  // Fade in all elements
  tl.to(".about-title, .about-summary, .about-badge, .about-subtitle, .about-paragraph, .about-social-label, .about-social-btn, .about-card, .about-image-wrapper, .about-card-footer > *", {
    opacity: 1,
    duration: 0.55
  });

  // Header animation
  tl.from(".about-title", {
    y: 40,
    duration: 0.55,
    ease: "power4.out",
    clearProps: "y,transform"
  }, 0)
  .from(".about-summary", {
    y: 20,
    duration: 0.44,
    clearProps: "y,transform"
  }, "-=0.3");

  // Card animation with parallax effect
  tl.from(".about-card", {
    y: 50,
    duration: 0.55,
    ease: "back.out(1.2)",
    clearProps: "y,transform"
  }, "-=0.25")
  .from(".about-image-wrapper", {
    scale: 1.2,
    duration: 0.77,
    ease: "power2.out",
    clearProps: "scale,transform"
  }, "-=0.5")
  .from(".about-card-footer > *", {
    y: 15,
    stagger: 0.066,
    duration: 0.385,
    clearProps: "y,transform"
  }, "-=0.3");

  // Right content animation
  tl.from(".about-badge", {
    scale: 0.8,
    duration: 0.385,
    ease: "back.out(2)",
    clearProps: "scale,transform"
  }, "-=0.4")
  .from(".about-subtitle", {
    y: 30,
    duration: 0.495,
    clearProps: "y,transform"
  }, "-=0.25")
  .from(".about-paragraph", {
    y: 20,
    stagger: 0.088,
    duration: 0.44,
    clearProps: "y,transform"
  }, "-=0.25")
  .from(".about-social-label", {
    duration: 0.33
  }, "-=0.15")
  .from(".about-social-btn", {
    x: -20,
    stagger: 0.066,
    duration: 0.385,
    ease: "back.out(1.5)",
    clearProps: "x,transform"
  }, "-=0.15");

  // Continuous subtle animations
  // Card hover effect
  const card = document.querySelector(".about-card");
  if (card) {
    card.addEventListener("mouseenter", () => {
      gsap.to(".about-image-wrapper", {
        scale: 1.05,
        duration: 0.44,
        ease: "power2.out"
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(".about-image-wrapper", {
        scale: 1,
        duration: 0.44,
        ease: "power2.out"
      });
    });
  }

  // Social buttons hover animation
  const socialButtons = document.querySelectorAll(".about-social-btn");
  socialButtons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, {
        x: 5,
        duration: 0.22,
        ease: "power2.out"
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        x: 0,
        duration: 0.22,
        ease: "power2.out"
      });
    });
  });

  // Parallax effect on badge
  const badge = document.querySelector(".about-badge");
  if (badge) {
    badge.addEventListener("mouseenter", () => {
      gsap.to(badge, {
        rotate: 5,
        scale: 1.1,
        duration: 0.275,
        ease: "back.out(2)"
      });
    });

    badge.addEventListener("mouseleave", () => {
      gsap.to(badge, {
        rotate: 0,
        scale: 1,
        duration: 0.275,
        ease: "power2.out"
      });
    });
  }
}