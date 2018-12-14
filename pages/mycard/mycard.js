// pages/mycard/mycard.js
import { _getCertificate} from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      cardlength:2,
    carddata: [],
    currentdata:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    _getCertificate().then(data => {
      // console.log(data);
      this.setData({
        carddata : data.data,
        currentdata: data.data[0]
      })
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

  },
  changeswiper(e){
    this.setData({
      currentdata : this.data.carddata[e.detail.current]
    })
  }
})