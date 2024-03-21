import B2CResearchChart from "../components/B2CResearchChart";
import HoverContent from "../components/HoverContent";

const reviewData = [
  { label: "Positive Reviews", value: 13451, details: "Satisfied customers" },
  { label: "Negative Reviews", value: 1041, details: "Areas for improvement" },
];

const totalReviews = 14492;

const nodes = [
  // Starting Circle (Optional)
  {
    id: "start",
    data: { label: "", type: "start" },
    position: { x: 1200, y: 50 },
  },

  // Research Phase with sub-phases
  {
    id: "research",
    data: {
      label: "Research",
      type: "phase",
      collapsed: true,
      details: "This phase involves gathering information about the target market, user needs, and competitor analysis. This information is used to define the product requirements and specifications.",
      hoverContent: () => <HoverContent content="Research Phase"/>
    },
    position: { x: 400, y: 200 },
  },
  {
    id: "external-data",
    data: {
      label: "External Data",
      type: "sub-phase",
      details: "This sub-phase involves gathering information from external sources such as market research reports, industry publications, and competitor analysis.",
      hoverContent: () => <HoverContent content="External Data"/>
    },
    position: { x: 300, y: 300 },
  },
  {
    id: "internal-data",
    data: {
      label: "Internal Data",
      type: "sub-phase",
      details: "",
      hoverContent: () => <HoverContent content="Internal Data"/>
    },
    position: { x: 500, y: 300 },
  },

  // B2B Sub-phases for External Data
  {
    id: "b2b-1",
    data: {
      label: "B2B",
      type: "sub-phase",
      details: "This sub-phase focuses on B2B market research, analyzing industry trends, and identifying potential customer segments.",
      hoverContent: () => <HoverContent content="B2B"/>
    },
    position: { x: 200, y: 400 },
  },
  {
    id: "online",
    data: {
      label: "Online",
      type: "sub-phase",
      details:"This sub-phase leverages the B2CResearchChart component to analyze online reviews from B2B customers. This can provide valuable insights into customer sentiment and product satisfaction within the B2B space.",
      hoverContent: () => <B2CResearchChart data={reviewData} />,
    },
    position: { x: 100, y: 500 },
  },
  {
    id: "interview",
    data: {
      label: "Interview",
      type: "sub-phase",
      details: "This sub-phase involves conducting interviews with target users and stakeholders to gather in-depth feedback and understand their needs and pain points.",
      hoverContent: () => <HoverContent content="Interview"/>
    },
    position: { x: 300, y: 500 },
  },
  {
    id: "public-data",
    data: {
      label: "Public Data",
      type: "sub-phase",
      details: "This sub-phase involves gathering and analyzing publicly available data relevant to the product or market, such as government statistics, social media trends, and industry reports.",
      hoverContent: () => <HoverContent content="Public Data"/>
    },
    position: { x: 200, y: 600 },
  },
  {
    id: "health",
    data: {
      label: "Health",
      type: "sub-phase",
      details: "This sub-phase focuses on gathering information specific to the healthcare industry, such as regulatory requirements, patient needs, and competitor analysis within the healthcare space.",
      hoverContent: () => <HoverContent content="Health"/>
    },
    position: { x: 100, y: 700 },
  },

  {
    id: "b2b-2",
    data: {
      label: "B2B",
      type: "sub-phase",
      details: "This sub-phase focuses on B2B partner analysis, evaluating potential partnerships and their capabilities.",
      hoverContent: () => <HoverContent content="B2B"/>
    },
    position: { x: 400, y: 400 },
  },

  // Planning Phase with sub-phases
  {
    id: "planning",
    data: {
      label: "Planning",
      type: "phase",
      details: "This phase involves using the research findings to create a product roadmap, define the project scope, and develop a detailed plan for the development process. This includes creating product requirement documents (PRDs) and user stories.",
      hoverContent: () => <HoverContent content="Planning Phase"/>
    },
    position: { x: 800, y: 200 },
  },
  {
    id: "specs",
    data: {
      label: "Specs",
      type: "sub-phase",
      details: "This sub-phase involves creating a comprehensive document that outlines the product's functionalities, target audience, user needs, and technical specifications.",
      hoverContent: () => <HoverContent content="Specifications"/>
    },
    position: { x: 700, y: 350 },
  },
  {
    id: "prd",
    data: {
      label: "PRD",
      type: "sub-phase",
      details: "This sub-phase involves creating detailed technical specifications that define the technical aspects of the product, such as system requirements, hardware and software compatibility, and performance metrics. Specs ensure the product is built to meet specific technical criteria.",
      hoverContent: () => <HoverContent content="PRD (Product Requirement Documents)"/>
    },
    position: { x: 900, y: 350 },
  },

  // Designing Phase with sub-phases
  {
    id: "designing",
    data: {
      label: "Designing",
      type: "phase",
      details: "This phase focuses on translating the product requirements into a functional and user-friendly design. This may involve creating wireframes, prototypes, and user interface (UI) mockups.",
      hoverContent: () => <HoverContent content="Designing Phase"/>
    },
    position: { x: 1200, y: 200 },
  },
  {
    id: "hardware",
    data: {
      label: "Hardware",
      type: "sub-phase",
      details: "This sub-phase focuses on designing the physical components of the product, considering factors such as functionality, aesthetics, and manufacturability.",
      hoverContent: () => <HoverContent content="Hardware"/>
    },
    position: { x: 1100, y: 350 },
  },
  {
    id: "software",
    data: {
      label: "Software",
      type: "sub-phase",
      details: "This sub-phase focuses on designing the software components of the product, including user interface (UI), user experience (UX), and functionality.",
      hoverContent: () => <HoverContent content="Software"/>
    },
    position: { x: 1300, y: 350 },
  },

  // Manufacturing Phase
  {
    id: "manufacturing",
    data: {
      label: "Manufacturing",
      type: "phase",
      details:"This phase involves the physical production of the product. This may include activities such as sourcing materials, creating production lines, and quality control.",
      hoverContent: () => <HoverContent content="Manufacturing Phase"/>
    },
    position: { x: 1600, y: 200 },
  },
  {
    id: "material",
    data: {
      label: "Material",
      type: "sub-phase",
      details: "This sub-phase involves selecting the appropriate materials for the product based on factors such as cost, durability, and environmental impact.",
      hoverContent: () => <HoverContent content="Material"/>
    },
    position: { x: 1500, y: 350 },
  },
  {
    id: "production",
    data: {
      label: "Production",
      type: "sub-phase",
      details: "This sub-phase focuses on developing the production process, including defining quality control procedures, setting up production lines, and optimizing efficiency.",
      hoverContent: () => <HoverContent content="Production"/>
    },
    position: { x: 1700, y: 350 },
  },

  // Sales & Marketing Phase
  {
    id: "sales-marketing",
    data: {
      label: "Sales/Marketing",
      type: "phase",
      details:"This phase focuses on promoting the product to the target market and generating sales. This may involve developing marketing campaigns, creating sales materials, and establishing distribution channels.",
      hoverContent: () => <HoverContent content="Sales/Marketing Phase"/>
    },
    position: { x: 2000, y: 200 },
  },
  {
    id: "online-sales",
    data: {
      label: "Online",
      type: "sub-phase",
      details: "This sub-phase involves creating detailed technical specifications that define the technical aspects of the product, such as system requirements, hardware and software compatibility, and performance metrics. Specs ensure the product is built to meet specific technical criteria.",
      hoverContent: () => <HoverContent content="Online Sales"/>
    },
    position: { x: 1900, y: 350 },
  },
  {
    id: "dealership",
    data: {
      label: "Dealership",
      type: "sub-phase",
      details: "This sub-phase focuses on establishing partnerships with dealerships to sell products through their physical and online channels.",
      hoverContent: () => <HoverContent content="Dealership"/>
    },
    position: { x: 2100, y: 350 },
  },
];

