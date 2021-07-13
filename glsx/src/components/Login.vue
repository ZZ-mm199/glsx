<template>
  <div>
    <div class="header">
      <!-- 最顶端s -->
      <div class="header_top">
        <div class="head_content clearfix">
          <div class="head_tex1 float-left"></div>
          <div class="float-left head_tex2">
            <span
              >您好，欢迎光临给力生鲜商城，请先<router-link
                to="/login"
                style="color: #605a51"
                >[登录]&nbsp;</router-link
              >
              <router-link to="/register" style="color: #605a51"
                >[注册]</router-link
              >
            </span>
          </div>
          <div class="head_tex3 float-left"></div>
          <div class="float-left head_tex4">
            <span>15555555555</span>
          </div>
          <div class="float-right clearfix">
            <ul class="head_tex5 mb-0">
              <li class="float-left dw_1">
                我的订单
                <ol class="ol1">
                  <li>全部订单</li>
                  <li>未支付订单</li>
                </ol>
              </li>
              <li class="float-left dw_2">
                <router-link to="/login" style="color: #605a51">
                  我的收藏</router-link
                >
              </li>
              <li class="float-left dw_3">
                <router-link to="/login" style="color: #605a51">
                  客户服务</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 最顶端end -->
      <!-- 头部二s -->
      <div class="heder_center">
        <div class="logo">
          <img src="/img/header/logo.png" alt="" />
        </div>
        <div class="search">
          <input type="text" placeholder="输入关键字搜索" />
          <button>搜索</button>
        </div>
        <div class="shp">
          <div class="shp_1">
            <div class="search_icon1">
              <img src="/img/header/user.png" alt="" />
              <router-link to="" class="shp_tex">个人中心</router-link>
            </div>
            <div class="shop_2">
              <img src="/img/header/shp.png" alt="" />
              <router-link to="" style="margin-left: 50px" class="shp_tex"
                >购物车</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <!-- 头部二end -->
      <!-- 头部三s -->
      <div class="header_nav">
        <div class="header_cont">
          <div class="drop float-left">
            <span>全部商品分类</span>
            <div class="dropdown">
              <ul>
                <li>
                  <router-link to="" class="drop_tex">
                    <i class="li-1"></i>蔬菜香菇
                  </router-link>
                </li>
                <li>
                  <router-link to="" class="drop_tex">
                    <i class="li-2"></i>新鲜水果
                  </router-link>
                </li>
                <li>
                  <router-link to="" class="drop_tex">
                    <i class="li-3"></i>鲜肉禽蛋
                  </router-link>
                </li>
                <li>
                  <router-link to="" class="drop_tex">
                    <i class="li-4"></i>速食速冻
                  </router-link>
                </li>
                <li>
                  <router-link to="" class="drop_tex">
                    <i class="li-5"></i>粮油副食
                  </router-link>
                </li>
                <li>
                  <router-link to="" class="drop_tex">
                    <i class="li-6"></i>海鲜水产
                  </router-link>
                </li>
                <li>
                  <router-link to="" class="drop_tex">
                    <i class="li-7"></i>酒类
                  </router-link>
                </li>
                <li>
                  <router-link to="" class="drop_tex">
                    <i class="li-8"></i>牛奶饮料
                  </router-link>
                </li>
                <li>
                  <router-link to="" class="drop_tex">
                    <i class="li-9"></i>日用百货
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="dr float-left">
            <ul class="mb-0 clearfix">
              <li>
                <i class="home"></i>
                <router-link to="/" class="dr_text">首页</router-link>
              </li>
              <li>
                <router-link to="/" class="dr_text">限时抢购</router-link>
              </li>
              <li>
                <router-link to="/" class="dr_text">购物指南</router-link>
              </li>
              <li>
                <router-link to="/" class="dr_text">积分商城</router-link>
              </li>
              <li>
                <router-link to="/" class="dr_text">最新活动</router-link>
              </li>
              <li>
                <router-link to="/" class="dr_text">关于我们</router-link>
              </li>
            </ul>
            <div class="dr_img">
              <img src="/img/header/nav-right.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <!-- 头部三end -->
    </div>
    <!-- 登陆 -->
    <div class="login">
      <div class="login_main">
        <div class="login_user">
          <div class="login_title">
            账户登录

            <span class="span1" ref="span1"></span>
          </div>
          <div class="">
            <form class="login_form">
              <div class="user_ic">
                <input
                  type="text"
                  placeholder="用户名/手机号码"
                  class="user_l"
                  v-model="uname"
                  @blur="splitText"
                  @focus="focusupwd"
                />
              </div>
              <div class="pass_ic clearfix">
                <input
                  type="password"
                  name=""
                  id=""
                  ref="upwd"
                  placeholder="密码"
                  class="pas_l"
                  v-model="upwd"
                  @blur="splitText1"
                  @focus="focusupwd"
                />
              </div>
              <div class="pas_no clearfix">
                <router-link to="/" class="pas_tex1 float: left;">
                  忘记密码?</router-link
                >
                <router-link to="/register" class="pas_tex2 float-right"
                  >免费注册</router-link
                >
                <!-- <a href="/register">免费注册</a> -->
              </div>
              <div class="login_btn">
                <input
                  type="submit"
                  value="登陆"
                  class="l_btn"
                  @click="login"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <myfooter></myfooter>
  </div>
