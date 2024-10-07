FROM node:21

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml ./

RUN pnpm install


ADD ./start.sh /start.sh
COPY . .
RUN chmod 755 /start.sh

EXPOSE 3000

ENTRYPOINT ["/start.sh"]
