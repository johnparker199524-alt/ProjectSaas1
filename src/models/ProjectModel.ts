// Interfaccia per definire la struttura del Progetto
export interface Project {
  id: number;
  img?:string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  estimatedDays: number;
}

// Lista dei progetti simulati tipizzata correttamente
export const SAMPLE_PROJECTS: Project[] = [
  {
    id: 1,
    img:"ecom2.webp",
    title: "E-Commerce Full Stack",
    description: "Piattaforma completa con carrello e pagamenti Stripe.",
    category: "Web App",
    tags: ["React", "Node.js", "MongoDB"],
    estimatedDays: 14
  },
  {
    id: 2,
     img:"dashboard2.webp",
    title: "SaaS Dashboard Analitica",
    description: "Pannello di controllo con grafici e API personalizzate.",
    category: "SaaS",
    tags: ["React", "Bootstrap", "Chart.js"],
    estimatedDays: 10
  },
  {
    id: 3,
     img:"sito.webp",
    title: "Sito Corporate Reattivo",
    description: "Sito aziendale ad alte prestazioni con SEO avanzato.",
    category: "Website",
    tags: ["HTML5", "Sass", "JavaScript"],
    estimatedDays: 5
  }
];