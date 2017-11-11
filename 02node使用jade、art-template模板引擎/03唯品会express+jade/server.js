const express = require('express')

const app = express()

app.set('port',process.env.port || 3000)

app.set('views','./views')

app.set('view engine','jade')

app.use(express.static('static'))

app.use(require('./routes/contents'))

app.get('/',(req,res)=>{

    //重定向
    res.redirect('/all_contents')
})

app.listen(app.get('port'),()=>{

    console.log('server running at 127.0.0.1:%s',app.get('port'))
})