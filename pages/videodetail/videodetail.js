// pages/videodetail/videodetail.js
var app=getApp();
Page({
  data:{
    video:{}
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log(app.globalData.video);
    this.setData({
      video:app.globalData.video
    });
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})