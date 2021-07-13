<template>
  <div>
    <!-- 头部开始 -->
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
    <!-- 头部结束 -->
    <!-- 详情页区域开始 -->
    <div class="detail_box">
      <div class="det">
        <!-- 面包屑导航 -->
        <div class="mbx">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <a
                  href="#"
                  style="font-size: 12px; color: black; font-weight: 800"
                  >当前位置</a
                >
              </li>
              <li class="breadcrumb-item">
                <a
                  href="#"
                  style="font-size: 12px; color: black; font-weight: 800"
                  >首页</a
                >
              </li>
              <li
                class="breadcrumb-item active"
                aria-current="page"
                style="font-size: 16px"
              >
                莴笋豆菇
              </li>
            </ol>
          </nav>
        </div>
        <!-- 页面内容左侧 -->
        <div class="de_l">
          <div class="de_pic">
            <img :src="goods.img" alt="" />
            <!-- 鼠标层罩 -->
            <div v-show="topShow" class="top" :style="topStyle"></div>
            <!-- 最顶层覆盖了整个原图空间的透明层罩 -->
            <div
              class="maskTop"
              @mouseenter="enterHandler"
              @mousemove="moveHandler"
              @mouseout="outHandler"
            ></div>
            <div v-show="rShow" class="right">
              <img
                :style="r_img"
                class="rightImg"
               :src="goods.img"
                alt=""
              />
            </div>
          </div>
        </div>
        <!-- 页面内容右侧 -->
        <div class="de_r">
          <h2 class="mb-3">{{goods.name}}</h2>
          <div class="de_goods mb-3">
            净重估价：<span style="color: red">{{ (goods.gprice/100).toFixed(2) }}</span>
          </div>
          <div class="de_goods ml-3 mb-3">
            给力价：
            <span style="font-weight: 900; color: red">{{ (goods.place/100).toFixed(2) }}/{{ goods.unit }}</span>
          </div>
          <div class="de_goods ml-4 mb-3">货号： <span>--</span></div>
          <div class="de_goods ml-4 mb-3">产地：<span>{{goods.Co}}</span></div>
          <div class="de_goods mb-3">存储方法：<span>冷藏</span></div>
          <div class="de_goods ml-4 mb-3">
            评分：<img
              src="/img/uplowd/star_yellow.png"
              alt=""
              style="vertical-align: middle"
            />
          </div>
          <div class="de_bt mt-5">
            销量 :<span style="color: red">17</span>
            <span class="pl-5">累计评价:</span
            ><span style="color: red">0条 </span>
          </div>
          <!-- 按钮组 -->
          <div
            class="btn-group mt-3 ml-5"
            role="group"
            aria-label="Basic example"
          >
            <div style="line-height: 38px; font-size: 12px">数量：</div>
            <button type="button" @click="minus">-</button>
            <button type="button">{{n}}</button>
            <button type="button"  @click="add">+</button>
            <div style="line-height: 38px; font-size: 12px">
              &nbsp;件:&nbsp;库存968件
            </div>
          </div>
          <div class="de_link">
            <a href="" class="link1">立即购买</a>
            <a href="" class="link2">加入购物车</a>
          </div>
        </div>

        <!-- 页面内容边 -->
        <div class="de_b">
          <p class="mb-0 ml-5" style="font-size: 12px">看了还想看?</p>
          <ul class="kl">
            <li>
              <img src="/img/uplowd/1487561879.jpg" alt="" />
              <p><a href="">龙眼</a></p>
              <p>¥3.50</p>
            </li>
            <li>
              <img src="/img/uplowd/1487561879.jpg" alt="" />
              <p><a href="">龙眼</a></p>
              <p>¥3.50</p>
            </li>
            <li>
              <img src="/img/uplowd/1487561879.jpg" alt="" />
              <p><a href="">龙眼</a></p>
              <p>¥3.50</p>
            </li>
          </ul>
        </div>
        <ul class="xk mb-0">
          <li>
            <img :src="goods.img" alt="" />
          </li>
        </ul>
      </div>
    </div>
    <!-- 详情页区域结束 -->
    <!-- 页脚 -->
    <myfooter></myfooter>
  </div>
