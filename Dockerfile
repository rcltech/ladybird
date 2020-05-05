FROM nginx:alpine
# Run such that the npm packages get cached
COPY build /usr/share/nginx/html
