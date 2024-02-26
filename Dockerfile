FROM node:20-slim
WORKDIR /app
COPY . .
RUN npm install
CMD ["node", "index.js"]
EXPOSE 5000
