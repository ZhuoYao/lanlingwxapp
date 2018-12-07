// pages/opinion/opinion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    areanum: '0/200',
    imgnum:0,
    imgdata:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(this.data.imgdata);
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
  arealength(e){
    // console.log(e.detail.value.length);
    this.setData({
      areanum: e.detail.value.length+'/200'
    })
  },
  imgchoose(e){
    let count = 4- parseInt(this.data.imgnum);
    let _this = this;
      wx.chooseImage({
        count:count < 0?0:count,
        success: function(res) {
            // console.log(res);
            if(_this.data.imgdata.length == 0){
              _this.setData({
                  imgdata: res.tempFilePaths,
                  imgnum: res.tempFilePaths.length
              })
            }else{
              let urldata= _this.data.imgdata;
              urldata.push(res.tempFilePaths);
              _this.setData({
                  imgdata: urldata,
                  imgnum: urldata.length
              })
            }
        },
      })
  }
})