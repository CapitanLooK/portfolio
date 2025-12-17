FROM node:22-alpine

WORKDIR /app

COPY package*.json tsconfig.json ./

RUN npm install

COPY . .

ARG NEXT_DISABLE_FONT_DOWNLOADS=1
ENV NEXT_DISABLE_FONT_DOWNLOADS=${NEXT_DISABLE_FONT_DOWNLOADS}

RUN npm run build

EXPOSE 5001

CMD ["npm", "start"]
