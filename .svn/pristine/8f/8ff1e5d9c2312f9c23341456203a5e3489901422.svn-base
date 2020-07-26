# 设置基础镜像 
FROM nginx:1.15
# 定义作者
MAINTAINER waynian <waynian@foxmial.com>
# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
COPY dist/  /usr/share/nginx/html/



原来:
"scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "test:unit": "vue-cli-service test:unit"
  },


修改后
"scripts": {
    "serve": "vue-cli-service --mode serve",
    "lint": "vue-cli-service lint",
    "test:unit": "vue-cli-service test:unit",
    "build:test": "vue-cli-service build --mode test",
    "build:prod": "vue-cli-service build --mode prod"
  },