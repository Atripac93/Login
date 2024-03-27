const { request } = require("express");

const loggerMiddleware = (request, response, next) => {
  const { url, ip, method } = request;

  console.log(
    `${new Date().toISOString()} Request ${method} to endpoint ${url} from to ip ${ip}`
  );
  next();
};

module.exports = loggerMiddleware;
