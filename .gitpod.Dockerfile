FROM gitpod/workspace-full:latest

# Install Node.js (Gitpod images already come with Node.js, but this ensures compatibility)
RUN nvm install 16 && nvm use 16

# Install Cypress dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    libgtk2.0-0 \
    libgtk-3-0 \
    libgbm-dev \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    xauth \
    xvfb

# Install Cypress globally
RUN npm install -g cypress

# Set environment variables for Cypress
ENV CYPRESS_INSTALL_BINARY=0

# Add project dependencies if you have a package.json file
COPY package.json package-lock.json ./
RUN npm install

# Optional: Add your test files
COPY . .

# Set working directory
WORKDIR /workspace
