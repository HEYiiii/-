//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    data:1
  },
  onLoad: function(options) {
    var data = options.data;
    console.log(data);
    wx.scanCode({
      success (res) {
        wx.navigateTo({
          url: '../green/green?data='+data,
        })
      }
    })
  }
})
