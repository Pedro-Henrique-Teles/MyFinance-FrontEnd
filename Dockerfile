# Imagem base para frontend React
FROM node:alpine

LABEL maintainer="pedro-henrique-teles"

# Diretório onde o app será montado
WORKDIR /app

# Instalar bash e Yarn
RUN apk add --no-cache bash curl && \
    curl -o- -L https://yarnpkg.com/install.sh | sh

# Adiciona o Yarn ao PATH
ENV PATH="/root/.yarn/bin:${PATH}"

# Copiando arquivos de dependências
COPY package.json package-lock.json ./

# Instalando dependências com Yarn
RUN yarn install

# Copiando o restante dos arquivos do frontend
COPY . .

# Rodando o frontend em modo de desenvolvimento com Yarn
CMD ["yarn", "dev"]
