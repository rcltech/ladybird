FROM node:12-alpine
WORKDIR /app
# Run such that the npm packages get cached
COPY package.json .
RUN npm install
# Copy the rest of the application to the container
COPY . .
# The PORT 3001 will be exposed for the application
EXPOSE 3001
CMD ["yarn", "start"]
