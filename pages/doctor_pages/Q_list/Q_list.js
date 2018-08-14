// pages/doctor_pages/Q_list/Q_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      order_list:[
          {
              "date":"今天",
              "day_list":[
                  {"name":"lijia",
                    "dis":"梅尼埃bing",
                    "care":"True"
                  },
                  {
                      "name": "lijia",
                      "dis": "梅尼埃",
                      "care": "False"
                  },
              ]
          },
          {
              "date": "昨天",
              "day_list": [
                  {
                      "name": "lijiaafsa",
                      "dis": "梅尼埃",
                      "care": "Flase"
                  },
              ]
          },
          {
              "date": "2018年08月12日",
              "day_list": [
                  {
                      "name": "lijia",
                      "dis": "梅尼埃",
                      "care": "Flase"
                  },
                  {
                      "name": "lijia",
                      "dis": "梅尼埃",
                      "care": "True"
                  },
              ]
          },
      ]
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

    carebtn:function(e){
        var iscare = e.currentTarget.dataset.care;      
        console.log(iscare);
        e.currentTarget.dataset.item = !iscare;
        this.setData({
            
        })
    },

    itemclick(e){
        var iscare = e.currentTarget.dataset.item;
        console.log(iscare);
        wx.navigateTo({
            url: '../check_question/check_question',
        })
    },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})