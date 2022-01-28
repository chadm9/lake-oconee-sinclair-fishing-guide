FROM node:14.15.0-alpine AS builder
# Set working directory
WORKDIR /usr/src/app
# Copy rquired app files
COPY ./package* ./
COPY ./public ./public
COPY ./src ./src
# Install dependencies
RUN npm ci --only=production
# Create build
RUN npm run build

FROM nginx
# Copy build to nginx server
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
# Copy nginx server configuration
COPY ./default.conf /etc/nginx/conf.d/default.conf