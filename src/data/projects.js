/* ============================================
   PROJECTS DATA — src/data/projects.js

   This file is a "data layer" — it holds content
   separately from the UI that displays it.

   Each object represents one project card.
   The "image" field points to a file in public/images/
   referenced from the root as "/images/filename.png"
   ============================================ */

const projects = [
  {
    id: 1,
    title: "CAS — IFC Parser & 3D Viewer",
    description:
      "A browser-based BIM tool that lets users upload IFC building files and explore them as interactive 3D models. Parses IFC4 schema data: entities, quantities, materials, and structural relationships. Displays them in a collapsible panel alongside the 3D canvas. Built as part of a professional client project.",
    tech: ["JavaScript", "Three.js", "web-ifc", "Tailwind CSS"],
    role: "Frontend & CSS Styling",
    github: "https://github.com/Lharry95",
    demo: null,
    // Path is relative to the public/ folder — no import needed
    image: "/my-portfolio/images/cas.png",
    featured: true,
  },
  {
    id: 2,
    title: "TradeMe — Auction Marketplace",
    description:
      "A full-stack MERN application for an auction platform. Features include product listings, bidding options and purchase flow. Built in a team of three using agile practices with a Trello board and regular standups.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    role: "Frontend & CSS Styling",
    github: "https://github.com/Lharry95/Mission-5-phase-2-turners-robots",
    demo: null,
    image: "/my-portfolio/images/trademe.png",
    featured: true,
  },
  {
    id: 3,
    title: "Autism Awareness Website",
    description:
      "An educational website about autism spectrum disorder, built with personal purpose — inspired by my son. Covers what autism is, how to support autistic individuals, and available resources. Designed to be welcoming and accessible.",
    tech: ["HTML", "CSS", "JavaScript"],
    role: "Solo Project",
    github: "https://github.com/Lharry95/Mission-1-lvl4-AutismPage",
    demo: null,
    image: "/my-portfolio/images/autism.png",
    featured: false,
  },
  {
    id: 4,
    title: "Personal Website",
    description:
      "A personal website exploring CSS animations, flexbox layouts, and responsive design fundamentals. Built as a learning project to solidify core front-end skills.",
    tech: ["HTML", "CSS", "JavaScript"],
    role: "Solo Project",
    github: "https://github.com/Lharry95/Mission2",
    demo: null,
    image: "/my-portfolio/images/mission2.png",
    featured: false,
  },
  {
    id: 5,
    title: "CI/CD Practice",
    description:
      "A hands-on project practising continuous integration and continuous deployment workflows. Demonstrates understanding of automated testing pipelines and deployment processes — skills essential for professional development teams.",
    tech: ["HTML", "GitHub Actions"],
    role: "Solo Project",
    github: "https://github.com/Lharry95/CI-Practice",
    demo: null,
    image: "/my-portfolio/images/cicd.png",
    featured: false,
  },
];

export default projects;
