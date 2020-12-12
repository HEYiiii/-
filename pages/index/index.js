//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
  },
  
  navTo:function(e){
    var data = e.currentTarget.dataset.id;
    // wx.scanCode({
    //   success (res) {
    //     wx.navigateTo({
    //       url: '../green/green?data='+data,
    //     })
    //   }
    // })
    wx.navigateTo({
      url: '../logs/logs?data='+data
    })
 }
})
