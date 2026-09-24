const courses = [
  { group: "IRMA", name: "Community Medical Service & Essential Drugs Training For Essential Drugs Training For Primary Health Care, WHO (CMS & EDT)", duration: "18 Months", eligibility: "M.P." },
  { group: "IRMA", name: "Vaccination (VACC)", duration: "6 Months", eligibility: "M.P." },
  { group: "IRMA", name: "Population Education Training (PET)", duration: "6 Months", eligibility: "After ED Course" },
  { group: "IRMA", name: "Family Welfare Training (FWT)", duration: "6 Months", eligibility: "H.S." },
  { group: "IRMA", name: "Sexually Transmitted Disease (STD & AIDS)", duration: "6 Months", eligibility: "M.P." },
  { group: "IRMA", name: "First Aid", duration: "6 Months", eligibility: "M.P." },
  { group: "IRMA", name: "Village Nurse Midwifery (VNM)", duration: "6 Months", eligibility: "M.P." },
  { group: "IRMA", name: "Diploma in Sanitary Inspectors (S.I.)", duration: "1 Year", eligibility: "H.S." },

  { group: "BSS", name: "Diploma in Medical Laboratory Technology (DMLT)", duration: "2 Years", eligibility: "H.S." },
  { group: "BSS", name: "Diploma in Physiotherapy & Activity Therapy (DPT)", duration: "2 Years", eligibility: "H.S." },
  { group: "BSS", name: "Diploma in Operation Theatre Technology (DOTT)", duration: "2 Years", eligibility: "H.S." },
  { group: "BSS", name: "Diploma in Optometry", duration: "2 Years", eligibility: "H.S." },
  { group: "BSS", name: "Post Diploma in Health Care Management", duration: "2 Years", eligibility: "H.S." },
  { group: "BSS", name: "Diploma in Rural Medical Care Provider", duration: "2 Years", eligibility: "H.S." },
  { group: "BSS", name: "Diploma in Homeopathy", duration: "2 Years", eligibility: "H.S." },
  { group: "BSS", name: "Dental Hygienist", duration: "1 Year", eligibility: "H.S." },
  { group: "BSS", name: "Dental Technician", duration: "6 Months", eligibility: "H.S." },
  { group: "BSS", name: "ECG Technician", duration: "6 Months", eligibility: "H.S." },

  { group: "BOSSE", name: "Secondary (10th)", duration: "6 Months", eligibility: "8th Pass" },
  { group: "BOSSE", name: "Higher Secondary with Science / 10+2", duration: "6 Months", eligibility: "10th Pass" },
  { group: "NIOS", name: "Secondary (10th)", duration: "6 Months", eligibility: "8th Pass" },
  { group: "NIOS", name: "Higher Secondary with Science / 10+2", duration: "6 Months", eligibility: "10th Pass" },

  { group: "SSU Degree", name: "Bachelor of Naturopathy and Yogic Science (BNYS)", duration: "4.5 Years", eligibility: "10+2 with Biology" },
  { group: "SSU Degree", name: "Bachelor in Medical Lab Technology (BMLT)", duration: "3 Years", eligibility: "10+2 with Biology" },
  { group: "SSU Degree", name: "BA / B.Sc. in Yoga", duration: "3 Years", eligibility: "12th Passed" },
  { group: "SSU Degree", name: "Bachelor of Science in Optometry", duration: "3 Years", eligibility: "10+2 with Biology" },
  { group: "SSU Degree", name: "Bachelor of Science in Radiology and Imaging Technology", duration: "3 Years", eligibility: "10+2 with Biology" },

  { group: "MSU / GSDM", name: "Certificate in General Duty Assistance", duration: "480 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Medical Dressing", duration: "600 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Basic Emergency Medical Operations", duration: "480 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Panchkarma Technology", duration: "600 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Vision Testing & Instrument Handling", duration: "390 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Dental Assisting", duration: "540 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Radiology Techniques", duration: "540 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Medical Laboratory Technology", duration: "540 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Advanced Emergency Medical Technology", duration: "570 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Dialysis Technology", duration: "540 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Cardiac Care Technology", duration: "540 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Operation Theatre Technology", duration: "540 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Physiotherapy Assistance", duration: "540 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Frontline Healthcare", duration: "390 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Blood Bank Technology", duration: "540 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Pharmacy Assistance", duration: "540 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Histotechnology", duration: "600 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Anesthesia Technology", duration: "540 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in X-Ray Technology", duration: "390 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Diet Assistance", duration: "540 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Medical Records Management", duration: "540 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Phlebotomy Techniques", duration: "390 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Nursing Assistant", duration: "540 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Health Sanitary Technology", duration: "540 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Professional Diploma in Acupressure Skills", duration: "900 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Professional Diploma in Nursing Assistance Skills", duration: "900 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Holistic Inner Vision", duration: "390 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Post Graduate Diploma in Acupuncture Skills", duration: "900 Hours", eligibility: "Graduate" },
  { group: "MSU / GSDM", name: "Certificate in Modern Pharmacy Management", duration: "600 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Electro-Acupuncture According to Voll", duration: "600 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Professional Diploma in Medical Laboratory Technology Skills", duration: "900 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Basic Emergency Medical Technology", duration: "600 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Professional Diploma in Health Sanitary Inspector", duration: "1200 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Critical Care Medicine", duration: "600 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Professional Diploma in Pharmacy Assistance", duration: "900 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Professional Diploma in Dialysis Technology", duration: "900 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate in Cupping Therapy", duration: "600 Hours", eligibility: "12th Class Pass" },
  { group: "MSU / GSDM", name: "Certificate Course in Dietician", duration: "600 Hours", eligibility: "12th Class Pass" },

  { group: "SSU Diploma", name: "Diploma in Medical Lab Technology (DMLT)", duration: "2 Years", eligibility: "10+2 with Science" },
  { group: "SSU Diploma", name: "Diploma in Dental Technician and Hygiene", duration: "2 Years", eligibility: "10+2 with Science" },
  { group: "SSU Diploma", name: "Diploma in ECG Technician", duration: "2 Years", eligibility: "10+2 with Science" },
  { group: "SSU Diploma", name: "Diploma in Multipurpose Health Workers (MPHW)", duration: "2 Years", eligibility: "10+2 with Science" },
  { group: "SSU Diploma", name: "Diploma in Optometry", duration: "2 Years", eligibility: "10+2 with Science" },
  { group: "SSU Diploma", name: "Diploma in Ultrasound Technology (UST)", duration: "2 Years", eligibility: "10+2 with Science" },
  { group: "SSU Diploma", name: "Diploma in CT Scan Technician", duration: "2 Years", eligibility: "10+2 with Science" },
  { group: "SSU Diploma", name: "Diploma in Cardiology Technician", duration: "2 Years", eligibility: "10+2 with Science" },
  { group: "SSU Diploma", name: "Diploma in Ophthalmic Assistant", duration: "2 Years", eligibility: "10+2 with Science" },
  { group: "SSU Diploma", name: "Diploma in Dialysis Technician", duration: "2 Years", eligibility: "10+2 with Science" },
  { group: "SSU Diploma", name: "Diploma in Operation Theater Technology (OTT)", duration: "2 Years", eligibility: "10+2 with Science" },
  { group: "SSU Diploma", name: "Diploma in Radiology and Imaging Technology", duration: "2 Years", eligibility: "10+2 with Science" },
  { group: "SSU Diploma", name: "Diploma in X-Ray Technician", duration: "2 Years", eligibility: "10+2 with Science" },
  { group: "SSU Diploma", name: "Diploma in Physiotherapy", duration: "2 Years", eligibility: "10+2 with Science" },

  { group: "SSU Certificate", name: "Certificate in Dental Technician and Hygiene", duration: "1 Year", eligibility: "10th from Recognised Board" },
  { group: "SSU Certificate", name: "Certificate in Medical Dresser", duration: "1 Year", eligibility: "10th from Recognised Board" }
];

