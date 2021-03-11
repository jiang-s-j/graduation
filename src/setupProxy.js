const {createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app){
  app.use(
      createProxyMiddleware('/index',{
          target: 'http://127.0.0.1:8000',
          changeOrigin: true,
      })
  )
  app.use(
    createProxyMiddleware("/mock",{
      target: 'http://127.0.0.1:9000',
      changeOrigin:true,
    })
  )

}