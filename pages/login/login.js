// pages/login/login.js
import {
  _login,
  _smsCode,
  _XLogin
} from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disable: false,
    second: 60,
    time: '获取验证码',
    phone: '',
    code: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //   _login().then(data => {
    //   console.log(data);
    //     wx.navigateBack({
    //       delta: 1
    //     })
    // })
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
    let page = getCurrentPages();
    let lastpage = page[page.length - 2];
    lastpage.onLoad();
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
  getcode(e) {
    // this.getsecond()
    _smsCode({phone:this.data.phone}).then(data => {
      this.getsecond();
      wx.showToast({
        title: data.msg,
        duration: 3000
      })
    },error =>{
      wx.showToast({
        title: error.msg,
        icon: 'none'
      })
    })
  },
  getsecond(e) {
    let currentTime = this.data.second;
    let _this = this
    this.setData({
      time: currentTime + '秒'
    })
    this.interval = setInterval(function() {
      _this.setData({
        time: (currentTime - 1) + '秒'
      })
      currentTime--;
      if (currentTime <= 0) {
        clearInterval(_this.interval)
        _this.setData({
          time: '获取验证码',
          second: 60,
          disable: false
        })
      }
    }, 1000)
  },
  getphone(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  getsms(e) {
    this.setData({
      code: e.detail.value
    })
  },
  gologin(e){
    if(this.data.phone ==''){
      wx.showToast({
        title: '请输入手机号',
        icon: 'none'
      })
      return;
    }
    if(this.data.code == ''){
      wx.showToast({
        title: '请输入短信验证码',
        icon: 'none'
      })
      return;
    }
    _XLogin({ phone: this.data.phone, smsCode:this.data.code}).then(data => {
      wx.navigateBack({
        delta: 1
      })
    },error => {
        wx.showToast({
          title: error.data.msg,
        })
    })
  }
})