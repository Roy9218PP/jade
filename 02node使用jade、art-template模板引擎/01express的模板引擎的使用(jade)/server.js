const express = require('express')

const app = express()

const port = process.env.port || 3000;

//path模块是专门用来获取和操作文件路径的模块
const path = require('path')

app.set(port)
//nodejs提供了两个全局变量__dirname和__filename,分别用来获取当前js文件所在的目录和当前js文件的路径
console.log(__dirname)
console.log(__filename)
//设置模板引擎渲染模板的存放路径(ps:该项可省,默认代表当前目录下的views目录)
//参数1:属性名称,固定值
//参数2:存放模板的目录
//下边四种方式均可:
//app.set('views','views')
//app.set('views','./views')
//app.set('views',__dirname + '/views')

//需要安装path模块:npm install path --save
//path.join()用来合并两个子路经为一个完整路径
app.set('views', path.join(__dirname, './views'))

//设置express使用的view engine(模板引擎) 是哪一个
//此处使用jade引擎。ps:需要npm install jade --save
app.set('view engine', 'jade')

/*
app.use(express.static('static',{

    extensions:['html','htm'],
    
    index:'page.html'
}))

//由于上边设置静态目录所以当访问服务器主目录的时候默认会加载指定的静态文件，所以此处服务端不会处理该请求。但是很多情况下服务端返回的是动态页面，就不需要加载静态文件，而是由服务端动态返回的，此时使用模板引擎就变得必须了，否则动态页面依靠拼接的方式非常麻烦。
*/
app.get('/', (req, res) => {

    console.log('收到请求了')

    //服务端要返回动态页面只需使用res.render()来渲染指定模板,然后把渲染后的页面返回即可
    //参数1:渲染的模板文件名称(ps:该模板必须位于指定views目录下)
    //参数2:该模板提供的渲染数据
    res.render('index', { 
        name: "roy",
        age: 29, 
        city: "郑州",
        books: ['HTML5', 'CSS3', 'JS', 'NodeJS'] 
    })
})

app.listen(port, () => {

    console.log(`server running at 127.0.0.1:${port}`)
})