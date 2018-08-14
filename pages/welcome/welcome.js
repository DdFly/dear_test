//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false, 
   
  },

  onLoad: function () {
    
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    // wx.clearStorage();

    wx.getStorage({
        key: 'openid',
        success: function (res) {
            console.log(res.data)
            app.globalData.openid = res.data
        },
        fail: function () {
            console.log("openid获取不到")
        }
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  login:function(){
      if (app.globalData.openid){

          wx.switchTab({
              url: '../tab1/index/index'
          })
      }else{
          wx.redirectTo({
              url: '../zhuce/zhuce',
          })
      }
      
  }
})
