const lostProfiles = [
  {
    id: "lost-milo",
    name: "Milo",
    type: "dog",
    colors: ["golden", "tan", "white"],
    area: "Maple Park",
    date: "Today",
    image: "assets/milo.svg",
    description: "Golden retriever mix with a white chest, blue collar, and very friendly behavior near Maple Park."
  },
  {
    id: "lost-luna",
    name: "Luna",
    type: "cat",
    colors: ["gray", "silver"],
    area: "Oak Street",
    date: "Yesterday",
    image: "assets/luna.svg",
    description: "Small gray cat with green eyes and a clipped left ear. Last seen around Oak Street apartments."
  },
  {
    id: "lost-poppy",
    name: "Poppy",
    type: "dog",
    colors: ["brown", "white"],
    area: "River Trail",
    date: "May 9",
    image: "assets/poppy.svg",
    description: "Brown and white terrier, red harness, nervous around loud traffic. Missing near the River Trail."
  },
  {
    id: "lost-shadow",
    name: "Shadow",
    type: "cat",
    colors: ["black"],
    area: "Cedar Lane",
    date: "May 8",
    image: "assets/shadow.svg",
    description: "Black longhair cat with a tiny white chin spot and yellow eyes. Usually hides under cars."
  },
  {
    id: "lost-bean",
    name: "Bean",
    type: "dog",
    colors: ["tan", "cream"],
    area: "Union Market",
    date: "May 7",
    image: "assets/bean.svg",
    description: "Small tan dog with curly cream ears and a green bandana. Last seen by Union Market."
  },
  {
    id: "lost-nori",
    name: "Nori",
    type: "cat",
    colors: ["black", "white"],
    area: "Pine Avenue",
    date: "May 6",
    image: "assets/nori.svg",
    description: "Tuxedo cat with white socks, white whiskers, and a quiet temperament near Pine Avenue."
  },
  {
    id: "lost-scout-demo",
    name: "Scout",
    type: "dog",
    colors: ["white", "tan"],
    area: "Lakeview District",
    date: "PawBoost-style sample",
    image: "assets/bean.svg",
    source: "Demo sample",
    description: "Small white and tan dog, curled ears, blue tag, last seen near a grocery parking lot in Lakeview District."
  },
  {
    id: "lost-pepper-demo",
    name: "Pepper",
    type: "cat",
    colors: ["black", "white"],
    area: "Willow Creek",
    date: "PawBoost-style sample",
    image: "assets/nori.svg",
    source: "Demo sample",
    description: "Black and white cat with white paws and a narrow blaze on the nose. Shy, may hide under porches."
  },
  {
    id: "lost-honey-demo",
    name: "Honey",
    type: "dog",
    colors: ["golden", "cream"],
    area: "Riverside Avenue",
    date: "PawBoost-style sample",
    image: "assets/milo.svg",
    source: "Demo sample",
    description: "Golden medium-size dog with cream chest markings, purple collar, friendly but easily startled by traffic."
  },
  {
    id: "lost-misty-demo",
    name: "Misty",
    type: "cat",
    colors: ["gray", "silver"],
    area: "East Garden Apartments",
    date: "PawBoost-style sample",
    image: "assets/luna.svg",
    source: "Demo sample",
    description: "Silver gray cat with green eyes and a clipped ear. Last seen close to the East Garden apartment mailboxes."
  }
];

