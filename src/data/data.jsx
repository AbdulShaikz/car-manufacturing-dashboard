import B2CResearchChart from "../components/B2CResearchChart";

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
      hoverContent: () => (
        <div className="bg-blue-500 text-white p-4 rounded-lg">
          <h3>Research Phase: </h3>
          <p className="text-2xl">
            This phase involves creating product requirement documents (PRDs)
            and defining specifications.
          </p>
        </div>
      ),
    },
    position: { x: 400, y: 200 },
  },
  {
    id: "external-data",
    data: { label: "External Data", type: "sub-phase",    hoverContent: () => (
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h3>Planning Phase: </h3>
        <p className="text-2xl">
          This phase involves creating product requirement documents (PRDs)
          and defining specifications.
        </p>
      </div>
    ), },
    position: { x: 300, y: 300 },
  },
  {
    id: "internal-data",
    data: { label: "Internal Data", type: "sub-phase",     hoverContent: () => (
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h3>Planning Phase: </h3>
        <p className="text-2xl">
          This phase involves creating product requirement documents (PRDs)
          and defining specifications.
        </p>
      </div>
    ), },
    position: { x: 500, y: 300 },
  },

  // B2B Sub-phases for External Data
  {
    id: "b2b-1",
    data: { label: "B2B", type: "sub-phase",     hoverContent: () => (
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h3>Planning Phase: </h3>
        <p className="text-2xl">
          This phase involves creating product requirement documents (PRDs)
          and defining specifications.
        </p>
      </div>
    ), },
    position: { x: 200, y: 400 },
  },
  {
    id: "online",
    data: { label: "Online", type: "sub-phase",     hoverContent: () => (
        <B2CResearchChart data={reviewData}/>
    ), },
    position: { x: 100, y: 500 },
  },
  {
    id: "interview",
    data: { label: "Interview", type: "sub-phase",     hoverContent: () => (
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h3>Planning Phase: </h3>
        <p className="text-2xl">
          This phase involves creating product requirement documents (PRDs)
          and defining specifications.
        </p>
      </div>
    ), },
    position: { x: 300, y: 500 },
  },
  {
    id: "public-data",
    data: { label: "Public Data", type: "sub-phase" ,     hoverContent: () => (
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h3>Planning Phase: </h3>
        <p className="text-2xl">
          This phase involves creating product requirement documents (PRDs)
          and defining specifications.
        </p>
      </div>
    ),},
    position: { x: 200, y: 600 },
  },
  {
    id: "health",
    data: { label: "Health", type: "sub-phase" ,     hoverContent: () => (
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h3>Planning Phase: </h3>
        <p className="text-2xl">
          This phase involves creating product requirement documents (PRDs)
          and defining specifications.
        </p>
      </div>
    ),},
    position: { x: 100, y: 700 },
  },

  {
    id: "b2b-2",
    data: { label: "B2B", type: "sub-phase",     hoverContent: () => (
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h3>Planning Phase: </h3>
        <p className="text-2xl">
          This phase involves creating product requirement documents (PRDs)
          and defining specifications.
        </p>
      </div>
    ), },
    position: { x: 400, y: 400 },
  },

  // Planning Phase with sub-phases
  {
    id: "planning",
    data: { label: "Planning", type: "phase" ,
    hoverContent: () => (
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h3>Planning Phase: </h3>
        <p className="text-2xl">
          This phase involves creating product requirement documents (PRDs)
          and defining specifications.
        </p>
      </div>
    ),
  },
    position: { x: 800, y: 200 },
  },
  {
    id: "specs",
    data: { label: "Specs", type: "sub-phase",     hoverContent: () => (
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h3>Planning Phase: </h3>
        <p className="text-2xl">
          This phase involves creating product requirement documents (PRDs)
          and defining specifications.
        </p>
      </div>
    ), },
    position: { x: 700, y: 350 },
  },
  {
    id: "prd",
    data: { label: "PRD", type: "sub-phase",     hoverContent: () => (
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h3>Planning Phase: </h3>
        <p className="text-2xl">
          This phase involves creating product requirement documents (PRDs)
          and defining specifications.
        </p>
      </div>
    ), },
    position: { x: 900, y: 350 },
  },

  // Designing Phase with sub-phases
  {
    id: "designing",
    data: { label: "Designing", type: "phase",     hoverContent: () => (
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h3>Planning Phase: </h3>
        <p className="text-2xl">
          This phase involves creating product requirement documents (PRDs)
          and defining specifications.
        </p>
      </div>
    ), },
    position: { x: 1200, y: 200 },
  },
  {
    id: "hardware",
    data: { label: "Hardware", type: "sub-phase",     hoverContent: () => (
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h3>Planning Phase: </h3>
        <p className="text-2xl">
          This phase involves creating product requirement documents (PRDs)
          and defining specifications.
        </p>
      </div>
    ), },
    position: { x: 1100, y: 350 },
  },
  {
    id: "software",
    data: { label: "Software", type: "sub-phase",     hoverContent: () => (
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h3>Planning Phase: </h3>
        <p className="text-2xl">
          This phase involves creating product requirement documents (PRDs)
          and defining specifications.
        </p>
      </div>
    ), },
    position: { x: 1300, y: 350 },
  },

  // Manufacturing Phase
  {
    id: "manufacturing",
    data: { label: "Manufacturing", type: "phase",     hoverContent: () => (
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h3>Planning Phase: </h3>
        <p className="text-2xl">
          This phase involves creating product requirement documents (PRDs)
          and defining specifications.
        </p>
      </div>
    ), },
    position: { x: 1600, y: 200 },
  },
  {
    id: "material",
    data: { label: "Material", type: "sub-phase",     hoverContent: () => (
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h3>Planning Phase: </h3>
        <p className="text-2xl">
          This phase involves creating product requirement documents (PRDs)
          and defining specifications.
        </p>
      </div>
    ), },
    position: { x: 1500, y: 350 },
  },
  {
    id: "production",
    data: { label: "Production", type: "sub-phase",     hoverContent: () => (
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h3>Planning Phase: </h3>
        <p className="text-2xl">
          This phase involves creating product requirement documents (PRDs)
          and defining specifications.
        </p>
      </div>
    ), },
    position: { x: 1700, y: 350 },
  },

  // Sales & Marketing Phase
  {
    id: "sales-marketing",
    data: { label: "Sales/Marketing", type: "phase",     hoverContent: () => (
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h3>Planning Phase: </h3>
        <p className="text-2xl">
          This phase involves creating product requirement documents (PRDs)
          and defining specifications.
        </p>
      </div>
    ), },
    position: { x: 2000, y: 200 },
  },
  {
    id: "online-sales",
    data: { label: "Online", type: "sub-phase",     hoverContent: () => (
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h3>Planning Phase: </h3>
        <p className="text-2xl">
          This phase involves creating product requirement documents (PRDs)
          and defining specifications.
        </p>
      </div>
    ), },
    position: { x: 1900, y: 350 },
  },
  {
    id: "dealership",
    data: { label: "Dealership", type: "sub-phase",     hoverContent: () => (
      <div className="bg-blue-500 text-white p-4 rounded-lg">
        <h3>Planning Phase: </h3>
        <p className="text-2xl">
          This phase involves creating product requirement documents (PRDs)
          and defining specifications.
        </p>
      </div>
    ), },
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
