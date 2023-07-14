//including dependencies
const express = require('express')
const app = express()
const postRouter = require('./routes/router')

//view engine ejs
app.set('view engine', 'ejs')

// in order to use index route type: localhost:3000/posts
app.use('/posts',postRouter)

//listening to port 3000 | type "localhost:3000" in web browser
app.listen(3000);

//linking views folder
app.use(express.static(__dirname + '/views'));

//root 
app.get('/',(req,res)=>{
    let postinfo = [{
        date:new Date(),
        user:'User1',
        captions:"abc"
    },
    {
        date:new Date(),
        user:'User2',
        captions:"abc"
    },
    {
        date:new Date(),
        user:'User3',
        captions:"abc"
    }
]
    res.render('index',{postinfo:postinfo})
})