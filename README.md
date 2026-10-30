# EWEM Academic Assignment Portfolio (2026–27)

**Student Details:**
- **Name:** Yash Redkar
- **Roll Number:** 24102B0011
- **Class:** TE CMPN B
- **Department:** Department of Computer Engineering
- **Institution:** Vidyalankar Institute of Technology, Mumbai
- **Subject:** E-Waste Management (EWEM)
- **Academic Year:** 2026–27

---

## 🌟 Overview

A simple, modern, and professional academic portfolio dashboard designed for course evaluation and assignment submissions. Professors can browse, search, filter, preview, and download assignments seamlessly.

### ✨ Key Features:
- **Consistent Academic Details:** Yash Redkar (24102B0011) prominently displayed across all headers, cards, and metadata.
- **Forest Green & Mint Theme:** Dark forest green, light mint green, clean white, and soft warm cream background for optimal readability.
- **Dynamic Categorization:**
  - **ISA (In-Semester Assessment):** 5 items (including the interactive visual board submission link).
  - **ESE (End-Semester Evaluation):** 6 items.
  - **Additional Activities:** 2 items (MSE 2 Case Studies & XAI Research Paper).
  - **Other Documents:** 2 directory items.
- **In-Browser File Previews:**
  - **PDF Documents:** Embedded viewer with fullscreen and open-in-new-tab options.
  - **Excel Spreadsheets:** Multi-sheet interactive preview rendered via SheetJS.
  - **Online Visual Board:** Direct access button opening TheBricks visual board.
- **Instant Search & Filter:** Filter by category or search by topic, title, and tags in real-time.
- **Netlify Ready:** Preconfigured `netlify.toml` with MIME types and caching headers.

---

## 📂 Project Structure

```text
Ewaste Dashboard/
├── index.html                 # Main dashboard markup
├── netlify.toml               # Netlify configuration & security headers
├── README.md                  # Project documentation
├── css/
│   └── style.css              # Custom styling & color palette
├── js/
│   ├── data.js                # Central assignment data source
│   └── app.js                 # Dynamic rendering, search, filters & modal
└── files/                     # Preserved assignment files
    ├── DOC-20260831-WA0011.pdf
    ├── Ewaste Assignment.pdf
    ├── Explainable_AI_Final_Research_Paper1.pdf
    ├── LEED_Buildings_Weightage_and_Scoring.xlsx
    ├── One_Page_Report_State_EWaste_West_Bengal.pdf
    ├── State_Wise_E_Waste_Companies(1).pdf
    ├── State_Wise_E_Waste_Companies.pdf
    ├── Yash EWEM Assignment0.pdf
    ├── Yash EWaste Case Study Report.pdf
    ├── Yash Ewaste Assignment.pdf
    ├── Yash Ewaste_ Recovery Process.pdf
    ├── Yash_24102B0011_Ewaste_Awareness_poster (1).pdf
    ├── Yash_Carbon_footprint.pdf
    └── Yash_EWaste_Comparison_and_Rules.pdf
```

---

## 🚀 Deployment to Netlify

### Option 1: Netlify Drop (Drag & Drop)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop the `Ewaste Dashboard` folder into the upload box.
3. Your site is live immediately!

### Option 2: Push to GitHub & Connect to Netlify
1. Initialize Git and push to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of EWEM Assignment Portfolio"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```
2. Log in to [Netlify](https://www.netlify.com/), click **"Add new site"** -> **"Import an existing project"**.
3. Select your repository. Netlify will detect the `netlify.toml` and deploy automatically.
