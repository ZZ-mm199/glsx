<template>
  <div class="regmain_bg">
    <div class="reg_mainbox">
      <div class="reg_logo float-left">
        <a href="/"> <img src="/img/register/logo.png" alt="" /></a>
        <span>欢迎注册</span>
      </div>
      <div class="reg_top float-left">
        <span>手机注册</span>
        <div class="float-right reg_link">
          我已注册，立即
          <router-link to="/login" style="color: #ff7213">登录></router-link>
        </div>
      </div>
      <div class="reg_main">
        <form action="">
          <ul class="clearfix reg_ul">
            <li>
              <label for="">用户名:</label
              ><input
                type="text"
                placeholder="用户名"
                class="inp"
                v-model="uname"
                @blur="regtext"
               
              />
            </li>
            <li>
              <label for="">密码:</label
              ><input
                type="password"
                placeholder="密码"
                class="inp"
                v-model="upwd"
                @blur="regtext1"
                
              />
            </li>
            <li>
              <label for="">确认密码:</label
              ><input
                type="password"
                placeholder="确认密码"
                class="inp"
                v-model="upwd2"
              />
            </li>
            <li>
              <input type="checkbox" class="low_inp" /><span class="reg_tex"
                >我已阅读并接受 《给力生鲜 服务协议条款》</span
              >
            </li>
            <li>
              <input
                type="submit"
                value="立即注册"
                class="reg_btn"
                @click="register"
              />
            </li>
          </ul>
        </form>
      </div>
    </div>
    <!-- 引入页尾 -->
    <myfooter></myfooter>
  </div>
</template>
<script>
import myfooter from "./Footer.vue";
export default {
  components: { myfooter },
  data() {
    return {
      uname: "",
      upwd: "",
      upwd2: "",
    };
  },
  methods: {
    register() {
      if (this.upwd == this.upwd2) {
        this.axios
          .post("/users/signup", `uname=${this.uname}&upwd=${this.upwd}`)
          .then((result) => {
            if (result.data.ok == 1) {
              alert(`恭喜注册成功！`);
              this.$router.push("/login");
            } else {
              alert(`注册失败：${result.data.msg}`);
            }
          });
      } else {
        alert("两次密码输入不一致，请重试");
      }
    },
    // 验证用户名
    regtext() {
      let reg = /^[a-zA-Z0-9_-]{4,16}$/;
      if (reg.test(this.uname)) {
      } else {
        alert("用户名格式不正确");
      }
    },
   
    // 验证密码
    regtext1() {
      let reg2 = /^[a-zA-Z0-9_-]{4,16}$/;
      if (reg2.test(this.upwd)) {
      } else {
        alert("密码格式不正确");
      }
    },
   
  },
};
</script>

<style scoped>
body,
div,
li,
ul,
ol,
dl,
dd,
dt,
span,
b,
strong,
p,
h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  padding: 0;
}
img,
a {
  border: none;
  text-decoration: none;
}
.regmain_bg {
  width: 100%;
  height: auto;
  background-color: #f5f5f5;
  min-height: 500px;
  padding: 0 10px 30px 0;
  overflow: hidden;
  min-width: 1000px;
}
.reg_mainbox {
  width: 1000px;
  height: auto;
  min-height: 500px;
  margin: 0 auto;
  overflow: hidden;
}
.reg_logo {
  width: 100%;
  height: auto;
  overflow: hidden;
  margin: 35px auto;
}
.reg_logo span {
  height: 36px;
  line-height: 36px;
  padding-left: 20px;
  font-size: 20px;
  border-left: 1px solid #cccc;
  margin-left: 20px;
  margin-bottom: 20px;
  color: #888;
}
.reg_top {
  width: 100%;
  height: 40px;
  overflow: hidden;
}
.reg_top span {
  float: left;
  width: 120px;
  height: 38px;
  color: #f00;
  font-size: 14px;
  border: 1px solid #dedede;
  border-top: 2px solid #f00;
  text-align: center;
  line-height: 36px;
  border-bottom: none;
  background: #fff;
  cursor: pointer;
}
.reg_top .reg_link {
  color: #666;
  font-size: 13px;
  line-height: 36px;
  float: right;
}
.reg_main {
  width: 100%;
  min-height: 350px;
  border: 1px solid #dedede;
  overflow: hidden;
  background: white;
  margin: 0px auto 30px auto;
}
.reg_ul {
  margin-top: 20px;
}
.reg_main li {
  float: left;
  width: 540px;
  height: 60px;
  margin-left: 300px;
}
.reg_main label {
  width: 69px;
  height: 60px;
  margin-bottom: 0;
  overflow: hidden;
  text-align: center;
  line-height: 60px;
  font-size: 16px;
  color: #444444;
}
.reg_main .inp {
  float: right;
  display: block;
  width: 350px;
  height: 40px;
  border: 0;
  outline: none;
  line-height: 40px;
  margin-right: 110px;
  margin-top: 10px;
  border: 1px solid #ccc;
  padding-left: 15px;
  font-size: 12px;
}
.reg_main .low_inp {
  width: 15px;
  height: 15px;
  vertical-align: middle;
  margin-left: 80px;
}
.reg_btn {
  width: 300px;
  height: 40px;
  background: rgb(255, 114, 19);
  border-radius: 3px;
  border-style: none;
  cursor: pointer;
  color: rgb(255, 255, 255);
  font-size: 14px;
  margin-top: 20px;
  margin-left: 80px;
}
.reg_tex {
  font-size: 12px;
  color: #666;
}
</style>

