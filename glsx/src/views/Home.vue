<template>
  <div>
    <myheader></myheader>
    <!-- 轮播 -->
    <div class="banner">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/img/uplowd/lb.jpg" class="d-block banner1" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="/img/uplowd/lb.jpg" class="d-block banner1" alt="..." />
          </div>
        </div>
      </div>
    </div>
    <!-- 限时抢购 s-->
    <div class="all_list">
      <div class="list_item">
        <div class="tit"><p class="pl-5 mb-0">限时抢购</p></div>
        <div class="list-1">
          <ul class="mb-0 clearfix">
            <li v-for="(p, i) of xsgoods" :key="i">
              <div class="list-img">
                <router-link :to="`/details/${p.id}`">
                  <img :src="p.img" alt="" />
                </router-link>
              </div>
              <div class="list-text">
                <p class="mb-0">{{ p.name }}</p>
                <p class="mb-0" style="color: red; font-weight: 500">
                  给力价：{{ (p.place / 100).toFixed(2) }}/{{ p.unit }}
                </p>
                <p>每份估价：{{ (p.gprice / 100).toFixed(2) }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 限时抢购 end-->

    <!-- 一楼 -->
    <div class="list2">
      <div class="list2-img">
        <h3>蔬菜豆菇</h3>
        <div class="list-pic1">
          <img src="/img/uplowd/59b8e95e08ae2.jpg" alt="" />
        </div>
        <p class="mb-0 list2-text">家门口的放心菜</p>
        <router-link to="" class="list2-text1">查看更多></router-link>
      </div>
      <ul class="mb-0 list2-ul">
        <li v-for="(p, i) of scgoods" :key="i">
          <div class="list2-pic">
            <router-link :to="`/details/${p.id}`">
              <img :src="p.img" alt="" />
            </router-link>
          </div>
          <div class="list-text">
            <p class="mb-0">{{ p.name }}</p>
            <p class="mb-0" style="color: red; font-weight: 500">
              给力价：{{ (p.place / 100).toFixed(2) }}/{{ p.unit }}
            </p>
            <p>每份估价：{{ (p.gprice / 100).toFixed(2) }}</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 二楼 -->
    <div class="list2">
      <div class="list3-img">
        <h3>新鲜水果</h3>
        <div class="list-pic1">
          <img src="/img/uplowd/59b8e97ac6c03.jpg" alt="" />
        </div>
        <p class="mb-0 list3-text">满满的鲜果能量</p>
        <router-link to="" class="list3-text1">查看更多></router-link>
      </div>
      <ul class="mb-0 list2-ul">
        <li v-for="(p, i) of sggoods" :key="i">
          <div class="list2-pic">
            <router-link :to="`/details/${p.id}`">
              <img :src="p.img" alt="" />
            </router-link>
          </div>
          <div class="list-text">
            <p class="mb-0">{{ p.name }}</p>
            <p class="mb-0" style="color: red; font-weight: 500">
              给力价：{{ (p.place / 100).toFixed(2) }}/{{ p.unit }}
            </p>
            <p>每份估价：{{ (p.gprice / 100).toFixed(2) }}</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 三楼 -->
    <div class="list2">
      <div class="list4-img">
        <h3>鲜肉蛋禽</h3>
        <div class="list-pic1">
          <img src="/img/uplowd/59b8ecb07faf1.jpg" alt="" />
        </div>
        <p class="mb-0 list4-text">民生品质放心肉</p>
        <router-link to="" class="list4-text1">查看更多></router-link>
      </div>
      <ul class="mb-0 list2-ul">
        <li v-for="(p, i) of rgoods" :key="i">
          <div class="list2-pic">
            <router-link :to="`/details/${p.id}`">
              <img :src="p.img" alt="" />
            </router-link>
          </div>
          <div class="list-text">
            <p class="mb-0">{{ p.name }}</p>
            <p class="mb-0" style="color: red; font-weight: 500">
              给力价：{{ (p.place / 100).toFixed(2) }}/{{ p.unit }}
            </p>
            <p>每份估价：{{ (p.gprice / 100).toFixed(2) }}</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 四楼 -->
    <div class="list2">
      <div class="list5-img">
        <h3>速食速冻</h3>
        <div class="list-pic1">
          <img src="/img/uplowd/59b8ecb07faf1.jpg" alt="" />
        </div>
        <p class="mb-0 list5-text">童话里的肉香</p>
        <router-link to="" class="list5-text1">查看更多></router-link>
      </div>
      <ul class="mb-0 list2-ul">
        <li v-for="(p, i) of dong" :key="i">
          <div class="list2-pic">
            <router-link :to="`/details/${p.id}`">
              <img :src="p.img" alt="" />
            </router-link>
          </div>
          <div class="list-text">
            <p class="mb-0">{{ p.name }}</p>
            <p class="mb-0" style="color: red; font-weight: 500">
              给力价：{{ (p.place / 100).toFixed(2) }}/{{ p.unit }}
            </p>
            <p>每份估价：{{ (p.gprice / 100).toFixed(2) }}</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 五楼 -->
    <div class="list2">
      <div class="list6-img">
        <h3>粮油副食</h3>
        <div class="list-pic1">
          <img src="/img/uplowd/59b8ecc3b8adb.jpg" alt="" />
        </div>
        <p class="mb-0 list6-text">食用放心粮油</p>
        <router-link to="" class="list6-text1">查看更多></router-link>
      </div>
      <ul class="mb-0 list2-ul">
        <li v-for="(p, i) of lgoods" :key="i">
          <div class="list2-pic">
            <router-link :to="`/details/${p.id}`">
              <img :src="p.img" alt="" />
            </router-link>
          </div>
          <div class="list-text">
            <p class="mb-0">{{ p.name }}</p>
            <p class="mb-0" style="color: red; font-weight: 500">
              给力价：{{ (p.place / 100).toFixed(2) }}/{{ p.unit }}
            </p>
            <p>每份估价：{{ (p.gprice / 100).toFixed(2) }}</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 六楼 -->
    <div class="list2">
      <div class="list7-img">
        <h3>水产海鲜</h3>
        <div class="list-pic1">
          <img src="/img/uplowd/59b8ecd6edadb.jpg" alt="" />
        </div>
        <p class="mb-0 list7-text">尝的就是新鲜</p>
        <router-link to="" class="list7-text1">查看更多></router-link>
      </div>
      <ul class="mb-0 list2-ul">
        <li v-for="(p, i) of  shuicgoods" :key="i">
          <div class="list2-pic">
            <router-link :to="`/details/${p.id}`">
              <img :src="p.img" alt="" />
            </router-link>
          </div>
          <div class="list-text">
            <p class="mb-0">{{ p.name }}</p>
            <p class="mb-0" style="color: red; font-weight: 500">
              给力价：{{ (p.place / 100).toFixed(2) }}/{{ p.unit }}
            </p>
            <p>每份估价：{{ (p.gprice / 100).toFixed(2) }}</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 七楼 -->
    <div class="list2">
      <div class="list8-img">
        <h3>酒类</h3>
        <div class="list-pic1">
          <img src="/img/uplowd/59b8ecff7fc09.jpg" alt="" />
        </div>
        <p class="mb-0 list8-text">酒味香醇质量保证</p>
        <router-link to="" class="list8-text1">查看更多></router-link>
      </div>
      <ul class="mb-0 list2-ul">
        <li v-for="(p, i) of jiugoods" :key="i">
          <div class="list2-pic">
            <router-link :to="`/details/${p.id}`">
              <img :src="p.img" alt="" />
            </router-link>
          </div>
          <div class="list-text">
            <p class="mb-0">{{ p.name }}</p>
            <p class="mb-0" style="color: red; font-weight: 500">
              给力价：{{ (p.place / 100).toFixed(2) }}/{{ p.unit }}
            </p>
            <p>每份估价：{{ (p.gprice / 100).toFixed(2) }}</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 八楼 -->
    <div class="list2">
      <div class="list9-img">
        <h3>牛奶饮料</h3>
        <div class="list-pic1">
          <img src="/img/uplowd/59b8ed1e6b1a4.jpg" alt="" />
        </div>
        <p class="mb-0 list9-text">营养健康每一天</p>
        <router-link to="" class="list9-text1">查看更多></router-link>
      </div>
      <ul class="mb-0 list2-ul">
        <li v-for="(p, i) of ylgoods" :key="i">
          <div class="list2-pic">
            <router-link :to="`/details/${p.id}`">
              <img :src="p.img" alt="" />
            </router-link>
          </div>
          <div class="list-text">
            <p class="mb-0">{{ p.name }}</p>
            <p class="mb-0" style="color: red; font-weight: 500">
              给力价：{{ (p.place / 100).toFixed(2) }}/{{ p.unit }}
            </p>
            <p>每份估价：{{ (p.gprice / 100).toFixed(2) }}</p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 九楼 -->
    <div class="list2">
      <div class="list10-img">
        <h3>日用百货</h3>
        <div class="list-pic1">
          <img src="/img/uplowd/59b8ed34956e6.jpg" alt="" />
        </div>
        <p class="mb-0 list10-text">精致生活品质人生</p>
        <router-link to="" class="list10-text1">查看更多></router-link>
      </div>
      <ul class="mb-0 list2-ul">
        <li v-for="(p, i) of rygoods" :key="i">
          <div class="list2-pic">
            <router-link :to="`/details/${p.id}`">
              <img :src="p.img" alt="" />
            </router-link>
          </div>
          <div class="list-text">
            <p class="mb-0">{{ p.name }}</p>
            <p class="mb-0" style="color: red; font-weight: 500">
              给力价：{{ (p.place / 100).toFixed(2) }}/{{ p.unit }}
            </p>
            <p>每份估价：{{ (p.gprice / 100).toFixed(2) }}</p>
          </div>
        </li>
      </ul>
    </div>
    <myfooter></myfooter>
  </div>
</template>
<script>
import myheader from "../components/Header.vue";
import myfooter from "../components/Footer.vue";
export default {
  components: { myheader, myfooter },
  data() {
    return {
      // 使用占位  不然服务器端报错undefind
      // 上面也可以使用 三目的方式占位{{p1.price!==undefined?p1.price.toFixed(2):0}}
      //<router-link class="btn btn-primary" :to="p1.href!==undefined?p1.href:''">查看详情</router-link>
      // 需要删除两个大div的内容 留一个遍历v-for
      goods: [], //服务器端的后三个商品
      xsgoods: [],
      sggoods: [],
      scgoods: [],
      rou: [],
      dong: [],
      lgoods: [],
      shuicgoods: [],
      jiugoods:[],
      ylgoods:[],
      rygoods:[]
    };
  },
  mounted() {
    this.axios.get("/goods/list").then((result) => {
      console.log(result.data);
      // 1.提出服务器的值 给data
      // // this.p1=result.data[0];
      // // this.p2=result.data[1];
      // // this.p3=result.data[2];
      // this.other=result.data.slice(-3);
      // 简写解构             三个点是收集除了之前的所有的

      var sgList = [];
      var scList = [];
      var rList = [];
      var dList = [];
      var lList = [];
      var jList=[];
      var shuicList = [];
       var  ylList=[];
       var ryList =[];
      for (let index = 0; index < result.data.goods.length; index++) {
        if (result.data.goods[index].ctype == 1) {
          this.xsgoods.push(result.data.goods[index]);
        }
        if (result.data.goods[index].gtype == "shuiguo") {
          sgList.push(result.data.goods[index]);
        }
        if (result.data.goods[index].gtype == "sucai") {
          scList.push(result.data.goods[index]);
        }
        if (result.data.goods[index].gtype == "rou") {
          rList.push(result.data.goods[index]);
        }
        if (result.data.goods[index].gtype == "dong") {
          dList.push(result.data.goods[index]);
        }
        if (result.data.goods[index].gtype == "liangyou") {
          lList.push(result.data.goods[index]);
        }
        if (result.data.goods[index].gtype == "shuichan") {
          shuicList.push(result.data.goods[index]);
        }
         if (result.data.goods[index].gtype == "jiu") {
         jList.push(result.data.goods[index]);
        }
          if (result.data.goods[index].gtype == "yl") {
         ylList.push(result.data.goods[index]);
        }
          if (result.data.goods[index].gtype == "ry") {
         ryList.push(result.data.goods[index]);
        }
      }
      this.sggoods = sgList.slice(-4);
      this.goods = result.data.goods;
      this.scgoods = scList.slice(-4);
      this.rgoods = rList.slice(-4);
      this.dong = dList.slice(-4);
      this.lgoods = lList.slice(-4);
      this.shuicgoods = shuicList.slice(-4);
      this.jiugoods = jList.slice(-4);
      this.ylgoods = ylList.slice(-4);
       this.rygoods = ryList.slice(-4);
    });
  },
};
</script>
// 限时抢购s
<style scoped>
.banner {
  height: 446px;
  width: 100%;
  overflow: hidden;
  min-width: 1200px;
  background: white;
}
.banner1 {
  margin: 0 auto;
}
.all_list {
  width: 100%;
  height: auto;
}
.all_list li:hover{
  border: 3px solid #47b64f;
}
.list_item {
  width: 1200px;
  height: 317px;

  margin: 0 auto;
}
.tit {
  width: 100%;
  height: 56px;
  border-bottom: 2px solid #e8e8e8;
  line-height: 56px;
  background: url(/img/uplowd/icon5.png) no-repeat;
  background-position: 15px;
}
.tit > p {
  font-size: 22px;
  color: black;
}
.list-1 {
  width: 100%;
  height: 261px;
}
.list-1 li {
  width: 220px;
  height: 261px;
  margin: 0 25px 0 0;
  background: white;
  float: left;
  text-align: center;
  box-shadow: 2px 2px 5px #888888;
}
.list-1 :last-child {
  margin: 0;
}
.list-img {
  width: 165px;
  height: 165px;
  margin: 10px auto 0px auto;
  overflow: hidden;
}
.list-img img {
  width: 100%;
  overflow: hidden;
}

.list-text p {
  font-size: 12px;
  font-weight: 800;
}
.list2 {
  width: 1200px;
  height: 267px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
.list2  li:hover{
border: 3px solid #47b64f;
}
.list2-img {
  width: 212px;
  height: 267px;
  background: url(/img/uplowd/p-color1.png);
  float: left;
}
.list3-img {
  width: 212px;
  height: 267px;
  background: url(/img/uplowd/p-color2.png);
  float: left;
}
.list4-img {
  width: 212px;
  height: 267px;
  background: url(/img/uplowd/p-color3.png);
  float: left;
}
.list5-img {
  width: 212px;
  height: 267px;
  background: url(/img/uplowd/p-color4.png);
  float: left;
}
.list6-img {
  width: 212px;
  height: 267px;
  background: url(/img/uplowd/p-color5.png);
  float: left;
}
.list7-img {
  width: 212px;
  height: 267px;
  background: url(/img/uplowd/p-color6.png);
  float: left;
}
.list8-img {
  width: 212px;
  height: 267px;
  background: url(/img/uplowd/p-color7.png);
  float: left;
}
.list9-img {
  width: 212px;
  height: 267px;
  background: url(/img/uplowd/p-color8.png);
  float: left;
}
.list10-img {
  width: 212px;
  height: 267px;
  background: url(/img/uplowd/p-color9.png);
  float: left;
}
.list10-img > h3,
.list9-img > h3,
.list8-img > h3,
.list7-img > h3,
.list6-img > h3,
.list5-img > h3,
.list4-img > h3,
.list2-img > h3,
.list3-img > h3 {
  width: 212px;
  height: 40px;
  text-align: center;
  color: #fff;
  margin-bottom: 0;
  line-height: 40px;
}
.list-pic1 {
  width: 210px;
  height: 135px;
  margin-top: 12px;
  margin-left: 1px;
}
.list2-text {
  color: #47b64f;
  font-size: 22px;
  overflow: hidden;
  text-align: center;
}
.list2-text1 {
  width: 100%;
  height: 20px;
  display: block;
  text-align: center;
  color: #47b64f;
  font-size: 14px;
  font-weight: 600;
}
.list2-ul {
  width: 988px;
  height: 267px;

  float: left;
}
.list2-ul li {
  width: 220px;
  height: 267px;
  float: left;
  margin-left: 27px;
  box-shadow: 2px 2px 5px #888888;
  text-align: center;
}
.list2-pic {
  width: 165px;
  height: 165px;
  margin: 10px auto 0px auto;
  overflow: hidden;
}
.list2-pic img {
  width: 100%;
}
.list3-text {
  color: #ffb820;
  font-size: 22px;
  overflow: hidden;
  text-align: center;
}
.list3-text1 {
  width: 100%;
  height: 20px;
  display: block;
  text-align: center;
  color: #ffb820;
  font-size: 14px;
  font-weight: 600;
}
.list4-text {
  color: #f35454;
  font-size: 22px;
  overflow: hidden;
  text-align: center;
}
.list5-text {
  color: #35b2cd;
  font-size: 22px;
  overflow: hidden;
  text-align: center;
}
.list4-text1 {
  width: 100%;
  height: 20px;
  display: block;
  text-align: center;
  color: #f35454;
  font-size: 14px;
  font-weight: 600;
}
.list5-text1 {
  width: 100%;
  height: 20px;
  display: block;
  text-align: center;
  color: #35b2cd;
  font-size: 14px;
  font-weight: 600;
}
.list6-text {
  color: #a17c61;
  font-size: 22px;
  overflow: hidden;
  text-align: center;
}
.list6-text1 {
  width: 100%;
  height: 20px;
  display: block;
  text-align: center;
  color: #a17c61;
  font-size: 14px;
  font-weight: 600;
}
.list7-text {
  color: #549adc;
  font-size: 22px;
  overflow: hidden;
  text-align: center;
}
.list8-text {
  color: #daae37;
  font-size: 22px;
  overflow: hidden;
  text-align: center;
}
.list9-text {
  color: #2bb0e1;
  font-size: 22px;
  overflow: hidden;
  text-align: center;
}
.list10-text {
  color: #fa804f;
  font-size: 22px;
  overflow: hidden;
  text-align: center;
}
.list10-text1 {
  width: 100%;
  height: 20px;
  display: block;
  text-align: center;
  color: #fa804f;
  font-size: 14px;
  font-weight: 600;
}
.list7-text1 {
  width: 100%;
  height: 20px;
  display: block;
  text-align: center;
  color: #549adc;
  font-size: 14px;
  font-weight: 600;
}
.list8-text1 {
  width: 100%;
  height: 20px;
  display: block;
  text-align: center;
  color: #daae37;
  font-size: 14px;
  font-weight: 600;
}
.list9-text1 {
  width: 100%;
  height: 20px;
  display: block;
  text-align: center;
  color: #2bb0e1;
  font-size: 14px;
  font-weight: 600;
}
</style>
