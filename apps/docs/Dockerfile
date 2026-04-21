# ---------- BASE ----------
FROM node:20 AS base
WORKDIR /app
RUN npm install -g turbo

# ---------- PRUNE ----------
FROM base AS pruner
COPY . .
RUN turbo prune docs --docker

# ---------- INSTALL ----------
FROM node:20 AS installer
WORKDIR /app

COPY --from=pruner /app/out/json/ .
RUN npm ci

# ---------- BUILD ----------
FROM node:20 AS builder
WORKDIR /app

COPY --from=pruner /app/out/full/ .
COPY --from=installer /app/node_modules ./node_modules

# RUN npx turbo run build --filter=docs...
RUN npx next build --no-turbo

# ---------- RUN ----------
FROM node:20 AS runner
WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/apps/docs/.next/standalone ./
COPY --from=builder /app/apps/docs/.next/static ./apps/docs/.next/static
COPY --from=builder /app/apps/docs/public ./apps/docs/public

EXPOSE 3000
CMD ["node", "apps/docs/server.js"]