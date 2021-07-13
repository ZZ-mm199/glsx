const express = require('express');
// 创建路由器对象
const router = express.Router();
// 引入连接池
const pool = require('../pool');




  router.get("/list",(req,res)=>{
    var sql1="select * from goods ";
   
    pool.query(sql1,(err,result)=>{
        if(err){
          console.log(err);
          res.write(JSON.stringify({
            ok:0, msg:"获取失败"
          }))
        }else{
         
          res.write(JSON.stringify({
            ok:1, goods:result
          }))
        }
        res.end()
      })
  })
  
  router.get("/detail",(req,res)=>{
      var id =req.query.id;
    var sql1="select * from goods where id = ?";
    pool.query(sql1,[id],(err,result)=>{
        if(err){
          console.log(err);
          res.write(JSON.stringify({
            ok:0, msg:"获取失败"
          }))
        }else{
          res.write(JSON.stringify({
            ok:1, goods:result[0]
          }))
        }
        res.end()
      })
  })

  module.exports=router;