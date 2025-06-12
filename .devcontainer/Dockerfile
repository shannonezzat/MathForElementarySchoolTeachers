# Use Ubuntu base image
FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Install TeX Live and other dependencies
RUN apt-get update && apt-get install -y \
    texlive-full \
    git \
    curl \
    nodejs \
    npm \
    && apt-get clean

# Install PreTeXt CLI globally using npm
RUN npm install -g pretext
