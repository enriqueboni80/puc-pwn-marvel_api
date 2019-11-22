FROM node:12-alpine

RUN apk add --no-cache tini

WORKDIR /usr/src/app

COPY --chown=node:node ./ ./

RUN chmod +x ./entrypoint.sh && npm install --production

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["./entrypoint.sh"]