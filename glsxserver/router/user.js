const express = require('express');
// 创建路由器对象
const router = express.Router();
// 引入连接池
const pool = require('../pool');

// 注册体系
router.post("/signup",(req,res)=>{
    var {uname, upwd}=req.body;
    console.log(uname);
    var sql1="select * from glsx_user where uname=?";
    pool.query(sql1,[uname],(err,result)=>{
      if(err){
        
        console.log(err);
        res.write(JSON.stringify({
          ok:0, msg:"注册失败"
        }))
        res.end();
      }else if(result.length>0){
        res.write(JSON.stringify({
          ok:0, msg:"用户名已存在"
        }))
        res.end();
      }else{
        var sql2="INSERT INTO `glsx_user`(`uname`, upwd) VALUES (?,?)";
        pool.query(sql2,[uname,upwd],(err,result)=>{
          if(err){
            console.log(err);
            res.write(JSON.stringify({
              ok:0, msg:"注册失败"
            }))
          }else{
            res.write(JSON.stringify({
              ok:1, uid:result.insertId
            }))
          }
          res.end()
        })
      }
    })
  })


//   登录体系
router.post("/signin",(req,res)=>{
    var {uname,upwd}=req.body;
	 console.log(uname,upwd);
    var sql="select * from glsx_user where uname= ? and  upwd= ?";
    pool.query(sql,[uname,upwd],(err,result)=>{
      err&&console.log(err);
      if(result.length>0){
        req.session.uid=result[0].uid;
        res.write(JSON.stringify({ok:1,uname:result[0].uname, uid:result[0].uid}));
      }else{
        res.write(JSON.stringify({ok:0,msg:"用户名或密码错误!"}));
      }
      res.end();
    })
  })
  router.get("/islogin",(req,res)=>{
    var uid=req.session.uid
    if(uid==null){
      res.write(JSON.stringify({ok:0}));
      res.end();
    }else{
      var sql="select * from glsx_user where uid=?";
      pool.query(sql,[uid],(err,result)=>{
        res.write(JSON.stringify({ok:1,uname:result[0].uname}));
        res.end();
      })
    }
  })
  router.get("/signout",(req,res)=>{
    delete req.session.uid;
    res.send();
  })
  
  module.exports=router;