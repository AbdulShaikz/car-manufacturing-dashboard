import { useState } from "react";
import ReactFlow, { addEdge, deleteElements } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "Research" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "Planning" } },
  { id: "3", position: { x: 0, y: 200 }, data: { label: "Designing" } },
  { id: "4", position: { x: 0, y: 300 }, data: { label: "Manufacturing" } },
  { id: "5", position: { x: 0, y: 400 }, data: { label: "Sales/Marketing" } },
  { id: "6", position: { x: 0, y: 500 }, data: { label: "Final Planning" } },
];

export default function TimelineDashboard() {
  const [elements, setElements] = useState(initialNodes);

  const handleNodeClick = (event, nodeId) => {
    const child1 = {
      id: `${nodeId}-child1`,
      position: { x: 200, y: event.clientY },
      data: { label: "Child 1" },
    };
    const child2 = {
      id: `${nodeId}-child2`,
      position: { x: 200, y: event.clientY + 100 },
      data: { label: "Child 2" },
    };

    setElements((prevElements) => [
      ...prevElements,
      child1,
      child2,
      { id: `${nodeId}-edge1`, source: nodeId, target: child1.id },
      { id: `${nodeId}-edge2`, source: nodeId, target: child2.id },
    ]);
  };

  return (
    <div className="w-full h-screen bg-gray-800 p-8">
      <ReactFlow
        elements={elements}
        onNodeClick={handleNodeClick}
        onElementsRemove={(removedElements) =>
          setElements((prevElements) =>
            deleteElements(removedElements, prevElements)
          )
        }
        onConnect={(params) =>
          setElements((prevElements) => addEdge(params, prevElements))
        }
      />
    </div>
  );
}