const filters = ["All", ...new Set(courses.map((course) => course.group))];
const grid = document.querySelector("#course-grid");
const filterBar = document.querySelector("#course-filters");
const searchInput = document.querySelector("#course-search");
const resultCount = document.querySelector("#result-count");
let activeFilter = "All";

const escapeHtml = (value) => value.replace(/[&<>'"]/g, (character) => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#039;",
  "\"": "&quot;"
})[character]);

function renderFilters() {
  filterBar.innerHTML = filters.map((filter) => `
    <button class="course-filter${filter === activeFilter ? " active" : ""}" type="button" data-filter="${escapeHtml(filter)}" aria-pressed="${filter === activeFilter}">${escapeHtml(filter)}</button>
  `).join("");
}

function renderCourses() {
  const term = searchInput.value.trim().toLowerCase();
  const visibleCourses = courses.filter((course) => {
    const matchesFilter = activeFilter === "All" || course.group === activeFilter;
    const matchesSearch = !term || `${course.name} ${course.group} ${course.duration} ${course.eligibility}`.toLowerCase().includes(term);
    return matchesFilter && matchesSearch;
  });

  resultCount.textContent = `${visibleCourses.length} course${visibleCourses.length === 1 ? "" : "s"} shown`;

  if (!visibleCourses.length) {
    grid.innerHTML = '<div class="empty-state">No matching course found.</div>';
    return;
  }

  grid.innerHTML = visibleCourses.map((course) => `
    <article class="course-card">
      <p class="group">${escapeHtml(course.group)}</p>
      <h3>${escapeHtml(course.name)}</h3>
      <div class="course-meta">
        <div><span>Duration</span><strong>${escapeHtml(course.duration)}</strong></div>
        <div><span>Eligibility</span><strong>${escapeHtml(course.eligibility)}</strong></div>
      </div>
    </article>
  `).join("");
}

