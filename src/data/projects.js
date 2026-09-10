import bookTrackerImage from "../assets/images/book-tracker.webp";
import financeTrackerImage from "../assets/images/finance-tracker.webp";
import journalBlogImage from "../assets/images/journal-blog.webp";

const projects = [
  {
    id: 1,
    title: "Personal Finance Tracker",
    category: "Full-stack financial application",
    image: financeTrackerImage,
    imageAlt:
      "Personal Finance Tracker dashboard showing financial summaries, accounts, and recent transactions",
    imageWidth: 1600,
    imageHeight: 900,
    description:
      "A secure personal finance application for managing accounts, categories, and financial transactions through an accessible, responsive interface.",
    highlights: [
      "Session-based authentication and protected user data",
      "Account, category, and transaction CRUD operations",
      "Search, filtering, sorting, pagination, and archiving",
      "Responsive interface with light and dark themes",
    ],
    technologies: [
      "React",
      "Vite",
      "React Router",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Neon",
    ],
    repositoryUrl: "https://github.com/MathieuSmuk/personal-finance-tracker",
    liveUrl: "https://personal-finance-tracker-v1.onrender.com",
  },
  {
    id: 2,
    title: "Journal Blog Platform",
    category: "Full-stack publishing platform",
    image: journalBlogImage,
    imageAlt:
      "Journal Blog Platform showing published articles, author details, and content navigation",
    imageWidth: 1600,
    imageHeight: 900,
    description:
      "A full-stack publishing platform where users can create profiles, write Markdown posts, manage private drafts, and discover published content.",
    highlights: [
      "JWT authentication and protected routes",
      "Post creation, editing, drafts, and publishing",
      "Markdown preview, tags, categories, and search",
      "Ownership authorization and responsive user interface",
    ],
    technologies: [
      "React",
      "Vite",
      "React Router",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Neon",
      "JWT",
    ],
    repositoryUrl: "https://github.com/MathieuSmuk/journal-blog",
    liveUrl: "https://journal-blog-d2qr.onrender.com",
  },
  {
    id: 3,
    title: "Book Tracker",
    category: "Server-rendered CRUD application",
    image: bookTrackerImage,
    imageAlt:
      "Book Tracker library showing book covers, ratings, filtering controls, and pagination",
    imageWidth: 1600,
    imageHeight: 900,
    description:
      "A book-tracking application for recording completed books, ratings, dates, and notes while supporting organized browsing of a personal library.",
    highlights: [
      "Complete create, read, update, and delete workflow",
      "Dynamic SQL filtering, sorting, and pagination",
      "Server-side and database validation",
      "Open Library cover integration",
    ],
    technologies: [
      "Node.js",
      "Express",
      "EJS",
      "PostgreSQL",
      "JavaScript",
      "CSS",
    ],
    repositoryUrl: "https://github.com/MathieuSmuk/bookshelf-tracker",
    liveUrl: "https://bookshelf-tracker.onrender.com",
  },
];

export default projects;
