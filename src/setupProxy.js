const {createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use("/api",
    createProxyMiddleware({
      target:'http://cn.bing.com',
      changeOrigin:true,
      pathRewrite: {
        "^/api" : "",
    }
    })
  )
}