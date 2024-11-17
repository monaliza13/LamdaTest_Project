FROM gitpod/workspace-full:latest

# Ensure permissions for package management commands
USER root

# Install Cypress dependencies
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    xvfb \
    libgtk2.0-0 \
    libgtk-3-0 \
    libgbm-dev \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    fonts-liberation && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set environment variable to skip Cypress binary installation during npm install
# ENV CYPRESS_INSTALL_BINARY=0

WORKDIR /workspace