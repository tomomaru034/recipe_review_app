# Pythonイメージを使用
FROM python:3.11

# 作業ディレクトリを設定
WORKDIR /app

# 依存関係をコピー & インストール
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# アプリのコードをコピー
COPY . .

# サーバーを起動
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]