const foundReports = [
  {
    id: "found-park-dog",
    name: "Found near Maple Park",
    type: "dog",
    colors: ["golden", "tan", "white"],
    area: "Maple Park",
    date: "1 hour ago",
    image: "assets/found-gold-dog.svg",
    description: "Friendly golden dog with a blue collar found close to the playground entrance at Maple Park."
  },
  {
    id: "found-gray-cat",
    name: "Found on Oak Street",
    type: "cat",
    colors: ["gray", "silver"],
    area: "Oak Street",
    date: "3 hours ago",
    image: "assets/found-gray-cat.svg",
    description: "Gray cat with bright green eyes spotted behind the Oak Street apartments."
  },
  {
    id: "found-terrier",
    name: "Found by River Trail",
    type: "dog",
    colors: ["brown", "white"],
    area: "River Trail",
    date: "Yesterday",
    image: "assets/found-terrier.svg",
    description: "Brown and white small dog wearing a red harness, seen near the south River Trail bridge."
  },
  {
    id: "found-black-cat",
    name: "Found on Cedar Lane",
    type: "cat",
    colors: ["black", "white"],
    area: "Cedar Lane",
    date: "May 8",
    image: "assets/found-black-cat.svg",
    description: "Black cat with a small white mark under the chin hiding near parked cars on Cedar Lane."
  },
  {
    id: "found-harness-dog-demo",
    name: "Found near a trail entrance",
    type: "dog",
    colors: ["brown", "white"],
    area: "Greenway Trail",
    date: "PawBoost-style sample",
    image: "assets/found-terrier.svg",
    source: "Demo sample",
    description: "Brown and white small dog wearing a red harness, found close to the Greenway Trail entrance."
  },
  {
    id: "found-silver-cat-demo",
    name: "Found behind apartments",
    type: "cat",
    colors: ["gray", "silver"],
    area: "East Garden Apartments",
    date: "PawBoost-style sample",
    image: "assets/found-gray-cat.svg",
    source: "Demo sample",
    description: "Gray cat with bright green eyes found behind apartment buildings. Calm, hungry, and no visible collar."
  },
  {
    id: "found-gold-dog-demo",
    name: "Found by playground",
    type: "dog",
    colors: ["golden", "cream"],
    area: "Riverside Avenue",
    date: "PawBoost-style sample",
    image: "assets/found-gold-dog.svg",
    source: "Demo sample",
    description: "Friendly golden dog with cream chest fur and a purple collar, found near the Riverside playground."
  },
  {
    id: "found-tux-cat-demo",
    name: "Found under porch",
    type: "cat",
    colors: ["black", "white"],
    area: "Willow Creek",
    date: "PawBoost-style sample",
    image: "assets/found-black-cat.svg",
    source: "Demo sample",
    description: "Black and white cat with white paws found hiding under a porch in Willow Creek."
  }
];

const modeCopy = {
  lost: {
    eyebrow: "Lost report",
    title: "Tell us about the pet you lost",
    introTitle: "Start a lost pet report",
    intro: "Upload a clear pet image and describe markings, collar, last seen area, and behavior. When you finish, PetMatch searches nearby found reports.",
    submit: "Finish and search found reports",
    resultsTitle: "Possible found pet matches",
    resultsEyebrow: "Lost report results",
    submittedMode: "Your lost pet report",
    pool: foundReports
  },
  found: {
    eyebrow: "Found report",
    title: "Tell us about the pet you found",
    introTitle: "Start a found pet report",
    intro: "Upload a photo of the pet you found and add where, when, and what details stand out. When you finish, PetMatch searches existing lost pet profiles.",
    submit: "Finish and search lost profiles",
    resultsTitle: "Similar lost pet profiles",
    resultsEyebrow: "Found report results",
    submittedMode: "Your found pet report",
    pool: lostProfiles
  }
};

const colorWords = [
  "black",
  "white",
  "gray",
  "grey",
  "silver",
  "brown",
  "tan",
  "cream",
  "golden",
  "orange",
  "red",
  "blue",
  "green"
];

const DB_NAME = "petmatch-records";
const DB_VERSION = 1;
const DB_STORE = "reports";
const seedProfileCount = lostProfiles.length + foundReports.length;

const state = {
  mode: "lost",
  imageUrl: "",
  imageName: "",
  imageFile: null,
  savedRecords: [],
  dbReady: false,
  dbError: "",
  lastResults: [],
  sortedByScore: true
};

const views = {
  home: document.querySelector('[data-view="home"]'),
  report: document.querySelector('[data-view="report"]'),
  results: document.querySelector('[data-view="results"]')
};

const elements = {
  miniProfiles: document.querySelector("#miniProfiles"),
  modeEyebrow: document.querySelector("#modeEyebrow"),
  flowTitle: document.querySelector("#flowTitle"),
  messageList: document.querySelector("#messageList"),
  reportForm: document.querySelector("#reportForm"),
  petImage: document.querySelector("#petImage"),
  imageStatus: document.querySelector("#imageStatus"),
  previewFrame: document.querySelector("#previewFrame"),
  previewImage: document.querySelector("#previewImage"),
  emptyPreview: document.querySelector("#emptyPreview"),
  description: document.querySelector("#description"),
  species: document.querySelector("#species"),
  area: document.querySelector("#area"),
  contact: document.querySelector("#contact"),
  formError: document.querySelector("#formError"),
  submitLabel: document.querySelector("#submitLabel"),
  activeReportCount: document.querySelector("#activeReportCount"),
  databaseStatus: document.querySelector("#databaseStatus"),
  resultsEyebrow: document.querySelector("#resultsEyebrow"),
  resultsTitle: document.querySelector("#resultsTitle"),
  submittedImage: document.querySelector("#submittedImage"),
  submittedPlaceholder: document.querySelector("#submittedPlaceholder"),
  submittedMode: document.querySelector("#submittedMode"),
  submittedTitle: document.querySelector("#submittedTitle"),
  submittedText: document.querySelector("#submittedText"),
  matchCount: document.querySelector("#matchCount"),
  resultsGrid: document.querySelector("#resultsGrid"),
  sortToggle: document.querySelector("#sortToggle")
};

