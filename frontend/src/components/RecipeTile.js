import React from "react";
import { useDraggable } from "@dnd-kit/core";

const RecipeTile = ({ id, title }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={{
        padding: "10px",
        backgroundColor: "lightgray",
        borderRadius: "5px",
        cursor: "grab",
        transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : "none",
      }}
    >
      {title}
    </div>
  );
};

export default RecipeTile;
