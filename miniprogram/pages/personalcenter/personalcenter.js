// miniprogram/pages/personalcenter/personalcenter.js
const app = getApp();
const db=wx.cloud.database();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowUserName: false,
    userInfo: null,
  },
  
  onGotUserInfo: function (e) {
    if (e.detail.userInfo) {
      var user = e.detail.userInfo;
      this.setData({
        isShowUserName: true,
        userInfo: e.detail.userInfo,
      })
      console.log(user)      
    } else {
      app._showSettingToast('登陆需要允许授权');
    }
  },

  onShow(options) {
    var user = app.globalData.userInfo;
    if (user && user.nickName) {
      this.setData({
        isShowUserName: true,
        userInfo: user,
      })
    }
  },
  tip:function()
  {
    wx.showToast({
      title:'请先登录',
      icon:'none',
      duration:1000
     })
  },
  tofootprint:function()
  {
    wx.navigateTo({
      url: '../../pages/personalcenter/footprint/footprint',
    })
  },
  toset:function()
  {
    wx.navigateTo({
      url: '../../pages/personalcenter/set/set',
    })
  },
  tolike:function()
  {
    wx.navigateTo({
      url: '../../pages/personalcenter/like/like',
    })
  },
  toback:function()
  {
    wx.navigateTo({
      url: '../../pages/personalcenter/back/back',
    })
  },
  tipp:function()
  {
    wx.showToast({
      title:'即将开发',
      icon:'none',
      duration:1000
     })
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

  },
  
})