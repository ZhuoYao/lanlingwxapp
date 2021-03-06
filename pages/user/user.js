// pages/user/user.js
import { _getCenterInfo, _getRelatedSchool, _logout} from '../../utils/request.js'
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userdata:'',
      bindschool:'',
      islogin:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    _getCenterInfo().then(data => {
        // console.log(data);
        this.setData({
          userdata : data.data,
          islogin : true
        })
        console.log(this.data.userdata);
      })
    _getRelatedSchool().then(data => {
        this.setData({
          bindschool : data.data
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
  goperson(e){
    if(this.data.userdata != ''){
    wx.navigateTo({
      url: '../pernsonaldata/personaldata',
    })
    }else{
      wx.navigateTo({
        url: '../login/login',
      })
    }
  },
  goopinion(e){
    wx.navigateTo({
      url: '../opinion/opinion',
    })
  },
  goorder(e){
    if(app.globalData.token){
    wx.navigateTo({
      url: '../orderlist/orderlist',
    })
    }else{
      wx.navigateTo({
        url: '../login/login',
      })
    }
  },
  gomycard(e){
    if (app.globalData.token){
    wx.navigateTo({
      url: '../mycard/mycard',
    })
    }else{
      wx.navigateTo({
        url: '../login/login',
      })
    }
  },
  gosign(e){
    wx.redirectTo({
      url: '../signup/signup',
    })
  },
  goschool(e){
    wx.navigateTo({
      url: '../schooldetail/schooldetail?schoolid='+e.currentTarget.dataset.id,
    })
  },
  goaboutus(e){
    wx.navigateTo({
      url: '../aboutus/aboutus',
    })
  },
  logout(e){
    _logout().then(data => {
      this.setData({
        userdata: '',
        bindschool:'',
        islogin: false
      })
    })
  }
})