</template>
// 最顶端
<style scoped>
.header {
  width: 100%;
  min-width: 1200px;
  height: 218px;
}
.header_top {
  width: 100%;
  height: 39px;
  border-bottom: 1px solid #dddddd;
  line-height: 39px;
  font-size: 12px;
  color: #605a51;
  background: #f4f4f4;
}
.head_content {
  width: 1200px;
  height: 39px;
  margin: 0 auto;
}
.head_tex1 {
  width: 30px;
  height: 39px;
  background: url(/img/header/icon1.png) no-repeat center;
}
.head_tex2 {
  width: 290px;
  font-size: 12px;
  color: #605a51;
}
.head_tex3 {
  width: 30px;
  height: 39px;
  background: url(/img/header/icon2.png) no-repeat center;
}
.head_tex4 {
  font-size: 15px;
  font-weight: bold;
  color: #ff8900;
}
.head_tex5 {
  width: 300px;
}
.head_tex5 .dw_1 {
  position: relative;
  width: 100px;
  cursor: pointer;
  text-align: center;
}
.head_tex5 .dw_1:hover {
  color: #37ab40;
}
.head_tex5 .dw_1:hover .ol1 {
  display: block;
  z-index: 200;
}
.ol1 {
  width: 100px;
  position: absolute;
  height: 100px;
  display: none;
  border: 1px solid #ccc;
  background: #f4f4f4;
  text-align: center;
}
.head_tex5 li :hover {
  color: #37ab40;
}
.dw_2,
.dw_3 {
  width: 100px;
  text-align: center;
}
</style>
// 最顶端end

// 头部二logo,search
<style scoped>
.heder_center {
  position: relative;
  width: 1200px;
  height: 80px;
  margin: 0 auto;
}
.logo {
  width: 241px;
  height: 43px;
  position: absolute;
  top: 25px;
  left: -25px;
}

.search {
  position: absolute;
  width: 400px;
  height: 42px;
  top: 36px;
  left: 460px;
}
.search input {
  float: left;
  height: 42px;
  width: 314px;
  outline: none;
  border: 2px solid #009f43;
  border-right: 0;
  padding-left: 30px;
  background: url(/img/header/search.png) no-repeat;
  background-position: 8px 13px;
  font-size: 14px;
}
.search button {
  float: left;
  height: 42px;
  width: 86px;
  border: 0;
  outline: none;
  background: #009f43;
  cursor: pointer;
  color: #fff;
}
.shp {
  position: absolute;
  top: 36px;
  right: 0;
  width: 260px;
  height: 40px;
  background: white;
  border: 1px solid #ccc;
}
.shp_1 {
  width: 130px;
  height: 40px;
  border-right: 1px solid #ccc;
}

