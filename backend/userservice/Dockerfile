FROM keymetrics/pm2:latest-alpine

# Bundle APP files
COPY data data/
COPY src src/
COPY package.json .
COPY process.yml .
COPY app.js app.js

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production

# Expose the listening port of your app
EXPOSE 3000

# Show current folder structure in logs
RUN ls -al -R

CMD ["pm2-runtime", "process.yml"]
