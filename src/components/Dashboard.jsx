import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from "reactflow";
import { nodes as initialNodes, edges as initialEdges } from "../data/data.jsx";
import "reactflow/dist/style.css"; 
import { useEffect, useState } from "react";
import Modal from "./Modal.jsx";

const Dashboard = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [hoveredNode, setHoveredNode] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);

  const handleNodeClick = (event, node) => setSelectedNode(node);

  const handleCloseModal = () => setSelectedNode(null);

  // Optimized event listener for modal closing
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectedNode && !event.target.closest(".modal")) {
        setSelectedNode(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedNode]);

  const onNodeMouseEnter = (_, node) => setHoveredNode(node);

  const onNodeMouseLeave = () => setHoveredNode(null);

  return (
    <ReactFlowProvider>
      <div className="flow-diagram w-full h-screen bg-gray-900 text-white text-3xl relative">
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
          <Controls className="bg-white border-black border-r-4" />
          <MiniMap className="bg-black w-fit h-fit" />
          <Background variant="dots" gap={12} size={1} />
          {hoveredNode && hoveredNode.data.hoverContent && hoveredNode.data.hoverContent()}
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

export default Dashboard;