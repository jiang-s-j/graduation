const {createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use("/api",
    createProxyMiddleware({
      target:'http://cn.bing.com',
      changeOrigin:true,
    })
  )
  app.use("/mock",
    createProxyMiddleware({
      target: 'http://127.0.0.1:9000',
      changeOrigin:true,
    })
  )
}