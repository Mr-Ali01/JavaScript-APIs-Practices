// =========================================================
// 1. MOCK DATABASE & ASYNC API SIMULATOR
// =========================================================
const skillsData = [
  { title: "Frontend Engineering", badge: "UI/UX", level: "Advanced" },
  { title: "Backend Development", badge: "Server", level: "Intermediate" }
];
// Listen for checkbox toggles and re-trigger the fetch automatically!
document.getElementById("toggle-error")?.addEventListener("change", () => {
    // Re-run the fetch function whenever the user checks/unchecks the box
    loadAndRenderSkills();
});
function fetchSkillsFromDatabase() {
  return new Promise((resolve, reject) => {
    const shouldFail = document.getElementById("toggle-error")?.checked;

    setTimeout(() => {
      if (shouldFail) {
        // Reject the Promise to simulate a database/network error (500/404)
        reject(new Error("Database connection failed. Unable to retrieve records."));
      } else {
        // Resolve successfully
        resolve(skillsData);
      }
    }, 1000); // 1-second simulated network delay
  });
}

// =========================================================
// 2. MAIN CONTROLLER WITH TRY / CATCH
// =========================================================
async function loadAndRenderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  // A. Render Loading State (Skeleton Loaders)
  renderSkeletonState(container);

  try {
    // B. Attempt to fetch data asynchronously
    const data = await fetchSkillsFromDatabase();

    // C. Render Success State (Cards)
    renderSuccessState(container, data);

  } catch (error) {
    // D. Catch Any Error and Render User-Friendly Error Fallback UI
    console.error("[Data Fetch Error]:", error.message);
    renderErrorState(container, error.message);
  }
}

// =========================================================
// 3. UI RENDERING FUNCTIONS
// =========================================================

// State 1: Skeleton Loader UI
function renderSkeletonState(container) {
  container.innerHTML = Array(2).fill(0).map(() => `
    <div class="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm animate-pulse space-y-3">
      <div class="h-4 w-16 bg-stone-200 rounded"></div>
      <div class="h-6 w-3/4 bg-stone-200 rounded"></div>
    </div>
  `).join('');
}

// State 2: Success Cards UI
function renderSuccessState(container, data) {
  const cardsHtml = data.map(item => `
    <div class="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
      <span class="px-2.5 py-1 text-[10px] font-bold uppercase bg-amber-100 text-amber-800 rounded-md">
        ${item.badge}
      </span>
      <h3 class="text-lg font-bold text-stone-900 mt-2">${item.title}</h3>
      <p class="text-xs text-stone-500 mt-2">Level: ${item.level}</p>
    </div>
  `).join('');

  container.innerHTML = cardsHtml;
}

// State 3: Error UI Fallback with Retry Functionality
function renderErrorState(container, errorMessage) {
  container.innerHTML = `
    <div class="col-span-full bg-rose-50 border border-rose-200 text-rose-800 p-6 rounded-2xl text-center space-y-4">
      <div class="w-12 h-12 bg-rose-100 text-rose-600 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
        ⚠️
      </div>
      <div>
        <h3 class="text-lg font-bold text-rose-900">Failed to load content</h3>
        <p class="text-xs text-rose-700 mt-1">${errorMessage}</p>
      </div>
      <button 
        onclick="loadAndRenderSkills()" 
        class="px-5 py-2 text-xs font-semibold bg-rose-600 hover:bg-rose-700 text-white rounded-xl shadow-sm transition-all cursor-pointer">
        🔄 Retry Connection
      </button>
    </div>
  `;
}

// Execute on page load
loadAndRenderSkills();