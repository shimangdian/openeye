//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    videoList:[],
  },
  //事件处理函数
  goWatch: function(e) {
    var video=e.currentTarget.dataset.data.data;
    app.globalData.video=video;
    wx.navigateTo({
      url: '../videodetail/videodetail'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    wx.request({
      url: 'http://baobab.kaiyanapp.com/api/v4/tabs/selected',
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        that.setData({
          videoList: res.data.itemList
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
