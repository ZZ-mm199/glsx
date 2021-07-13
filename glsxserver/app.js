const express = require('express'); const userRouter = require('./router/user'); const goodsRouter = require('./router/goods'); const session = require("express-session");
const app = express();
const cors=require("cors");
app.listen(4000);

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({
    extended:false
  }));

	app.use(cors({
  origin:['http://localhost:8081',"http://127.0.0.1:5500","http://localhost:4200"],
  credentials:true
}))
  app.use(session({
    secret:'随机字符串',
    cookie:{maxAge:60*1000*30},//过期时间ms
    resave:false,
    saveUninitialized:true
  }));//将服务器的session，放在req.session中
  /*使用路由器来管理路由*/
  
  app.use('/users', userRouter);
  app.use('/goods', goodsRouter);