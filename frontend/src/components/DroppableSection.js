import React from "react";
import { useDroppable } from "@dnd-kit/core";
import RecipeTile from "./RecipeTile";

const DroppableSection = ({ id, title, recipes }) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} style={{ padding: "10px", border: "1px solid gray", margin: "10px 0" }}>
      <h3>{title}</h3>
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        {recipes
          .filter((recipe) => recipe.category === id)
          .map((recipe) => (
            <RecipeTile key={recipe.id} id={recipe.id} title={recipe.title} />
          ))}
      </div>
    </div>
  );
};

export default DroppableSection;
