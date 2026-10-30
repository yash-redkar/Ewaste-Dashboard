/**
 * Central Assignment Data Store
 * Student: Yash Redkar (24102B0011)
 * Class: TE CMPN B | Vidyalankar Institute of Technology, Mumbai
 * Academic Year: 2026–27
 */

const STUDENT_INFO = {
  name: "Yash Redkar",
  rollNo: "24102B0011",
  class: "TE CMPN B",
  department: "Computer Engineering",
  college: "Vidyalankar Institute of Technology, Mumbai",
  subject: "E-Waste Management (EWEM)",
  academicYear: "2026–27",
  courseCode: "EWEM"
};

const CATEGORIES = [
  { id: "all", label: "All Assignments" },
  { id: "isa", label: "ISA" },
  { id: "ese", label: "ESE" },
  { id: "extra", label: "Additional Activities" },
  { id: "other", label: "Other Documents" }
];

const ASSIGNMENTS = [
  // ISA Submissions
  {
    id: "isa-toxic-trail",
    title: "Class Task: Toxic Trail Simulation",
    category: "isa",
    categoryLabel: "ISA",
    type: "PDF",
    filePath: "files/Yash Ewaste Assignment.pdf",
    fileName: "Yash Ewaste Assignment.pdf",
    description: "Handwritten task tracing heavy metals (Lead, Chromium, Arsenic, Cadmium, Mercury) across the e-waste lifecycle, informal recycling chains, and environmental contamination.",
    tags: ["Handwritten", "Toxic Metals", "E-Waste Flow"],
    date: "July 2026"
  },
  {
    id: "isa-assgn-0",
    title: "Assignment 0: Course Insights & Curriculum Mapping",
    category: "isa",
    categoryLabel: "ISA",
    type: "PDF",
    filePath: "files/Yash EWEM Assignment0.pdf",
    fileName: "Yash EWEM Assignment0.pdf",
    description: "Detailed course insights covering the autonomous curriculum, 7 core buckets, Course Outcomes (CO1–CO5) mapped to Program Outcomes (POs), and ISA evaluation rubrics.",
    tags: ["Curriculum", "CO–PO Mapping", "Evaluation Rubric"],
    date: "July 2026"
  },
  {
    id: "isa-online-board",
    title: "Assignment 1: Interactive State E-Waste Board (Online Submission)",
    category: "isa",
    categoryLabel: "ISA",
    type: "Online Submission",
    isOnline: true,
    onlineUrl: "https://app.thebricks.com/file/16c8d1f7-ac6c-4722-ab63-f9936549b5d4/1066@3e68db30-fa84-422e-a46f-4384cd4b692b:0/visual-board?classId=5e850cb6-c326-432c-9ad5-aea6420f4ec7&assignmentId=ad40ff9f-8530-4da8-848a-1430e74bd40d&submissionId=cbcb18f7-e537-f8e6-f354-672c29e5b81e",
    description: "Interactive visual board submission on TheBricks platform presenting comprehensive state-level e-waste generation, recovery metrics, and visual data maps.",
    tags: ["TheBricks Platform", "Visual Board", "Interactive"],
    date: "August 2026"
  },
  {
    id: "isa-west-bengal-report",
    title: "State E-Waste Management Report — West Bengal",
    category: "isa",
    categoryLabel: "ISA",
    type: "PDF",
    filePath: "files/One_Page_Report_State_EWaste_West_Bengal.pdf",
    fileName: "One_Page_Report_State_EWaste_West_Bengal.pdf",
    description: "State-specific diagnostic report analyzing e-waste generation volumes, registered dismantling centers, collection efficiency, and EPR implementation across West Bengal.",
    tags: ["West Bengal", "State Report", "EPR Compliance"],
    date: "August 2026"
  },
  {
    id: "isa-india-scenario",
    title: "E-Waste India Scenario Comparison & Reduction Strategies",
    category: "isa",
    categoryLabel: "ISA",
    type: "PDF",
    filePath: "files/Ewaste Assignment.pdf",
    fileName: "Ewaste Assignment.pdf",
    description: "Comparative assessment benchmarking India's e-waste metrics against global counterparts, with actionable strategic methodologies to curb informal processing.",
    tags: ["Global Comparison", "Policy & Strategy", "EPR"],
    date: "August 2026"
  },

  // ESE Submissions
  {
    id: "ese-carbon-footprint",
    title: "Personal Carbon Footprint Tracker",
    category: "ese",
    categoryLabel: "ESE",
    type: "PDF",
    filePath: "files/Yash_Carbon_footprint.pdf",
    fileName: "Yash_Carbon_footprint.pdf",
    description: "Comprehensive personal emissions calculation evaluating energy consumption, multi-modal transport, food consumption, and secondary lifestyle emissions.",
    tags: ["Emissions Calculator", "CO2e Analysis", "Sustainability"],
    date: "October 2026"
  },
  {
    id: "ese-country-rules",
    title: "E-Waste Comparison & Regulations: 5 Nations",
    category: "ese",
    categoryLabel: "ESE",
    type: "PDF",
    filePath: "files/Yash_EWaste_Comparison_and_Rules.pdf",
    fileName: "Yash_EWaste_Comparison_and_Rules.pdf",
    description: "Cross-national policy analysis comparing e-waste regulatory frameworks, EPR mandates, and collection regimes across China, India, Russia, Thailand, and Singapore.",
    tags: ["International Policy", "China & India", "Comparative Study"],
    date: "August 2026"
  },
  {
    id: "ese-hydrometallurgy",
    title: "E-Waste Recovery Using Hydrometallurgy & Process Modifications",
    category: "ese",
    categoryLabel: "ESE",
    type: "PDF",
    filePath: "files/Yash Ewaste_ Recovery Process.pdf",
    fileName: "Yash Ewaste_ Recovery Process.pdf",
    description: "Technical study of hydrometallurgical extraction for valuable metal recovery from e-waste, detailing process modifications for higher yield, cost reduction, and green DES leaching.",
    tags: ["Hydrometallurgy", "Green Leaching", "Process Redesign"],
    date: "August 2026"
  },
  {
    id: "ese-compliance-checklist",
    title: "E-Waste Rules 2022 Compliance Verification Checklist",
    category: "ese",
    categoryLabel: "ESE",
    type: "PDF",
    filePath: "files/DOC-20260831-WA0011.pdf",
    fileName: "DOC-20260831-WA0011.pdf",
    description: "Compliance audit checklist evaluating premier electronics manufacturing enterprises in India against statutory mandates and CPCB guidelines under E-Waste Rules 2022.",
    tags: ["CPCB Guidelines", "Manufacturer Audit", "EPR Verification"],
    date: "August 2026"
  },
  {
    id: "ese-campaign-poster",
    title: "E-Waste Awareness & Collection Campaign Poster",
    category: "ese",
    categoryLabel: "ESE",
    type: "PDF",
    filePath: "files/Yash_24102B0011_Ewaste_Awareness_poster (1).pdf",
    fileName: "Yash_24102B0011_Ewaste_Awareness_poster (1).pdf",
    description: "Student awareness campaign poster promoting responsible electronics disposal, toxic waste prevention, and formal campus recycling drives.",
    tags: ["Campus Campaign", "Visual Poster", "Public Awareness"],
    date: "September 2026"
  },
  {
    id: "ese-leed-scoring",
    title: "LEED Green Buildings Weightage & Scoring Framework",
    category: "ese",
    categoryLabel: "ESE",
    type: "Excel",
    filePath: "files/LEED_Buildings_Weightage_and_Scoring.xlsx",
    fileName: "LEED_Buildings_Weightage_and_Scoring.xlsx",
    description: "Comprehensive multi-sheet spreadsheet scoring model for LEED green building certification credits: Sustainable Sites, Water, Energy, Materials, and Indoor Environmental Quality.",
    tags: ["LEED Certification", "Green Buildings", "Scorecard Model"],
    date: "October 2026"
  },

  // Additional Activities
  {
    id: "extra-case-study",
    title: "Waste, E-Waste and Circular Economy: 10 Case Studies Report (MSE 2)",
    category: "extra",
    categoryLabel: "Additional Activities",
    type: "PDF",
    filePath: "files/Yash EWaste Case Study Report.pdf",
    fileName: "Yash EWaste Case Study Report.pdf",
    description: "Extensive 27-page examination report prepared for Mid-Semester Examination 2, detailing 10 in-depth international and domestic case studies with SWOT matrices.",
    tags: ["MSE 2 Exam", "10 Case Studies", "SWOT Analysis"],
    date: "September 2026"
  },
  {
    id: "extra-xai-paper",
    title: "Research Paper: Explainable Artificial Intelligence (XAI)",
    category: "extra",
    categoryLabel: "Additional Activities",
    type: "PDF",
    filePath: "files/Explainable_AI_Final_Research_Paper1.pdf",
    fileName: "Explainable_AI_Final_Research_Paper1.pdf",
    description: "Formal academic research paper investigating post-hoc explanation techniques, empirical comparisons, and interpretability evaluations in machine learning.",
    tags: ["IEEE Format", "Explainable AI", "Research Paper"],
    date: "October 2026"
  },

  // Other Documents
  {
    id: "other-companies-1",
    title: "National Directory of State-Wise E-Waste Recovery Facilities",
    category: "other",
    categoryLabel: "Other Documents",
    type: "PDF",
    filePath: "files/State_Wise_E_Waste_Companies.pdf",
    fileName: "State_Wise_E_Waste_Companies.pdf",
    description: "National directory and regional assessment cataloging authorized e-waste dismantlers, licensed recovery networks, and capacity infrastructure across states.",
    tags: ["Facilities Directory", "Authorized Recyclers", "State Breakdown"],
    date: "August 2026"
  }
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = { STUDENT_INFO, CATEGORIES, ASSIGNMENTS };
}
