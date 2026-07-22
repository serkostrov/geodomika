# Multi-stage build for Dokploy (Dockerfile build type).
# Runtime serves SPA + POST /api/leads (SMTP.BZ) on a single Node process.

FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=80

COPY package.json package-lock.json ./
COPY server ./server
COPY --from=build /app/dist ./dist

EXPOSE 80
CMD ["node", "server/index.mjs"]