</template>
<script>
import myfooter from "../components/Footer.vue";
export default {
  props: ["id"],
  components: { myfooter },
  watch: {
    id() {
      this.axios
        .get("/details", {
          // 获取到服务器端的值 lid为当前请求的lid的数据 this.lid和上面的props:[lid对接上]
          params: { id: this.id },
        })
        .then((result) => {
          console.log(result.data);
          //          服务器端响应回来的product数据赋值给当前要使用的product 要什么取什么 详情页的右上角部分
          // this.product = result.data.product;
          // this.specs = result.data.specs;
        });
    },
  },
  data() {
    return {
      topStyle: { transform: "" },
      r_img: {},
      topShow: false,
      rShow: false,
      goods: {},
      n:0
    };
  },
  mounted() {
    // alert(this.id);
    this.axios
      .get("/goods/detail", {
        // 获取到服务器端的值 lid为当前请求的lid的数据 this.lid和上面的props:[lid对接上]
        params: { id: this.id },
      })
      .then((result) => {
        console.log(result.data);
        // 1.提出服务器的值 给data
        // // this.p1=result.data[0];
        // // this.p2=result.data[1];
        // // this.p3=result.data[2];
        // this.other=result.data.slice(-3);
        // 简写解构             三个点是收集除了之前的所有的
        this.goods = result.data.goods;
      });
  },
  methods: {
     add(){
       this.n++
     },
     minus(){
       if(this.n>0){this.n--}
     },
    // 鼠标进入原图空间函数
    enterHandler() {
      // 层罩及放大空间的显示
      this.topShow = true;
      this.rShow = true;
    },
    // 鼠标移动函数
    moveHandler(event) {
      // 鼠标的坐标位置
      let x = event.offsetX;
      let y = event.offsetY;
      // 层罩的左上角坐标位置，并对其进行限制：无法超出原图区域左上角
      let topX = x - 100 < 0 ? 0 : x - 100;
      let topY = y - 100 < 0 ? 0 : y - 100;
      // 对层罩位置再一次限制，保证层罩只能在原图区域空间内
      if (topX > 200) {
        topX = 200;
      }
      if (topY > 200) {
        topY = 200;
      }
      // 通过 transform 进行移动控制
      this.topStyle.transform = `translate(${topX}px,${topY}px)`;
      this.r_img.transform = `translate(-${2 * topX}px,-${2 * topY}px)`;
    },
    // 鼠标移出函数
    outHandler() {
      // 控制层罩与放大空间的隐藏
      this.topShow = false;
      this.rShow = false;
    },
  },
};
</script>

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


// 详情页开始
<style scoped>
/* 放大的图片，通过定位将左上角定位到(0,0) */
.rightImg {
  display: inline-block;
  width: 600px;
  height: 600px;
  position: absolute;
}
/* 右边的区域图片放大空间 */
.right {
  margin-left: 412px;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;
  position: relative;
  overflow: hidden;
  top: -360px;
}
/* 一个最高层层罩 */
.maskTop {
  width: 400px;
  height: 400px;
  position: absolute;
  z-index: 1;
  top: 270px;
  left: 680px;
}
/* 层罩， */
.top {
  width: 200px;
  height: 200px;
  background-color: lightcoral;
  opacity: 0.4;
  position: absolute;
  top: 270px;
  left: 680px;
}
.detail_box {
  width: 100%;
  height: auto;
  background: #f2f2f2;
  min-width: 1200px;
}
.det {
  width: 1200px;
  height: auto;
  min-height: 850px;
  margin: 0 auto;
  background: white;
}
.de_l {
  width: 400px;
  height: 400px;

  border: 1px solid #ccc;
  float: left;
  margin-top: 10px;
  margin-left: 10px;
}

.de_pic img {
  width: 100%;
}
.xk {
  float: left;
  margin-top: 10px;
  margin-left: 10px;
  border: 1px solid #ccc;
}
.xk li {
  width: 68px;
  height: 68px;
}
.xk li img {
  width: 100%;
}
.de_r {
  width: 500px;
  height: 400px;

  float: left;
  margin-top: 10px;
  margin-left: 30px;
}
.de_r > h2 {
  width: 100%;
  height: auto;
  overflow: hidden;
  line-height: 24px;
  font-family: "微软雅黑";
  font-weight: normal;
  font-size: 16px;
}
.de_goods {
  width: 100%;
  font-size: 12px;
  color: rgb(153, 147, 147);
}
.de_bt {
  width: 100%;
  height: 50px;
  line-height: 50px;
  border-top: 1px dotted #ccc;
  border-bottom: 1px dotted #ccc;
  font-size: 14px;
  color: rgb(153, 147, 147);
}

.btn-group button {
  width: 80px;
  background: white !important;
  border: 1px solid #ccc;
  outline: none;
  cursor: pointer;
}

.de_b {
  width: 240px;
  height: 774px;
  float: right;

  margin-top: 10px;
}
.de_link a {
  width: 200px;
  height: 40px;
  display: inline-block;
  margin-top: 40px;
  margin-left: 20px;
  line-height: 40px;
  text-align: center;
}
.link1 {
  color: #fff;
  background: #ff6700;
  border: 1px solid #ff6700;
  border-radius: 2px;
}
.link2 {
  color: #fff;
  background: #c00;
  border: 1px solid #c00;
  border-radius: 2px;
}
.kl li {
  width: 220px;
  height: 240px;
  background: white;
  text-align: center;
  margin: 0 10px 10px 10px;
  box-shadow: 1px 1px 3px #888888;
}
.kl li img {
  display: inline-block;
  width: 156px;
  height: 156px;
}
</style>
// 详情页结束