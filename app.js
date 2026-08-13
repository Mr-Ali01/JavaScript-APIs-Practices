// =========================================================
// 1. DATA STORE: Array of Objects
// =========================================================
const skillsData = [
  {
    title: "Frontend Engineering",
    badge: "UI / UX",
    description: "Building responsive, modern user interfaces with HTML, CSS, Tailwind, and React.",
    level: "Advanced"
  },
  {
    title: "Backend Development",
    badge: "Server",
    description: "Architecting scalable APIs, microservices, and logic with Java, Node.js, and PHP.",
    level: "Intermediate"
  },
  {
    title: "Database Management",
    badge: "Storage",
    description: "Designing relational schemas, optimizing queries, and handling data in MySQL.",
    level: "Intermediate"
  },
  {
    title: "System Architecture",
    badge: "Core",
    description: "Designing robust end-to-end architectures, deployment setups, and clean database routing.",
    level: "Advanced"
  }
];

// =========================================================
// 2. RENDER ENGINE WITH SIMULATED DATABASE LATENCY
// =========================================================
function fetchAndRenderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  // A. Show Skeleton Loader immediately (Simulates "Loading..." state)
  container.innerHTML = Array(3).fill(0).map(() => `
    <div class="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm animate-pulse space-y-4">
      <div class="h-4 w-16 bg-stone-200 rounded"></div>
      <div class="h-6 w-3/4 bg-stone-200 rounded"></div>
      <div class="h-12 w-full bg-stone-200 rounded"></div>
      <div class="h-4 w-1/2 bg-stone-200 rounded"></div>
    </div>
  `).join('');

  // B. Simulate 1-second Database Latency using setTimeout
  setTimeout(() => {
    // Generate Cards HTML
    const cardsHtml = skillsData.map(skill => {
      // CONDITIONAL ELEMENT: Check if level is "Advanced"
      const isAdvancedBadge = skill.level === "Advanced" 
        ? `<span class="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
             <span class="w-1.5 h-1.5 mr-1 bg-emerald-500 rounded-full animate-pulse"></span> Advanced
           </span>`
        : "";

      return `
        <div class="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 rounded-md">
                ${skill.badge}
              </span>
              <!-- Render Conditional Badge -->
              ${isAdvancedBadge}
            </div>

            <h3 class="text-lg font-bold text-stone-900 mb-2">${skill.title}</h3>
            <p class="text-sm text-stone-600 leading-relaxed mb-4">${skill.description}</p>
          </div>

          <div class="text-xs font-semibold text-stone-400 border-t border-stone-100 pt-3">
            Level: <span class="text-stone-700">${skill.level}</span>
          </div>
        </div>
      `;
    }).join('');

    // Inject final cards into DOM
    container.innerHTML = cardsHtml;
  }, 1000); // 1000ms = 1 second delay
}

// Execute on page load
fetchAndRenderSkills();