
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopname:"食惠",
    shopdec:"食惠快餐是一家主营快餐的店铺,这里有许多种类的荤菜和素菜,方便快捷",
    imgUrls: [
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3238431746,4177294693&fm=26&gp=0.jpg',
      'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3482112846,1616623641&fm=26&gp=0.jpg',
      'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1066721984,714626582&fm=26&gp=0.jpg'
  ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    iscollect: true,
    goods:[
      {
          goodsname:"菜名",
          goodsprice:5,
          goodssrc:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1066721984,714626582&fm=26&gp=0.jpg'
      },
      {
        goodsname:"菜名1",
        goodsprice:6,
        goodssrc:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1066721984,714626582&fm=26&gp=0.jpg'
    },
    {
      goodsname:"菜名2",
      goodsprice:7,
      goodssrc:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1066721984,714626582&fm=26&gp=0.jpg'
  },
  {
    goodsname:"菜名2",
    goodsprice:7,
    goodssrc:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1066721984,714626582&fm=26&gp=0.jpg'
},
  {
    goodsname:"菜名2",
    goodsprice:7,
    goodssrc:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1066721984,714626582&fm=26&gp=0.jpg'
  },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  collect: function(){
    this.setData({
        iscollect: !this.data.iscollect
    })
    console.log(this.data.iscollect);
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