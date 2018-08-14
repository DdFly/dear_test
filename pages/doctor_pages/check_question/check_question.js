// pages/doctor_pages/check_question/check_question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      disable:true,
      question: [
          {
              "id": "1", "que": "请选择您的眩晕属于哪种类型？", "show": '', "flag": "check",
              "anwser": [
                  { "name": "A", "value": "头昏昏沉沉" },
                  { "name": "B", "value": "天旋地转" },
                  { "name": "C", "value": "不稳感" },
                  { "name": "D", "value": "视物模糊/晃动" },
                  { "name": "E", "value": "眼前发黑、似要跌倒" },
              ]
          },
          {
              "id": "2", "que": "您是否首次出现眩晕？", "show": "", "flag": "radio",
              "anwser": [
                  { "name": "A", "value": "首次（第一次晕）" },
                  { "name": "B", "value": "曾经发作过（反复发作）", },
              ]
          },
          {
              "id": "1", "que": "请选择您的眩晕属于哪种类型？", "show": '', "flag": "check",
              "anwser": [
                  { "name": "A", "value": "头昏昏沉沉" ,},
                  { "name": "B", "value": "天旋地转" },
                  { "name": "C", "value": "不稳感" },
                  { "name": "D", "value": "视物模糊/晃动" },
                  { "name": "E", "value": "眼前发黑、似要跌倒" },
              ]
          },
          {
              "id": "2", "que": "您是否首次出现眩晕？", "show": "", "flag": "radio",
              "anwser": [
                  { "name": "A", "value": "首次（第一次晕）" },
                  { "name": "B", "value": "曾经发作过（反复发作）", },
              ]
          },
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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