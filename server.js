const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer()

server.get('*', (req,res)=> {
    const app = new Vue({
        data: {
            url: req.url
        },
        template: '<div>您访问的url是：{{url}}</div>'
    })

    renderer.renderToString(app, (err, html) => {
        if (err) {
            res.status(500).end('Internal Server Error')
            return
        }
        res.end(`
          <!DOCTYPE html>
          <html lang="en">
            <head><title>Hello</title></head>
            <meta charset="utf-8">
            <body>${html}</body>
          </html>
        `)
    })
})

server.listen(1000)