filterBar.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  renderFilters();
  renderCourses();
});

searchInput.addEventListener("input", renderCourses);
renderFilters();
renderCourses();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  document.body.classList.toggle("menu-open", isOpen);
});
nav.addEventListener("click", (event) => {
  if (!event.target.closest("a")) return;
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-open");
});

const enquiryForm = document.querySelector("#enquiry-form");
enquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(enquiryForm);
  const message = [
    "ADMISSION ENQUIRY",
    "",
    `Student Name: ${data.get("name")}`,
    `Phone Number: ${data.get("phone")}`,
    `Course Interested In: ${data.get("course")}`,
    `Qualification: ${data.get("qualification") || "Not Provided"}`,
    `Message: ${data.get("message") || "Not Provided"}`
  ].join("\n");
  window.open(`https://wa.me/916297193609?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});

const lightbox = document.querySelector("#lightbox");
const lightboxImage = document.querySelector("#lightbox-image");
const lightboxClose = document.querySelector("#lightbox-close");
document.querySelector("#gallery-grid").addEventListener("click", (event) => {
  const button = event.target.closest("[data-image]");
  if (!button) return;
  lightboxImage.src = button.dataset.image;
  lightboxImage.alt = button.querySelector("img").alt;
  lightbox.showModal();
});
lightboxClose.addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});


// Premium scroll reveals and subtle 3D card interaction
const revealTargets=document.querySelectorAll('.section-heading,.statement-card,.course-card,.reason-photo,.feature-list li,.affiliation-grid article,.gallery-item,.admission-copy,.enquiry-form,.footer-grid > div');
revealTargets.forEach((element,index)=>{element.classList.add('reveal-on-scroll');element.style.transitionDelay=((index%5)*70)+'ms'});
if('IntersectionObserver' in window){const revealObserver=new IntersectionObserver((entries,observer)=>{entries.forEach(entry=>{if(!entry.isIntersecting)return;entry.target.classList.add('is-visible');observer.unobserve(entry.target)})},{threshold:.12,rootMargin:'0px 0px -45px 0px'});revealTargets.forEach(element=>revealObserver.observe(element))}else{revealTargets.forEach(element=>element.classList.add('is-visible'))}
const canTilt=window.matchMedia('(hover: hover) and (pointer: fine)').matches&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(canTilt){document.querySelectorAll('.course-card,.statement-card,.affiliation-grid article').forEach(card=>{card.addEventListener('pointermove',event=>{const rect=card.getBoundingClientRect();const x=(event.clientX-rect.left)/rect.width;const y=(event.clientY-rect.top)/rect.height;const rotateY=(x-.5)*7;const rotateX=(.5-y)*7;card.style.transform='perspective(900px) rotateX('+rotateX+'deg) rotateY('+rotateY+'deg) translateY(-5px)'});card.addEventListener('pointerleave',()=>{card.style.transform=''})})}
