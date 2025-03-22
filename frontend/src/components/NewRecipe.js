import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewRecipe = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [recipeUrl, setRecipeUrl] = useState("");
  const [mealType, setMealType] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newRecipe = {
      title,
      description,
      recipe_url: recipeUrl,
      meal_type: mealType,
      image_url: imageUrl,
    };

    try {
      const response = await fetch("http://localhost:8000/api/recipes/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      });

      if (response.ok) {
        alert("新しいレシピが登録されました！");
        navigate("/"); // 戻るボタンでリスト画面に戻る
      } else {
        alert("エラーが発生しました");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("エラーが発生しました");
    }
  };

  return (
    <div>
      <h2>新規レシピ登録</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>タイトル</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>説明</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>レシピURL</label>
          <input
            type="url"
            value={recipeUrl}
            onChange={(e) => setRecipeUrl(e.target.value)}
            required
          />
        </div>
        <div>
          <label>食事の時間帯</label>
          <select
            value={mealType}
            onChange={(e) => setMealType(e.target.value)}
            required
          >
            <option value="">選択してください</option>
            <option value="morning">朝食</option>
            <option value="lunch">昼食</option>
            <option value="dinner">夕食</option>
          </select>
        </div>
        <div>
          <label>画像URL</label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
          <button type="button" onClick={() => navigate("/")} style={{ padding: '8px 16px', cursor: 'pointer' }}>
            戻る
          </button>
          <button type="submit" style={{ padding: '8px 16px', cursor: 'pointer' }}>
            保存
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewRecipe;
