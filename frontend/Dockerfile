# Use Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy project files (including /src)
COPY . .

# Expose port
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
