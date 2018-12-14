// pages/evaluate/evaluate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onChange(e) {
    // console.log(e);
    switch (e.currentTarget.dataset.id) {
      case '1':
        this.setData({
          value1: e.detail.value
        })
        break;
      case '2':
        this.setData({
          value2: e.detail.value
        })
        break;
      case '3':
        this.setData({
          value3: e.detail.value
        })
        break;
      case '4':
        this.setData({
          value4: e.detail.value
        })
        break;
    }

  },
  switchChange(e){
    console.log(e);
  }
})