# 使用する Node.js のバージョンを指定
FROM node:18

# 作業ディレクトリを指定
WORKDIR /app

# パッケージファイルをコピー
COPY package.json package-lock.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションコードをコピー
COPY . .

# ポート番号の設定
EXPOSE 3001

# 開発サーバを起動
CMD ["npm", "start"]