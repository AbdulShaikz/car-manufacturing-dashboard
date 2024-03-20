// import TimelineDashboard from "./components/TimelineDashboard"

// export function App() {
//   const timelineData = [
//     {
//       phase: "Market Research",
//       subPhases: [
//         { name: "External", hoverContent: "Conduct market analysis & competitor research" },
//         { name: "Internal", hoverContent: "Perform customer surveys & focus groups" },
//       ],
//     },
//     {
//       phase: "Planning",
//       subPhases: [
//         { name: "PRD", hoverContent: "Develop Product Requirements Document" },
//         { name: "Specs", hoverContent: "Define technical specifications" },
//       ],
//     },
//     {
//       phase: "Design",
//       subPhases: [
//         { name: "Hardware", hoverContent: "Design hardware components" },
//         { name: "Software", hoverContent: "Develop software functionalities" },
//       ],
//     },
//     {
//       phase: "Manufacturing",
//       subPhases: [
//         { name: "Material", hoverContent: "Source and manage manufacturing materials" },
//         { name: "Production", hoverContent: "Production line setup and execution" },
//       ],
//     },
//     {
//       phase: "Sales & Marketing",
//       subPhases: [
//         { name: "Online", hoverContent: "Develop and manage online marketing channels" },
//         { name: "Dealership", hoverContent: "Establish and manage dealership network" },
//       ],
//     },
//   ];
  
//   return (
//     <>
//       <TimelineDashboard data={timelineData}/>
//     </>
//   )
// }

// export default App

/* import ReactFlow from 'reactflow';
import { useNodes, useEdges, ReactFlowProvider } from 'reactflow';

import 'reactflow/dist/style.css';
import { FaExternalLinkAlt, FaFileAlt, FaCog, FaWarehouse, FaChartLine, FaUsers } from 'react-icons/fa';
import { useStore } from './store/store';



function App() {
  const { nodesState, edgesState, setNodesState, setEdgesState } = useStore();
  console.log(nodesState,"ho");

  const nodeTypes = {
    research: {
      type: 'input',
      icon: <FaExternalLinkAlt />,
      color: 'bg-blue-500',
    },
    planning: {
      type: 'default',
      icon: <FaFileAlt />,
      color: 'bg-green-500',
    },
    design: {
      type: 'default',
      icon: <FaCog />,
      color: 'bg-orange-500',
    },
    manufacturing: {
      type: 'default',
      icon: <FaWarehouse />,
      color: 'bg-red-500',
    },
    sales: {
      type: 'output',
      icon: <FaChartLine />,
      color: 'bg-purple-500',
    },
    // Add types for child nodes based on their 'parent' property
    internal: { type: 'default', icon: null, color: 'bg-gray-200' },
    external: { type: 'default', icon: null, color: 'bg-gray-200' },
    prd: { type: 'default', icon: null, color: 'bg-gray-200' },
    specs: { type: 'default', icon: null, color: 'bg-gray-200' },
    hardware: { type: 'default', icon: null, color: 'bg-gray-200' },
    software: { type: 'default', icon: null, color: 'bg-gray-200' },
    material: { type: 'default', icon: null, color: 'bg-gray-200' },
    production: { type: 'default', icon: null, color: 'bg-gray-200' },
    online: { type: 'default', icon: null, color: 'bg-gray-200' },
    dealership: { type: 'default', icon: null, color: 'bg-gray-200' },
  };

  const onNodeDragEnd = (event, node) => {
    // Update node position in state on drag end
    setNodesState((prevNodes) =>
      prevNodes.map((n) => (n.id === node.id ? { ...node, position: node.position } : n))
    );
  };

  const onEdgeConnect = (connection) => {
    // Update edges state on new connection
    setEdgesState((prevEdges) => [...prevEdges, connection]);
  };

  const onEdgeDisconnect = (connection) => {
    // Update edges state on edge disconnect
    setEdgesState((prevEdges) => prevEdges.filter((edge) => edge.id !== connection.id));
  };

  const onNodeClick = (event, node) => {
    console.log('Node clicked:', node);
    // You can implement custom actions on node click here (e.g., display details)
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Car Manufacturing Process</h1>
      <ReactFlowProvider nodes={nodesState} edges={edgesState}>
        <div className="reactflow-wrapper">
          {console.log(nodesState)}
          <ReactFlow
            className="h-[80vh]"
            elements={nodesState.map((node) => ({
              ...node,
              type: nodeTypes[node.id]?.type || nodeTypes.default.type,
              className: `rounded-full p-4 text-center text-white ${nodeTypes[node.id]?.color || nodeTypes.default.color}`,
              style: { border: 'none' },
              data: { ...node.data, icon: nodeTypes[node.id]?.icon || nodeTypes.default.icon },
              onDragEnd: onNodeDragEnd,
            }))}
            onNodeClick={onNodeClick}
            snapToGrid={true}
            snapGrid={true}
            onConnect={onEdgeConnect}
            onDisconnect={onEdgeDisconnect}
            />
          </div>
        </ReactFlowProvider>
      </div>
    );
  }
  
  export default App; */
  
  import FlowDiagram from './components/FlowDiagram';
  

  export default function App() {
  return (
    <>
      <FlowDiagram/>
    </>
  )
}