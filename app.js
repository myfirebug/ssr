// step1: 创建一个vue实例
const Vue = require('vue')
const app = new Vue({
    template: '<div>Hello Vue</div>'
})

// step2: 创建一个renderer
const renderer =require('vue-server-renderer').createRenderer()

// step3: 将Vue实例渲染为HTML
renderer.renderToString(app, (err, html)=> {
    if (err) throw err
    console.log(html)
})

// 在 2.5.0+，如果没有传入回调函数，则会返回 Promise：
renderer.renderToString(app).then(html => {
    console.log(html)
}).catch(err => {
    console.error(err)
})