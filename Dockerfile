# Use Ubuntu as the base image
FROM ubuntu:22.04

# Set working directory
WORKDIR /app

# Install curl and other necessary tools
RUN apt-get update && apt-get install -y \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js v23.11.1 and npm 10.9.2
RUN curl -fsSL https://deb.nodesource.com/setup_23.x | bash - \
    && apt-get install -y nodejs \
    && npm install -g npm@10.9.2

# Verify Node.js and npm versions
RUN node --version && npm --version

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install project dependencies including sharp
RUN npm install && npm install sharp

# Copy the rest of the application code
COPY . .

# Expose the port (adjust if your app uses a specific port, e.g., 3000)
EXPOSE 3001

# Command to run the development server
CMD ["npm", "run", "dev"]
