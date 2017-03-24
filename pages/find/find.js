// pages/find/find.js
var app = getApp()
Page({
  
  data:{
    tabList:[],
    typeList:[]
  },
  bindtypeclick:function(e){
    var typeobj = e.currentTarget.dataset.data;
    var that = this;
    console.log(typeobj);
    wx.request({
      url:typeobj.apiUrl,
      method: 'GET',
      success:function(res){
        var list = res.data.itemList;
        var len = list.length;
        for(var i = 0; i < len; i++){
          if(list[i].type==="video"){
          var time = list[i].data.duration;
          time = parseInt(time/60)+"'"+time%60+'"';
          list[i].data.duration = time;
          }
        }
        var typeList = res.data.itemList;
        that.setData({
          typeList:res.data.itemList
        })
        console.log(typeList);
      }
    })
  },
  goWatch: function(e) {
    var video=e.currentTarget.dataset.data.data;
    app.globalData.video=video;
    wx.navigateTo({
      url: '../videodetail/videodetail'
    })
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    console.log("onload");
    var that = this;
    // 获取分类urlApi
    wx.request({
      url:'http://baobab.kaiyanapp.com/api/v4/discovery',
      method: 'GET', 
      success: function(res){
        that.setData({
          tabList:res.data.tabInfo.tabList
        })
      }
    });
    // 初始显示热门内容
    wx.request({
      url:'http://baobab.kaiyanapp.com/api/v4/discovery/hot',
      method: 'GET', 
      success: function(res){
        var list = res.data.itemList;
        var len = list.length;
        for(var i = 0; i < len; i++){
          if(list[i].type==="video"){
          var time = list[i].data.duration;
          time = parseInt(time/60)+"'"+time%60+'"';
          list[i].data.duration = time;
          }
        }
        var typeList = res.data.itemList;
        that.setData({
          typeList:res.data.itemList
        })
        console.log(typeList);
      }
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
