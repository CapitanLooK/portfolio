# Etapa de build, corre SIEMPRE en amd64
FROM node:22-alpine as builder

WORKDIR /app

COPY package*.json tsconfig.json ./
RUN npm install
COPY . .
ARG NEXT_DISABLE_FONT_DOWNLOADS=1
ENV NEXT_DISABLE_FONT_DOWNLOADS=${NEXT_DISABLE_FONT_DOWNLOADS}
RUN npm run build

FROM node:22-alpine

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

EXPOSE 5001
CMD ["npm", "start"]
