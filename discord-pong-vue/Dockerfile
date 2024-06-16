FROM node:22.3.0-slim

WORKDIR /app
COPY . /app

# RUN apt-get update -qq

# RUN npm install -g @rollup/rollup-linux-arm64-musl
RUN npm install @vue/cli

RUN npm install

CMD ["bin/bash"]