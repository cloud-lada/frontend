FROM nginx:1.22.0

RUN rm -rf /usr/share/nginx/html/*

COPY dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
