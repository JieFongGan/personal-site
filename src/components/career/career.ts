import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let started = false;

export function initCareer() {
  if (started) return;
  const careerSection = document.getElementById("career");
  if (!careerSection) return;
  
  started = true;

  // 1. Animate Header (Title & Summary)
  gsap.timeline({
    scrollTrigger: {
      trigger: ".career-title",
      start: "top 85%", // Starts when title is 85% from top of viewport
      once: true        // Ensures it never retriggers
    }
  })
  .from(".career-title", {
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power4.out"
  })
  .from(".career-summary", {
    y: 30,
    opacity: 0,
    duration: 0.6
  }, "-=0.4");

  // 2. Animate Career Items
  const careerItems = document.querySelectorAll(".career-item");
  
  careerItems.forEach((item, index) => {
    const isLeft = index % 2 === 0;
    const direction = isLeft ? -50 : 50;
    const dot = item.querySelector(".career-dot");
    const line = item.querySelectorAll(".career-line");
    const contentElements = item.querySelectorAll(".career-time, .career-job-title, .career-organization");
    const card = item.querySelector(".career-card");
    const desc = item.querySelector(".career-description");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 80%", // Trigger when the item enters 80% of the screen
        once: true
      },
      defaults: { ease: "power3.out", duration: 0.5 }
    });

    tl.from(dot, { scale: 0, opacity: 0, ease: "back.out(2)" })
      .from(line, { scaleY: 0, transformOrigin: "top" }, "-=0.3")
      .from(contentElements, { x: direction, opacity: 0, stagger: 0.1 }, "-=0.3")
      .from(card, { y: 30, opacity: 0, ease: "back.out(1.2)" }, "-=0.4")
      .from(desc, { y: 20, opacity: 0 }, "-=0.3");
  });

  setupHoverEffects();
}

function animateCareerItem(item: HTMLElement, index: number) {
  const isLeft = index % 2 === 0;
  const direction = isLeft ? -50 : 50;

  const itemTl = gsap.timeline({
    defaults: {
      ease: "power3.out"
    }
  });

  // Animate the dot
  itemTl.from(item.querySelector(".career-dot"), {
    scale: 0,
    opacity: 0,
    duration: 0.4,
    ease: "back.out(2)",
    clearProps: "all"
  })
  // Animate the line growing
  .from(item.querySelectorAll(".career-line"), {
    scaleY: 0,
    transformOrigin: "top",
    duration: 0.5,
    clearProps: "all"
  }, "-=0.2")
  // Animate time and title
  .from(item.querySelector(".career-time"), {
    x: direction,
    opacity: 0,
    duration: 0.5,
    clearProps: "all"
  }, "-=0.3")
  .from(item.querySelector(".career-job-title"), {
    x: direction,
    opacity: 0,
    duration: 0.5,
    clearProps: "all"
  }, "-=0.3")
  .from(item.querySelector(".career-organization"), {
    x: direction,
    opacity: 0,
    duration: 0.5,
    clearProps: "all"
  }, "-=0.3")
  // Animate card
  .from(item.querySelector(".career-card"), {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.2)",
    clearProps: "all"
  }, "-=0.3")
  // Animate description
  .from(item.querySelector(".career-description"), {
    y: 20,
    opacity: 0,
    duration: 0.5,
    clearProps: "all"
  }, "-=0.3");
  // Skills animation removed - they will appear without animation
}

function setupHoverEffects() {
  // Card hover effect
  const cards = document.querySelectorAll(".career-card");
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -5,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });

  // Skill badge hover effect
  const skills = document.querySelectorAll(".career-skill");
  skills.forEach((skill) => {
    skill.addEventListener("mouseenter", () => {
      gsap.to(skill, {
        scale: 1.1,
        duration: 0.2,
        ease: "back.out(2)"
      });
    });

    skill.addEventListener("mouseleave", () => {
      gsap.to(skill, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out"
      });
    });
  });

  // Organization link hover
  const orgLinks = document.querySelectorAll(".career-organization a");
  orgLinks.forEach((link) => {
    const arrow = link.querySelector("svg");
    
    link.addEventListener("mouseenter", () => {
      if (arrow) {
        gsap.to(arrow, {
          x: 3,
          y: -3,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });

    link.addEventListener("mouseleave", () => {
      if (arrow) {
        gsap.to(arrow, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    });
  });
}