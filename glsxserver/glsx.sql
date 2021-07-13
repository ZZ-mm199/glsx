
SET NAMES UTF8;
DROP DATABASE IF EXISTS glsx;
CREATE DATABASE glsx charset = utf8;
USE glsx;
  /* 用户信息表   记载注册后的客户信息 */ 
   create table glsx_user( 
    uid INT  PRIMARY KEY  AUTO_INCREMENT,   #用户id
    uname VARCHAR (32),  #用户名   
    upwd VARCHAR (32)#用户密码
  );
  /**用户信息 **/
INSERT INTO glsx_user VALUES
(NULL, 'dingding', '123456'),
(NULL, 'dangdang', '123456'),
(NULL, 'doudou', '123456'),
(NULL, 'yaya', '123456');