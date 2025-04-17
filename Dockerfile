FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

# Install necessary packages including git and gpg
RUN apk add --no-cache git gnupg make gcc musl-dev

# Add git-secret repository and install it
RUN echo 'https://gitsecret.jfrog.io/artifactory/git-secret-apk/all/main' >> /etc/apk/repositories && \
    wget -O /etc/apk/keys/git-secret-apk.rsa.pub 'https://gitsecret.jfrog.io/artifactory/api/security/keypair/public/repositories/git-secret-apk' && \
    apk add --update --no-cache git-secret && \
    git secret --version  # Verify installation

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]