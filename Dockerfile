# Start from Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Set environment variables
ARG VITE_API_BASE_URL
ARG VITE_X_API_KEY
ARG VITE_X_CONSTANT_VERSION_KEY
ARG VITE_ENCRYPT_KEY

# echo arg into .env file
RUN echo "VITE_API_BASE_URL=${VITE_API_BASE_URL}" >> .env && \
  echo "VITE_X_API_KEY=${VITE_X_API_KEY}" >> .env && \
  echo "VITE_X_CONSTANT_VERSION_KEY=${VITE_X_CONSTANT_VERSION_KEY}" >> .env && \
  echo "VITE_ENCRYPT_KEY=${VITE_ENCRYPT_KEY}" >> .env

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Copy the rest of the application
COPY . .

# Install dependencies using npm install instead of npm ci
RUN npm ci --legacy-peer-deps

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# Command to start the application in production
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "8080"]
