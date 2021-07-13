
<template>
  <div>
    <div class="footer">
      <div class="foot_one">
        <div class="foot_cont">
          <div class="foot_one">
            <dl class="fot_ic1 ml-0">
              <dt>基地直供</dt>
              <dd class="mt-0">品质护航，购物无忧</dd>
            </dl>
            <dl class="fot_ic2">
              <dt>新鲜实惠</dt>
              <dd class="mt-0">直采直供 民生工程</dd>
            </dl>
            <dl class="fot_ic3">
              <dt>急速配送</dt>
              <dd class="mt-0">闪电发货，直达客户</dd>
            </dl>
            <dl class="fot_ic4">
              <dt>良好口碑</dt>
              <dd class="mt-0">用心服务，星级售后</dd>
            </dl>
            <dl class="fot_ic5">
              <dt>权威荣誉</dt>
              <dd class="mt-0">实体购物，更加安心</dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
    <!-- 底部二s -->
    <div class="footer_tow">
      <div class="foot_tow">
        <dl class="list_one list_1 mb-0">
          <dd class="mb-0">帮助中心</dd>
          <dt><a href="#" class="f_last">单位采购说明</a></dt>
          <dt><a href="#" class="f_last">积分兑换说明</a></dt>
        </dl>
        <dl class="list_tow list_1 mb-0">
          <dd class="mb-0">付款方式</dd>
          <dt><a href="#" class="f_last">支付细节</a></dt>
        </dl>
        <dl class="list_thire list_1 mb-0">
          <dd class="mb-0">售后服务</dd>
          <dt><a href="#" class="f_last">联系我们</a></dt>
          <dt><a href="#" class="f_last">退换货政策</a></dt>
        </dl>
        <dl class="list_f list_1 mb-0">
          <dd class="mb-0">配送方式</dd>
          <dt><a href="#" class="f_last">配送方式</a></dt>
          <dt><a href="#" class="f_last">配送时间</a></dt>
          <dt><a href="#" class="f_last">配送站点</a></dt>
        </dl>
        <dl class="list_h list_1 mb-0">
          <dd class="mb-0">联系方式</dd>
          <dt><a href="#" class="f_last5">服务热线:17770023619</a></dt>
          <dt><a href="#" class="f_last6"></a></dt>
        </dl>
      </div>
    </div>
    <!-- 底部二end -->
    <!-- 底部三s -->
    <div class="copy">
      <div class="copy_cont">
        <div class="mt-4">
          <a href="#">首页</a>| <a href="#">招聘英才</a>|
          <a href="#">联系我们</a>| <a href="#"> 关于我们　</a>
        </div>
        <p>
          客服热线：17770023619 (8:30 - 20:00) All Rights Reserved
          版权所有：给力生鲜 [赣ICP备14010147号-1] 技术支持：百恒网络
        </p>
      </div>
    </div>
    <!-- 底部三end -->
  </div>
</template>
// 底部一s
<style  scoped>
.footer {
  width: 100%;
  height: 98px;
  background: #37ab40;
  min-width: 1200px;
  overflow: hidden;

}
.foot_cont {
  width: 1200px;
  height: 98px;
  margin: 0 auto;
  background-color: palevioletred no-repeat 0 center;
  overflow: hidden;

}
.fot_ic1 {
  background: url(/img/register/f-icon1.png) no-repeat 0 center;
}
.fot_ic2 {
  background: url(/img/register/f-icon2.png) no-repeat 0 center;
}
.fot_ic3 {
  background: url(/img/register/f-icon3.png) no-repeat 0 center;
}
.fot_ic4 {
  background: url(/img/register/f-icon4.png) no-repeat 0 center;
}
.fot_ic5 {
  background: url(/img/register/f-icon5.png) no-repeat 0 center;
}
.foot_one dl {
  height: 52px;
  float: left;
  margin-top: 22px;
  color: #fff;
  padding-left: 62px;
  margin-left: 84px;
}
.fot_ic1 dt {
  font-size: 18px;
  font-weight: 500;
}

.foot_one dd {
  margin-bottom: 0;
  font-size: 12px;
}
</style>
// 底部一end'
//底部二s
<style scoped>
.footer_tow {
  width: 100%;
  height: 215px;
  background-color: palevioletred;
  min-width: 1200px;
  background: #f6f6f6;
  border-bottom: 1px solid #fff;
  overflow: hidden;
}
.foot_tow {
  width: 1200px;
  height: 160px;
  min-width: 1200px;
  margin: 30px auto 0px auto;

  overflow: hidden;
}
.list_one,
.list_tow,
.list_thire,
.list_f {
  border-right: 1px solid #e1e1e1;
  float: left;

  margin-right: 10px;
  width: 210px;
  height: 160px;
  text-align: center;
}
.list_one dd,
.list_tow dd,
.list_thire dd,
.list_f dd,
.list_h dd {
  margin-top: 10px;
  font-size: 16px;
  color: #000;
}
.list_one dt,
dd,
.list_tow dt,
.list_thire dt,
.list_f dt,
.list_h dt {
  margin-top: 15px;
  font-size: 12px;
}
.f_last {
  color: #666;
}
.f_last:hover,
.f_last5:hover {
  color: #37ab40;
}
.f_last5 {
  font-size: 16px;
  color: #666;
  font-weight: 700;
}
</style>
// 底部二end
// 底部三s
<style scoped>
.copy {
  width: 100%;
  height: 115px;

  overflow: hidden;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
}
.copy_cont {
  width: 1200px;
  height: 113px;
  margin: 0 auto;

  text-align: center;
}
.copy_cont a {
  padding: 0 20px;
  color: #666;
  font-size: 12px;
}
.copy_cont a:hover {
  color: #37ab40;
}
p {
  margin-top: 30px;
  color: #666;
  font-size: 12px;
}
</style>
