# Use a Node.js 18 image, matching the engine specified in your package.json
FROM node:18-slim

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if present) to the container
# This is a key optimization step: install dependencies first.
COPY package*.json ./

# Install dependencies
# Using --omit=dev prevents installing dev dependencies like 'nodemon'
RUN npm install --omit=dev

# Copy the rest of your application code to the container
COPY . .

# Expose the default port (Heroku handles the rest)
EXPOSE 3000

# Specify the command to run the application
# This uses the 'start' script defined in your package.json: "node index.js"
CMD [ "npm", "start" ]
