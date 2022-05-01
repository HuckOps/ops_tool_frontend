const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(createProxyMiddleware('/api', {
    target: 'http://182.43.9.49:9001',
    secure: false,
    changeOrigin: true,
    ws: true,
    pathRewrite: {
      "^/api": "/api"
    }
  }))
}
