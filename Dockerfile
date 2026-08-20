FROM node:24-alpine AS build

# Set config
ENV NPM_CONFIG_UPDATE_NOTIFIER=false
ENV NPM_CONFIG_FUND=false

# Create and change to the app directory.
WORKDIR /app

# Copy the files to the container image
COPY package*.json ./

# Install packages (dev deps included: tsc + vite are needed to build)
RUN npm ci

# Copy local code to the container image.
COPY . ./

# Build the app.
RUN npm run build

# Use the Caddy image
FROM caddy:2-alpine

# Create and change to the app directory.
WORKDIR /app

# Copy Caddyfile to the container image.
COPY Caddyfile ./

# Format and validate the Caddyfile at build time so a bad config fails the
# build instead of crash-looping the deploy.
RUN caddy fmt Caddyfile --overwrite && caddy validate --config Caddyfile --adapter caddyfile

# Copy the built static site (Vite outputs to /app/dist).
COPY --from=build /app/dist ./dist

# Use Caddy to run/serve the app
CMD ["caddy", "run", "--config", "Caddyfile", "--adapter", "caddyfile"]
