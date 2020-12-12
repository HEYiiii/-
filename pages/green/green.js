// pages/green/green.js
var util=require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowDate:'',
    text:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var data = options.data;
    var text1="";
    console.log(data);
    if(data==1){
      text1="进馆成功!";
      this.setData({
        nowDate: util.formatTime(new Date()),
        text:text1
      });
    }
    else{
      text1="出馆成功!";
      this.setData({
        text:text1
      });
    }
    console.log(this.text)
  }
})