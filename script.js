const processSteps = [
  {
    title: "Getting to know you",
    description:
      "Getting to know you, your brand goals, and how we can help using our creative expertise to offer new perspectives and practical solutions.",
    chip: "Discovery",
    caption: "Fresh perspective unlocked",
    accent: "linear-gradient(180deg, rgba(234, 228, 255, 0.98) 0%, rgba(248, 242, 255, 0.98) 100%)",
  },
  {
    title: "Freelancer matching",
    description:
      "We match you with the freelancer that best suits your needs and can execute at the level your project deserves, without awkward project management or unclear communication.",
    chip: "Matching",
    caption: "Talent aligned to the brief",
    accent: "linear-gradient(180deg, rgba(255, 230, 236, 0.98) 0%, rgba(248, 238, 255, 0.98) 100%)",
  },
  {
    title: "Creation and feedback",
    description:
      "You stay in the loop throughout the process with space to review, refine, and shape the work so the result feels considered instead of rushed.",
    chip: "Creation",
    caption: "Feedback keeps the work sharp",
    accent: "linear-gradient(180deg, rgba(226, 234, 255, 0.98) 0%, rgba(244, 240, 255, 0.98) 100%)",
  },
  {
    title: "Delivery and follow-ups",
    description:
      "Everything goes live with support close by. Need help down the road? Bridge Creatives stays within reach for post-project follow-ups.",
    chip: "Delivery",
    caption: "Launch ready and still supported",
    accent: "linear-gradient(180deg, rgba(255, 221, 229, 0.98) 0%, rgba(229, 231, 255, 0.98) 100%)",
  },
];

const stepButtons = Array.from(document.querySelectorAll(".process-step"));
const processIndex = document.getElementById("process-index");
const processTitle = document.getElementById("process-title");
const processDescription = document.getElementById("process-description");
const previewChip = document.querySelector(".preview-chip");
const previewCaption = document.getElementById("preview-caption");
const processPreview = document.getElementById("process-preview");
const yearEl = document.getElementById("year");

function setProcessStep(index) {
  const step = processSteps[index];
  if (!step) return;

  processIndex.textContent = String(index + 1).padStart(2, "0");
  processTitle.textContent = step.title;
  processDescription.textContent = step.description;
  previewChip.textContent = step.chip;
  previewCaption.textContent = step.caption;
  processPreview.style.background = step.accent;

  stepButtons.forEach((button, buttonIndex) => {
    const isActive = buttonIndex === index;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

stepButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const index = Number(button.dataset.step || 0);
    setProcessStep(index);
  });
});

const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

setProcessStep(0);