const edges = [
  {
    id: "start-to-research",
    source: "start",
    target: "research",
    animated: true,
  },
  {
    id: "start-to-planning",
    source: "start",
    target: "planning",
    animated: true,
  },
  {
    id: "start-to-designing",
    source: "start",
    target: "designing",
    animated: true,
  },
  {
    id: "start-to-manufacturing",
    source: "start",
    target: "manufacturing",
    animated: true,
  },
  {
    id: "start-to-sales-marketing",
    source: "start",
    target: "sales-marketing",
    animated: true,
  },

  // Research phase with hover details
  {
    id: "research-to-internal",
    source: "research",
    target: "internal-data",
    animated: true,
  },
  {
    id: "research-to-external",
    source: "research",
    target: "external-data",
    animated: true,
  },

  // Edges for B2B sub-phases within External Data
  {
    id: "external-to-b2b-1",
    source: "external-data",
    target: "b2b-1",
    animated: true,
  },
  {
    id: "external-to-b2b-2",
    source: "external-data",
    target: "b2b-2",
    animated: true,
  },
  {
    id: "b2b-1-to-online",
    source: "b2b-1",
    target: "online",
    animated: true,
  },
  {
    id: "b2b-1-to-interview",
    source: "b2b-1",
    target: "interview",
    animated: true,
  },
  {
    id: "b2b-1-to-public-data",
    source: "b2b-1",
    target: "public-data",
    animated: true,
  },
  {
    id: "b2b-1-to-health",
    source: "b2b-1",
    target: "health",
    animated: true,
  },

  // Edges for other phases
  {
    id: "planning-to-prd",
    source: "planning",
    target: "prd",
    animated: true,
  },
  {
    id: "planning-to-specs",
    source: "planning",
    target: "specs",
    animated: true,
  },
  {
    id: "designing-to-hardware",
    source: "designing",
    target: "hardware",
    animated: true,
  },
  {
    id: "designing-to-software",
    source: "designing",
    target: "software",
    animated: true,
  },
  {
    id: "manufacturing-to-material",
    source: "manufacturing",
    target: "material",
    animated: true,
  },
  {
    id: "manufacturing-to-production",
    source: "manufacturing",
    target: "production",
    animated: true,
  },
  {
    id: "sales-marketing-to-online",
    source: "sales-marketing",
    target: "online-sales",
    animated: true,
  },
  {
    id: "sales-marketing-to-dealership",
    source: "sales-marketing",
    target: "dealership",
    animated: true,
  },
];

export { nodes, edges, totalReviews };
