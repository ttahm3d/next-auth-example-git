# Use the official Node.js LTS image as the base image
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the app dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Use a smaller base image for the runtime
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy the built application from the build stage
COPY --from=build /app/.next ./.next
COPY --from=build /app/package*.json ./
COPY --from=build /app/public ./public

# Install only production dependencies
RUN npm ci --only=production

# Expose the port that the Next.js app will run on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]