function setView(name) {
  Object.values(views).forEach((view) => view.classList.remove("is-active"));
  views[name].classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderMiniProfiles() {
  const savedLostProfiles = state.savedRecords
    .filter((record) => record.mode === "lost")
    .map(recordToProfile);
  const profiles = [...savedLostProfiles, ...lostProfiles].slice(0, 4);

  elements.miniProfiles.innerHTML = profiles.map((profile) => `
    <article class="mini-profile">
      <img src="${escapeHtml(profile.image)}" alt="${escapeHtml(profile.name)}, ${escapeHtml(profile.type)}">
      <div>
        <strong>${escapeHtml(profile.name)}</strong>
        <span>${escapeHtml(profile.area)}</span>
      </div>
    </article>
  `).join("");
}

function updateDatabaseStatus() {
  const total = seedProfileCount + state.savedRecords.length;
  elements.activeReportCount.textContent = `${total} active profiles`;

  if (state.dbError) {
    elements.databaseStatus.textContent = "Local browser database is unavailable, so new reports will not persist after refresh.";
    return;
  }

  const savedCount = state.savedRecords.length;
  const recordText = savedCount === 1 ? "1 saved report" : `${savedCount} saved reports`;
  elements.databaseStatus.textContent = `Local browser database ready: ${recordText} stored on this device.`;
}

function startFlow(mode) {
  state.mode = mode;
  state.sortedByScore = true;
  const copy = modeCopy[mode];

  elements.modeEyebrow.textContent = copy.eyebrow;
  elements.flowTitle.textContent = copy.title;
  elements.submitLabel.textContent = copy.submit;
  elements.formError.textContent = "";
  elements.messageList.innerHTML = `
    <div class="message bot">
      <strong>${copy.introTitle}</strong>
      ${copy.intro}
    </div>
  `;

  elements.reportForm.reset();
  clearImagePreview();
  setView("report");
  elements.description.focus();
}

function clearImagePreview() {
  if (state.imageUrl) {
    URL.revokeObjectURL(state.imageUrl);
  }

  state.imageUrl = "";
  state.imageName = "";
  state.imageFile = null;
  elements.imageStatus.textContent = "No image selected";
  elements.previewFrame.classList.remove("has-image");
  elements.previewImage.removeAttribute("src");
  elements.previewImage.alt = "";
}

function handleImageUpload(event) {
  const [file] = event.target.files;
  if (!file) {
    clearImagePreview();
    return;
  }

  if (!file.type.startsWith("image/")) {
    elements.formError.textContent = "Please choose an image file.";
    clearImagePreview();
    return;
  }

  if (state.imageUrl) {
    URL.revokeObjectURL(state.imageUrl);
  }

  state.imageUrl = URL.createObjectURL(file);
  state.imageName = file.name;
  state.imageFile = file;
  elements.imageStatus.textContent = file.name;
  elements.previewImage.src = state.imageUrl;
  elements.previewImage.alt = `Uploaded image: ${file.name}`;
  elements.previewFrame.classList.add("has-image");
  elements.formError.textContent = "";

  addUserMessage(`Image uploaded: ${file.name}`);
}

function addUserMessage(text) {
  const node = document.createElement("div");
  node.className = "message user";
  node.textContent = text;
  elements.messageList.appendChild(node);
  elements.messageList.scrollTop = elements.messageList.scrollHeight;
}

function addBotMessage(title, text) {
  const node = document.createElement("div");
  node.className = "message bot";
  node.innerHTML = `<strong>${title}</strong>${text}`;
  elements.messageList.appendChild(node);
  elements.messageList.scrollTop = elements.messageList.scrollHeight;
}

function openDatabase() {
  if (!("indexedDB" in window)) {
    state.dbError = "IndexedDB is not supported in this browser.";
    updateDatabaseStatus();
    return Promise.resolve(null);
  }

  return new Promise((resolve) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(DB_STORE)) {
        const store = db.createObjectStore(DB_STORE, { keyPath: "id" });
        store.createIndex("mode", "mode", { unique: false });
        store.createIndex("species", "species", { unique: false });
        store.createIndex("createdAt", "createdAt", { unique: false });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => {
      state.dbError = request.error ? request.error.message : "Could not open the local database.";
      updateDatabaseStatus();
      resolve(null);
    };
  });
}

