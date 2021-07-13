
// 彻底懒加载 只有用户点击了才会下载 比起异步还是会慢一点
// 异步懒加载 是有prefetch和preloae preload是异步的 一边看一边下载别的文件 边下载边显示 prefetch是边下载不显示 偷跑流量
module.exports={
    chainWebpack:config=>{
      config.plugins.delete("prefetch")
      //删除index.html开头的带有prefetch属性的link，不要异步下载暂时不需要的页面组件文件
    },
    devServer: {
      proxy: {
        '/': {
          target: `http://127.0.0.1:4000`,
          changeOrigin: true,
          // pathRewrite: {
          //   '^/api' : '' //将程序中的/api，替换为空字符串，再和target中的基础路径拼接起来作为发送到服务器的最终请求地址。
          // }
        }
      }
    }
  
  
  }