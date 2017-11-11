const express  = require('express')

const app = express()
//注意安装的art-template版本建议为:3.1.2版本,4.x.x版本可能会报错。(ps：还是使用jade吧)
const artTemplate = require('art-template')

app.set('port',process.env.port || 3000)

app.set('views','./views')

app.engine('.html', artTemplate.__express);

app.set('view engine', 'html');

//设置是否对模板进行缓存。一般在开发阶段设置false,在生产环境设置true
artTemplate.config('cache', false)

app.get('/',(req,res)=>{

    res.render('page',null)
})

app.listen(app.get('port'),()=>{

    console.log(`server running at 127.0.0.1:${app.get('port')}`)


})