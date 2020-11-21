// miniprogram/pages/allmap/allmap.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
 

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
    markers:[ 
    ]
  },


  getmsg:function(){

    wx.navigateTo({
    
    url: '../canteen/canteen',  
    
    })
   
    },
    onLoad: function (options) {
      var that = this;
        wx.getLocation({
          success:function(res){
            that.setData({
              markers:[
                {
                  id: 0,
                  latitude: 26.05668,
                  longitude: 119.19249,
                 // iconPath : "../../images/allmap/location.png",
                  
                  // alpha:0,
                  callout:{
                    content: " 京元",
                    padding:10,
                    display:'ALWAYS',
                    // borderRadius: 10,
                    // borderColor:'#ff0000',
                    // borderWidth: 2,
                  }},
                  {
                    id: 1,
                    latitude: 26.05276,
                    longitude: 119.19266,
                    //iconPath : "../../images/allmap/location.png",
                    callout: {
                      content: " 玫瑰园",
                      padding: 10,
                      display: 'ALWAYS',
                      textAlign: 'center'
                    }
                    
                  },
              ]
            })
          },
        })
    },



})