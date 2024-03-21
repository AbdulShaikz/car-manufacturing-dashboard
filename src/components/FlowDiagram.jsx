import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import { nodes as initialNodes, edges as initialEdges } from "../data/data.jsx";
import "reactflow/dist/style.css";
import { useEffect, useRef, useState } from "react";
import Modal from "./Modal.jsx";

const FlowDiagram = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [hoveredNode, setHoveredNode] = useState(null);

  const [selectedNode, setSelectedNode] = useState(null);
  const modalRef = useRef(null);



  const handleNodeClick = (event, node) => {
    setSelectedNode(node);
  };

  const handleCloseModal = () => {
    setSelectedNode(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedNode(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onNodeMouseEnter = (event, node) => {
    setHoveredNode(node);
  };

  const onNodeMouseLeave = () => {
    setHoveredNode(null);
  };

  // Function to toggle the collapsed/expanded status of a phase
//   const toggleCollapse = (id) => {
//     setNodes(nodes.map(node => {
//       if (node.id === id && node.data.type === 'phase') {
//         return { ...node, data: { ...node.data, collapsed: !node.data.collapsed } };
//       }
//       return node;
//     }));
//   };

//   // JSX rendering for nodes
// const renderNodes = nodes.map(node => {
//   return (
//     <div key={node.id}>
//       <div
//         className={`node ${node.data.type} ${node.data.collapsed ? 'collapsed' : ''}`}
//         style={{ left: node.position.x, top: node.position.y }}
//         onClick={() => toggleCollapse(node.id)} // Add onClick handler to toggle collapse
//       >
//         {node.data.label}
//       </div>
//       {/* Render dynamic content on hover */}
//       {hoveredNode && hoveredNode.data.hoverContent && hoveredNode.data.hoverContent()}
//     </div>
//   );
// });

  
  return (
    <ReactFlowProvider>
      <div className="w-full h-screen bg-gray-800 text-white  text-3xl">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={handleNodeClick}
          onNodeMouseEnter={onNodeMouseEnter}
          onNodeMouseLeave={onNodeMouseLeave}
          fitView
        >
          <Controls className="bg-white"/>
          <MiniMap className="bg-black"/>
          <Background variant="dots" gap={12} size={1} />
          {hoveredNode && hoveredNode.data.hoverContent && hoveredNode.data.hoverContent()}
          {/* {renderNodes} */}
          
        </ReactFlow>
        {selectedNode && (
          <Modal
            isOpen={!!selectedNode}
            onClose={handleCloseModal}
            title={selectedNode.data.label}
            content={selectedNode.data.details}
          />
        )}
        
      </div>
    </ReactFlowProvider>
  );
};

export default FlowDiagram;