function getAllRecords(db) {
  if (!db) {
    return Promise.resolve([]);
  }

  return new Promise((resolve) => {
    const request = db.transaction(DB_STORE, "readonly").objectStore(DB_STORE).getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => {
      state.dbError = request.error ? request.error.message : "Could not read saved reports.";
      resolve([]);
    };
  });
}

function saveRecord(db, record) {
  if (!db) {
    return Promise.resolve(false);
  }

  return new Promise((resolve) => {
    const request = db.transaction(DB_STORE, "readwrite").objectStore(DB_STORE).put(record);
    request.onsuccess = () => resolve(true);
    request.onerror = () => {
      state.dbError = request.error ? request.error.message : "Could not save this report.";
      resolve(false);
    };
  });
}

function fileToDataUrl(file) {
  if (!file) {
    return Promise.resolve("");
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("Could not read image file."));
    reader.readAsDataURL(file);
  });
}

function normalizeText(value) {
  return value.trim().toLowerCase();
}

function tokenize(value) {
  return normalizeText(value)
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
}

function extractColors(...values) {
  const tokens = new Set(tokenize(values.filter(Boolean).join(" ")));
  return colorWords.filter((color) => tokens.has(color) || (color === "gray" && tokens.has("grey")));
}

function getFallbackImage(mode, type) {
  if (mode === "found") {
    if (type === "cat") {
      return "assets/found-gray-cat.svg";
    }
    return "assets/found-gold-dog.svg";
  }

  if (type === "cat") {
    return "assets/luna.svg";
  }
  return "assets/milo.svg";
}

function recordToProfile(record) {
  const type = record.species || "other";
  const reportDate = record.createdAt
    ? new Date(record.createdAt).toLocaleDateString(undefined, { month: "short", day: "numeric" })
    : "Saved report";

  return {
    id: record.id,
    name: record.mode === "lost" ? "Saved lost report" : "Saved found report",
    type,
    colors: record.colors || extractColors(record.description, record.area),
    area: record.area || "Area not listed",
    date: `Saved ${reportDate}`,
    image: record.imageDataUrl || getFallbackImage(record.mode, type),
    source: "Saved locally",
    description: record.description || "Image-only report saved in the local browser database.",
    contact: record.contact || ""
  };
}

function getSearchPool(mode) {
  const savedProfiles = state.savedRecords
    .filter((record) => record.mode === (mode === "lost" ? "found" : "lost"))
    .map(recordToProfile);

  return [...modeCopy[mode].pool, ...savedProfiles];
}

function scoreProfile(profile, submission) {
  const text = normalizeText(`${submission.description} ${submission.area}`);
  const tokens = new Set(tokenize(text));
  let score = 18;
  const reasons = [];

  if (submission.species && submission.species === profile.type) {
    score += 26;
    reasons.push(profile.type);
  }

  const colorHits = profile.colors.filter((color) => tokens.has(color) || (color === "gray" && tokens.has("grey")));
  if (colorHits.length) {
    score += Math.min(28, colorHits.length * 14);
    reasons.push(colorHits[0]);
  }

  const areaTokens = tokenize(profile.area);
  if (areaTokens.some((token) => tokens.has(token))) {
    score += 22;
    reasons.push("nearby area");
  }

  const profileTokens = tokenize(profile.description);
  const overlap = profileTokens.filter((token) => token.length > 3 && tokens.has(token));
  score += Math.min(18, overlap.length * 3);

  if (submission.hasImage) {
    score += 8;
  }

  if (!submission.description && !submission.area && !submission.species) {
    score = 42;
  }

  return {
    ...profile,
    score: Math.min(96, score),
    reasons: reasons.length ? reasons : ["visual profile"]
  };
}

function buildSubmission() {
  return {
    mode: state.mode,
    description: elements.description.value.trim(),
    species: elements.species.value,
    area: elements.area.value.trim(),
    contact: elements.contact.value.trim(),
    hasImage: Boolean(state.imageUrl),
    imageUrl: state.imageUrl,
    imageName: state.imageName
  };
}

function validateSubmission(submission) {
  if (!submission.description && !submission.hasImage) {
    return "Add a description or upload an image before searching.";
  }

  if (submission.description && submission.description.length < 12) {
    return "Add a little more detail so the match search has something to compare.";
  }

  return "";
}

