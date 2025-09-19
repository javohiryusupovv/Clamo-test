# Dockerfile for Next.js (Node 20, yarn, prod build)

# 1) Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1 \
    YARN_NODE_LINKER=node-modules
RUN corepack enable
COPY package.json yarn.lock ./
RUN yarn install --immutable

# 2) Build
FROM node:20-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1 \
    YARN_NODE_LINKER=node-modules
RUN corepack enable
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# 3) Production runtime
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    YARN_NODE_LINKER=node-modules \
    PORT=3000
RUN corepack enable

# Copy only what’s needed
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=deps    /app/node_modules ./node_modules

EXPOSE 3000
CMD ["yarn", "start"]
