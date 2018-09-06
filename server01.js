const Vue = require('vue')
const server = require('express')()
const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.template.html', 'utf-8')
})

server.get('*', (req,res)=> {
    const app = new Vue({
        data: {
            url: req.url,
            list: [
                {
                    'name':'这是列表1'
                },
                {
                    'name':'这是列表2'
                },
                {
                    'name':'这是列表3'
                },
                {
                    'name':'这是列表4'
                },
                {
                    'name':'这是列表5'
                },
                {
                    'name':'这是列表6'
                },
                {
                    'name':'这是列表7'
                },
                {
                    'name':'这是列表8'
                },
                {
                    'name':'这是列表9'
                }
            ]
        },
        template: '<div><div>您访问的url是：{{url}}</div><ul><li v-for="item in list">{{item.name}}</li></ul></div>'
    })
    const context = {
        title: 'hello vue.js',
        meta: '<meta charset="utf-8">'
    }

    renderer.renderToString(app, context, (err, html) => {
        console.log(html) // html 将是注入应用程序内容的完整页面
        res.end(html)
    })
})

server.listen(2000)