.search_icon1 {
  width: 24px;
  height: 24px;
  display: inline;
}
.search_icon1 img {
  width: 24px;
  height: 24px;
  margin: 8px 13px;
}
.shop_2 {
  width: 129px;
  height: 41px;
  position: absolute;
  left: 130px;
  bottom: -1px;
  line-height: 41px;
}
.shop_2 img {
  position: absolute;
  width: 24px;
  height: 24px;
  left: 14px;
  bottom: 8px;
}
.shp_tex {
  font-size: 12px;
  cursor: pointer;
}
.shp_tex:hover {
  color: #009f43;
}
</style>
// 头部二end

// 头部三s
<style scoped>
.header_nav {
  width: 100%;
  height: 79px;
  border-bottom: 2px solid #37ab40;
  margin-top: 20px;
}
.header_cont {
  width: 1200px;
  height: 79px;

  margin: 0 auto;
}
.drop {
  position: relative;
  width: 212px;
  height: 46px;
  background: #37ab40;
  margin-top: 33px;
  line-height: 46px;
  display: inline-block;
}
.drop span {
  color: #fff;
  display: block;
  width: 168px;
  padding-left: 44px;
  background: url(/img/header/nav.png) no-repeat 20px center;
  font-size: 16px;
  cursor: pointer;
}
.dropdown {
  width: 212px;
  height: 446px;
  background: url(/img/header/silde.jpg) no-repeat center center;
  z-index: 15;
  position: absolute;
  top: 46px;
  left: 0;
  display: none;
}
.drop:hover .dropdown {
  display: block;
}
.dropdown li {
  height: 44px;
  width: 100%;
  border-bottom: 1px dotted #9ddba2;
  line-height: 43px;
  background: url(/img/header/ribg.png) no-repeat 173px center;
  position: relative;
  padding: 0px 11px;
  box-sizing: border-box;
}
.dropdown li:hover {
  background: #4dbe54;
}
i {
  display: inline-block;

  width: 17px;
  height: 16px;
  margin: 0 7px;
  position: relative;
  top: 3px;
}
.li-1 {
  background: url(/img/header/n-icon1.png) no-repeat center center;
}
.li-2 {
  background: url(/img/header/n-icon2.png) no-repeat center center;
}
.li-3 {
  background: url(/img/header/n-icon3.png) no-repeat center center;
}
.li-4 {
  background: url(/img/header/n-icon4.png) no-repeat center center;
}
.li-5 {
  background: url(/img/header/n-icon5.png) no-repeat center center;
}
.li-6 {
  background: url(/img/header/n-icon6.png) no-repeat center center;
}
.li-7 {
  background: url(/img/header/n-icon7.png) no-repeat center center;
}
.li-8 {
  background: url(/img/header/n-icon8.png) no-repeat center center;
}
.li-9 {
  background: url(/img/header/n-icon9.png) no-repeat center center;
}
.drop_tex {
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  width: 100%;
  display: inline-block;
}
.dr {
  position: relative;
  width: 683px;
  height: 46px;
  display: inline-block;
  margin-top: 33px;
  line-height: 46px;
}

.home {
  display: inline-block;
  width: 12px;
  height: 19px;
  background: url(/img/header/home.png) no-repeat center center;
}
.dr li {
  float: left;
  line-height: 46px;
  margin-left: 50px;
  font-size: 16px;
}
.dr_img {
  position: absolute;
  right: -304px;
  top: -23px;

  width: 243px;
  height: 68px;
}
.dr_img img {
  display: block;
}
.dr_text {
  color: #000;
}
.dr_text:hover {
  color: #4dbe54;
}
</style>

