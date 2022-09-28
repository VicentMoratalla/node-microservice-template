/**
 * Logging method.
 * @param {any} tokens The tokens object.
 * @param {any} req The request.
 * @param {any} res The response.
 * @return {any} The joint value that will be logged.
 */
function log(tokens, req, res) {
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
  ].join(' ');
}

module.exports = log;
