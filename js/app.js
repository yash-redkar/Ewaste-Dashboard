/**
 * Application Controller
 * Handles filtering, search, dynamic cards rendering, and modal previews
 */

document.addEventListener("DOMContentLoaded", () => {
  let currentCategory = "all";
  let searchQuery = "";
  let isModalFullscreen = false;

  // Cache DOM Elements
  const cardsContainer = document.getElementById("cardsContainer");
  const searchInput = document.getElementById("searchInput");
  const searchClearBtn = document.getElementById("searchClearBtn");
  const categoryTabsContainer = document.getElementById("categoryTabs");

  // Stats Counters
  const countTotalEl = document.getElementById("statTotal");
  const countIsaEl = document.getElementById("statIsa");
  const countEseEl = document.getElementById("statEse");
  const countExtraEl = document.getElementById("statExtra");

  // Modal Elements
  const modalOverlay = document.getElementById("previewModal");
  const modalDocTitle = document.getElementById("modalDocTitle");
  const modalDocCategory = document.getElementById("modalDocCategory");
  const modalBody = document.getElementById("modalBody");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalFullscreenBtn = document.getElementById("modalFullscreenBtn");
  const modalDownloadBtn = document.getElementById("modalDownloadBtn");
  const modalNewTabBtn = document.getElementById("modalNewTabBtn");
  const modalContainer = document.querySelector(".modal-container");

  // 1. Calculate & Render Overview Statistics from Data
  function updateStats() {
    const total = ASSIGNMENTS.length;
    const isaCount = ASSIGNMENTS.filter(a => a.category === "isa").length;
    const eseCount = ASSIGNMENTS.filter(a => a.category === "ese").length;
    const extraCount = ASSIGNMENTS.filter(a => a.category === "extra").length;

    if (countTotalEl) countTotalEl.textContent = total;
    if (countIsaEl) countIsaEl.textContent = isaCount;
    if (countEseEl) countEseEl.textContent = eseCount;
    if (countExtraEl) countExtraEl.textContent = extraCount;
  }

  // 2. Render Category Filter Tabs with dynamic counts
  function renderCategoryTabs() {
    if (!categoryTabsContainer) return;
    categoryTabsContainer.innerHTML = "";

    CATEGORIES.forEach(cat => {
      let count = 0;
      if (cat.id === "all") {
        count = ASSIGNMENTS.length;
      } else {
        count = ASSIGNMENTS.filter(a => a.category === cat.id).length;
      }

      const btn = document.createElement("button");
      btn.className = `tab-btn ${currentCategory === cat.id ? "active" : ""}`;
      btn.innerHTML = `
        <span>${cat.label}</span>
        <span class="tab-badge">${count}</span>
      `;
      btn.addEventListener("click", () => {
        currentCategory = cat.id;
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderCards();
      });

      categoryTabsContainer.appendChild(btn);
    });
  }

  // 3. Filter & Search Assignments
  function getFilteredAssignments() {
    return ASSIGNMENTS.filter(item => {
      const matchesCategory = currentCategory === "all" || item.category === currentCategory;
      if (!matchesCategory) return false;

      if (!searchQuery) return true;

      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description ? item.description.toLowerCase().includes(q) : false;
      const matchTags = item.tags ? item.tags.some(t => t.toLowerCase().includes(q)) : false;
      const matchFileName = item.fileName ? item.fileName.toLowerCase().includes(q) : false;

      return matchTitle || matchDesc || matchTags || matchFileName;
    });
  }

  // 4. Render Assignment Cards Grid
  function renderCards() {
    if (!cardsContainer) return;
    const items = getFilteredAssignments();

    if (items.length === 0) {
      cardsContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3 class="empty-title">No matching assignments found</h3>
          <p class="empty-desc">Try clearing the search query or selecting a different category tab.</p>
        </div>
      `;
      return;
    }

    cardsContainer.innerHTML = items.map(item => {
      const isOnline = item.isOnline || false;
      const tagPills = (item.tags || []).map(t => `<span class="card-tag-pill">${t}</span>`).join("");
      
      let fileIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>`;
      if (item.type === "Excel") {
        fileIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg>`;
      } else if (isOnline) {
        fileIcon = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;
      }

      const categoryClass = item.category || "other";

      let actionButtons = "";
      if (isOnline) {
        actionButtons = `
          <a href="${item.onlineUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-link-action">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            Open Submission
          </a>
        `;
      } else {
        actionButtons = `
          <button class="btn btn-primary" onclick="openPreview('${item.id}')">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            Preview
          </button>
          <a href="${item.filePath}" download="${item.fileName}" class="btn btn-secondary">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Download
          </a>
        `;
      }

      return `
        <div class="assignment-card">
          <div class="card-top">
            <span class="category-tag ${categoryClass}">${item.categoryLabel}</span>
            <span class="filetype-badge">${fileIcon} ${item.type}</span>
          </div>
          <div class="card-body">
            <h3 class="card-title">${item.title}</h3>
            <p class="card-desc">${item.description || "Academic assignment submission document."}</p>
            <div class="card-tags">
              ${tagPills}
            </div>
          </div>
          <div class="card-actions">
            ${actionButtons}
          </div>
        </div>
      `;
    }).join("");
  }

  // 5. Search Box Listener
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value.trim();
      if (searchClearBtn) {
        searchClearBtn.style.display = searchQuery ? "block" : "none";
      }
      renderCards();
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      searchClearBtn.style.display = "none";
      searchInput.focus();
      renderCards();
    });
  }

  // 6. Modal Preview Function
  window.openPreview = function(assignmentId) {
    const item = ASSIGNMENTS.find(a => a.id === assignmentId);
    if (!item) return;

    if (item.isOnline) {
      window.open(item.onlineUrl, "_blank");
      return;
    }

    modalDocTitle.textContent = item.title;
    modalDocCategory.textContent = item.categoryLabel;
    modalDocCategory.className = `category-tag ${item.category}`;

    modalDownloadBtn.href = item.filePath;
    modalDownloadBtn.setAttribute("download", item.fileName);
    modalNewTabBtn.href = item.filePath;

    // Clear previous modal content
    modalBody.innerHTML = `
      <div class="modal-loading">
        <div class="spinner"></div>
        <span>Loading document preview...</span>
      </div>
    `;

    modalOverlay.classList.add("active");
    document.body.style.overflow = "hidden";

    // Handle Excel Preview vs PDF Preview
    if (item.type === "Excel") {
      renderExcelPreview(item.filePath);
    } else {
      // PDF embed
      setTimeout(() => {
        modalBody.innerHTML = `
          <iframe 
            src="${item.filePath}#toolbar=1&navpanes=0" 
            class="preview-frame"
            title="${item.title}"
          ></iframe>
        `;
      }, 100);
    }
  };

  // Excel Preview Handler using SheetJS (XLSX)
  function renderExcelPreview(filePath) {
    if (typeof XLSX === "undefined") {
      modalBody.innerHTML = `
        <div class="modal-loading">
          <p>Spreadsheet preview is available for download.</p>
          <a href="${filePath}" download class="btn btn-primary" style="margin-top:1rem;">Download Excel File</a>
        </div>
      `;
      return;
    }

    fetch(filePath)
      .then(res => {
        if (!res.ok) throw new Error("Could not load Excel file");
        return res.arrayBuffer();
      })
      .then(data => {
        const workbook = XLSX.read(data, { type: "array" });
        const sheetNames = workbook.SheetNames;

        if (!sheetNames || sheetNames.length === 0) {
          throw new Error("No sheets found in workbook");
        }

        let containerHtml = `
          <div class="excel-preview-container">
            <div class="excel-sheet-tabs" id="sheetTabs">
              ${sheetNames.map((name, idx) => `
                <button class="sheet-tab-btn ${idx === 0 ? "active" : ""}" data-sheet="${name}">
                  ${name}
                </button>
              `).join("")}
            </div>
            <div class="excel-table-scroll" id="sheetTableContainer"></div>
          </div>
        `;

        modalBody.innerHTML = containerHtml;

        const tableContainer = document.getElementById("sheetTableContainer");
        const sheetTabs = document.querySelectorAll(".sheet-tab-btn");

        function showSheet(name) {
          const worksheet = workbook.Sheets[name];
          const htmlTable = XLSX.utils.sheet_to_html(worksheet, { id: "excelSheetTable", editable: false });
          tableContainer.innerHTML = htmlTable;

          const tableEl = tableContainer.querySelector("table");
          if (tableEl) {
            tableEl.className = "excel-table";
          }
        }

        // Show first sheet
        showSheet(sheetNames[0]);

        // Tab click listeners
        sheetTabs.forEach(tab => {
          tab.addEventListener("click", () => {
            sheetTabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            showSheet(tab.getAttribute("data-sheet"));
          });
        });
      })
      .catch(err => {
        console.error("Excel preview error:", err);
        modalBody.innerHTML = `
          <div class="modal-loading">
            <p>Could not render embedded spreadsheet preview.</p>
            <a href="${filePath}" download class="btn btn-primary" style="margin-top:1rem;">Download File (${filePath.split('/').pop()})</a>
          </div>
        `;
      });
  }

  // Close Modal Handler
  function closeModal() {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
    modalBody.innerHTML = "";
    if (isModalFullscreen) {
      toggleModalFullscreen();
    }
  }

  function toggleModalFullscreen() {
    isModalFullscreen = !isModalFullscreen;
    modalContainer.classList.toggle("fullscreen", isModalFullscreen);
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  if (modalFullscreenBtn) modalFullscreenBtn.addEventListener("click", toggleModalFullscreen);

  // Close on Backdrop Click
  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Close on ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal();
    }
  });

  // Initial Boot
  updateStats();
  renderCategoryTabs();
  renderCards();
});
