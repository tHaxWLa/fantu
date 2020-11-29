// miniprogram/pages/upimg/upimg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    imgData: [],
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

  


  uploadPhoto(e) { // 拍摄或从相册选取上传
    let that = this;
    wx.chooseImage({
     count: 1, // 默认9
     sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
     sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
     success(res) {
      let tempFilePaths = res.tempFilePaths; // 返回选定照片的本地路径列表 
      that.upload(that, tempFilePaths);
     }
    })
   },
   upload(page, path) { // 上传图片
    wx.showToast({ icon: "loading", title: "正在上传……" });
    wx.uploadFile({
     url: '上传图片接口url', //后端接口
     filePath: path[0],
     name: 'file',
     header: {
      "Content-Type": "multipart/form-data"
     },
     success(res) {
      if (res.statusCode != 200) {
       wx.showModal({ title: '提示', content: '上传失败', showCancel: false });
       return;
      } else{
       console.log("上传成功！ 可对返回的值进行操作，比如：存入imgData；");
      }
     },
     fail(e) {
      wx.showModal({ title: '提示', content: '上传失败', showCancel: false });
     },
     complete() {
      wx.hideToast(); //隐藏Toast
     }
    })
   }


   
})