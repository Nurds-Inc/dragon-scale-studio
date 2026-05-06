# Build stage
FROM node:20-alpine AS builder

LABEL org.opencontainers.image.source="https://github.com/Nurds-Inc/harmonylabs"
LABEL org.opencontainers.image.title="dragon-scale-studio"
LABEL org.opencontainers.image.description="Dragon Scale Studio - Music Education Website"

RUN npm install -g bun

WORKDIR /app

COPY package.json bun.lock* bun.lockb ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

# Production stage
FROM nginx:1.27-alpine

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Create cache directories for nginx (needed for read-only filesystem)
RUN mkdir -p /var/cache/nginx/client_temp \
    /var/cache/nginx/proxy_temp \
    /var/cache/nginx/fastcgi_temp \
    /var/cache/nginx/uwsgi_temp \
    /var/cache/nginx/scgi_temp && \
    chown -R nginx:nginx /var/cache/nginx

EXPOSE 3000

USER nginx

CMD ["nginx", "-g", "daemon off;"]
