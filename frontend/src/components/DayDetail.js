import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import RecipeTile from "./RecipeTile";
import DroppableSection from "./DroppableSection";
import Holidays from "date-holidays";

const DayDetail = () => {
  const { date } = useParams(); // URLのパラメータを取得
  const navigate = useNavigate();

  // YYYY-MM-DD → YYYY/MM/DD に変換
  const formattedDate = date.replace(/-/g, "/");

  // Date オブジェクトを作成
  const dateObj = new Date(date);

  // 曜日を取得（例: "日", "月", "火", ...）
  const dayOfWeek = dateObj.toLocaleDateString("ja-JP", { weekday: "short" });

  // 祝日判定（date-holidays を使用）
  const hd = new Holidays("JP"); // 日本の祝日を取得
  const isHoliday = hd.isHoliday(date); // 祝日かどうか判定

  // 曜日と祝日に応じて色を決定
  const getTextColor = () => {
    if (isHoliday || dayOfWeek === "日") return "red"; // 祝日 or 日曜 → 赤
    if (dayOfWeek === "土") return "blue"; // 土曜 → 青
    return "black"; // 月〜金 → 黒
  };

  // 初期レシピデータ（仮）
  const [recipes, setRecipes] = useState([
    { id: "1", title: "トースト", category: "morning" },
    { id: "2", title: "オムライス", category: "lunch" },
    { id: "3", title: "カレーライス", category: "dinner" },
  ]);

  // レシピをカテゴリー間で移動
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === active.id ? { ...recipe, category: over.id } : recipe
      )
    );
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2 style={{ color: getTextColor() }}>{formattedDate}（{dayOfWeek}）</h2>
      <button
        onClick={() => navigate("/new-recipe")}
        style={{ position: "absolute", right: "20px", top: "20px" }}
      >
        新規登録
      </button>

      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={recipes} strategy={verticalListSortingStrategy}>
          <DroppableSection id="morning" title="Morning" recipes={recipes} />
          <DroppableSection id="lunch" title="Lunch" recipes={recipes} />
          <DroppableSection id="dinner" title="Dinner" recipes={recipes} />
        </SortableContext>
      </DndContext>

      <button onClick={() => navigate("/")}>戻る</button>
    </div>
  );
};

export default DayDetail;