async function handleSubmit(event) {
  event.preventDefault();
  const submission = buildSubmission();
  const error = validateSubmission(submission);
  elements.formError.textContent = error;

  if (error) {
    return;
  }

  const shortText = submission.description || "Image-only report";
  addUserMessage(shortText);
  addBotMessage("Saving and searching", "Saving this report to the local browser database, then comparing pet type, colors, area clues, and image availability against existing reports.");

  let imageDataUrl = "";
  try {
    imageDataUrl = await fileToDataUrl(state.imageFile);
  } catch (readError) {
    elements.formError.textContent = "The report was not saved because the image could not be read.";
    return;
  }

  const record = {
    id: `${submission.mode}-${Date.now()}`,
    mode: submission.mode,
    species: submission.species || "other",
    description: submission.description,
    area: submission.area,
    contact: submission.contact,
    imageName: submission.imageName,
    imageDataUrl,
    colors: extractColors(submission.description, submission.area),
    createdAt: new Date().toISOString()
  };

  const db = await openDatabase();
  const saved = await saveRecord(db, record);
  if (saved) {
    state.savedRecords = [record, ...state.savedRecords.filter((item) => item.id !== record.id)];
    updateDatabaseStatus();
    renderMiniProfiles();
  }

  const results = getSearchPool(state.mode)
    .map((profile) => scoreProfile(profile, submission))
    .sort((a, b) => b.score - a.score);

  state.lastResults = results;
  renderResults(submission, results);
  setView("results");
}

function renderResults(submission, results) {
  const copy = modeCopy[submission.mode];
  const hasImage = Boolean(submission.imageUrl);

  elements.resultsEyebrow.textContent = copy.resultsEyebrow;
  elements.resultsTitle.textContent = copy.resultsTitle;
  elements.submittedMode.textContent = copy.submittedMode;
  elements.submittedTitle.textContent = submission.species ? `${titleCase(submission.species)} report` : "Report summary";
  elements.submittedText.textContent = submission.description || "No written description added.";

  const submittedImageFrame = elements.submittedImage.parentElement;
  submittedImageFrame.classList.toggle("has-image", hasImage);
  if (hasImage) {
    elements.submittedImage.src = submission.imageUrl;
    elements.submittedImage.alt = `Uploaded ${submission.mode} report image`;
  } else {
    elements.submittedImage.removeAttribute("src");
    elements.submittedImage.alt = "";
  }

  renderMatchGrid(results);
}

function renderMatchGrid(results) {
  const displayResults = state.sortedByScore
    ? [...results].sort((a, b) => b.score - a.score)
    : [...results].sort((a, b) => a.date.localeCompare(b.date));

  elements.matchCount.textContent = `${displayResults.length} matches`;
  elements.sortToggle.textContent = state.sortedByScore ? "Sort by newest" : "Sort by best match";
  elements.resultsGrid.innerHTML = displayResults.map((profile) => `
    <article class="match-card">
      <img src="${escapeHtml(profile.image)}" alt="${escapeHtml(profile.name)}, ${escapeHtml(profile.type)}">
      <div class="match-body">
        <div class="match-topline">
          <h3>${escapeHtml(profile.name)}</h3>
          <span class="score">${profile.score}%</span>
        </div>
        <div class="match-meta">
          <span>${escapeHtml(titleCase(profile.type))}</span>
          <span>${escapeHtml(profile.area)}</span>
          <span>${escapeHtml(profile.date)}</span>
          ${profile.source ? `<span>${escapeHtml(profile.source)}</span>` : ""}
        </div>
        <p>${escapeHtml(profile.description)}</p>
        <button class="contact-button" type="button">Open profile</button>
      </div>
    </article>
  `).join("");
}

function titleCase(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function initializeApp() {
  renderMiniProfiles();
  updateDatabaseStatus();

  const db = await openDatabase();
  state.savedRecords = await getAllRecords(db);
  state.savedRecords.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
  state.dbReady = Boolean(db);
  updateDatabaseStatus();
  renderMiniProfiles();
}

document.querySelectorAll("[data-mode]").forEach((button) => {
  button.addEventListener("click", () => startFlow(button.dataset.mode));
});

document.querySelectorAll("[data-action='home']").forEach((button) => {
  button.addEventListener("click", () => setView("home"));
});

document.querySelector("[data-action='edit']").addEventListener("click", () => setView("report"));

elements.petImage.addEventListener("change", handleImageUpload);
elements.reportForm.addEventListener("submit", handleSubmit);
elements.sortToggle.addEventListener("click", () => {
  state.sortedByScore = !state.sortedByScore;
  renderMatchGrid(state.lastResults);
});

initializeApp();
