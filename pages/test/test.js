Page({

  /**
   * 页面的初始数据
   */
  data: {
        list:[1,2,3,4,5,6,7,8],
        question: [
            {
                id: '1', que: '第一道问题', show:'', flag: 'radio', anwser: [
                    { name: 'USA', value: '美国' },
                    { name: 'CHN', value: '中国', checked: 'true' },
                    { name: 'BRA', value: '巴西' },
                    { name: 'JPN', value: '日本' },
                    { name: 'ENG', value: '英国' },
                    { name: 'TUR', value: '法国' },
                ]
            },
            {
                id: '1.1', que: '第二道问题', show:'none', flag: 'check', anwser: [
                    { name: 'USA', value: '美国' },
                    { name: 'CHN', value: '中国' },
                    { name: 'BRA', value: '巴西' },
                    { name: 'JPN', value: '日本' },
                    { name: 'ENG', value: '英国' },
                    { name: 'TUR', value: '法国' },
                ]
            },
            {
                id: '2', que: '第二道问题', show: '', flag: 'check', anwser: [
                    { name: 'USA', value: '美国' },
                    { name: 'CHN', value: '中国' },
                    { name: 'BRA', value: '巴西' },
                    { name: 'JPN', value: '日本' },
                    { name: 'ENG', value: '英国' },
                    { name: 'TUR', value: '法国' },
                ]
            },
            {
                id: '3', que: '第三道问题', show: '', flag: 'radio', anwser: [
                    { name: 'USA', value: '美国' },
                    { name: 'CHN', value: '中国' },
                    { name: 'BRA', value: '巴西' },
                    { name: 'JPN', value: '日本' },
                    { name: 'ENG', value: '英国' },
                    { name: 'TUR', value: '法国' },
                ]
            },
            {
                id: '4', que: '第四道问题', show: '', flag: 'check', anwser: [
                    { name: 'USA', value: '美国' },
                    { name: 'CHN', value: '中国' },
                    { name: 'BRA', value: '巴西' },
                    { name: 'JPN', value: '日本' },
                    { name: 'ENG', value: '英国' },
                    { name: 'TUR', value: '法国' },
                ]
            }

    ],
        
  },

  commit:function(){
    
    wx.showModal({
        title: '提交',
        content: '确定提交？',
        cancelText: '再核对',
        success: function(res){
            if(res.confirm){
                wx.switchTab({
                    url: '../index/index',
                })
            }
        }

    })
  },

  selectchange:function(e){

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