// 登陆
<style scoped>
.login {
  width: 100%;
  height: 470px;
  min-width: 1200px;
  margin: 0 auto;
  background: #249b2e url(/img/login/login_bj.jpg) no-repeat center center;
}
.login_main {
  width: 1200px;
  margin: 0 auto;
  height: auto;
  overflow: hidden;
}
.login_user {
  width: 320px;
  height: 380px;
  background: #fff;
  float: right;
  margin-top: 30px;
  border: 1px solid #eee;
  margin-right: 0px;
}
.login_title {
  width: 246px;
  margin: 20px auto 20px auto;
  font-family: "微软雅黑";
  font-size: 22px;
  color: #666;
}
.login_title span {
  line-height: 22px;
  margin-top: 5px;
  color: #b30401;
  text-align: center;
  font-size: 12px;
}
.user_ic {
  width: 246px;
  height: 36px;
  border: 1px #dcdcdc solid;
  background: url(/img/login/user_in.gif) no-repeat left center;
  margin-left: 35px;
  overflow: hidden;
  margin-top: 35px;
}
.user_l {
  border: 0px;
  width: 190px;
  height: 25px;
  margin: 6px 0px 0px 43px;
  padding-left: 10px;
  font-size: 14px;
}
input {
  outline: none;
}
.pass_ic {
  width: 246px;
  height: 36px;
  border: 1px #dcdcdc solid;
  background: url(/img/login/pass_in.gif) no-repeat left center;
  margin-left: 35px;
  margin-top: 26px;

  margin-top: 35px;
}

.pas_l {
  border: 0px;
  width: 190px;
  height: 25px;
  margin: 6px 0px 0px 43px;
  padding-left: 10px;
  font-size: 14px;
}
.pas_no {
  width: 258px;
  height: 24px;
  line-height: 24px;
  margin-left: 35px;
  color: #999999;
  margin-top: 35px;
}
.pas_tex1 {
  color: #999999;
  font-size: 12px;
  cursor: pointer;
}
.pas_tex2 {
  font-size: 12px;
  color: #d20202;
  cursor: pointer;
}
.login_btn {
  width: 258px;
  height: 38px;
  margin: 0 auto;
  margin-top: 10px;
  margin-top: 35px;
}
.l_btn {
  width: 100%;
  height: 36px;
  border: none;
  background: #ff7213;
  color: #fff;
  border-radius: 2px;
  font-size: 14px;
  cursor: pointer;
  float: left;
}
</style>
<script>
import myfooter from "./Footer.vue";
export default {
  components: { myfooter },
  data() {
    return {
      uname: "",
      upwd: "",
    };
  },
  methods: {
    login() {
      this.axios
        .post("/users/signin", `uname=${this.uname}&upwd=${this.upwd}`)
        .then((result) => {
          if (result.data.ok == 1) {
            alert(`恭喜登录成功`);
            this.$router.push("/");
          } else {
            alert(`登录失败:${result.data.msg}`);
          }
        });
    },
    splitText() {
      // 用户名正则，4到16位（字母，数字，下划线，减号
      let reg = /^[a-zA-Z0-9_-]{4,16}$/;
      if (reg.test(this.uname)) {
        this.$refs.span1.innerHTML = "";
      } else {
        this.$refs.span1.innerHTML =
          "用户名格式不正确,需4到16位（字母，数字，下划线，减号）";
      }
    },
    focusupwd() {
      this.$refs.span1.innerHTML = "";
    },
    splitText1() {
      let reg2 = /^[a-zA-Z0-9_-]{4,16}$/;
      if (reg2.test(this.upwd)) {
        this.$refs.span1.innerHTML = "";
      } else {
        this.$refs.span1.innerHTML =
          "密码格式错误，需4到16位（字母，数字，下划线，减号）";
      }
    },

    focusupwd() {
      this.$refs.span1.innerHTML = "";
    },
  },
};
</script>
  

