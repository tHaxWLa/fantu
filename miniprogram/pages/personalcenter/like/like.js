// miniprogram/pages/personalcenter/like/like.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goods:[

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
    var _this=this;
    wx.cloud.callFunction({
      name: 'getuserlist',// 云函数名称【刚刚创建的云函数文件的名字】
      data: {
      },
      
      success: function (res) {
         {
          console.log(res.result.data)
          _this.setData({
            goods:res.result.data
            })
           console.log('调用云函数获取用户数据成功')
         }
       },
       fail: console.error
    })
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

  },
  goshop:function(){
    wx.navigateTo({
      url: '../../shop/shop',
    })
  }
})