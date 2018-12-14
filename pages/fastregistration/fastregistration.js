// pages/fastregistration/fastregistration.js
import { _signUpRecord} from '../../utils/request.js'
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      subjectName:'选择您的科目',
      subjectId:'',
      category:1,
      uname:'',
      phone:'',
      idcard:''
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
  choosesubject(e){
    wx.navigateTo({
      url: '../choosesubject/choosesubject?type=2&category=' + this.data.category,
    })
  },
  getcategory(e){
    // console.log(e);
    this.setData({
      category: e.detail.value
    })
  },
  goreg(e){
      if(this.data.uname == ''){
        wx.showToast({
          title: '请填写您的真实姓名',
          icon: 'none'
        })
        return;
      }
    if (this.data.phone == '') {
      wx.showToast({
        title: '请填写您的联系电话',
        icon: 'none'
      })
      return;
    }
    if (this.data.idcard == '') {
      wx.showToast({
        title: '请填写您的身份证号',
        icon: 'none'
      })
      return;
    }
    if(this.data.subjectId == ''){
      wx.showToast({
        title: '请选择科目',
        icon: 'none'
      })
      return; 
    }
    _signUpRecord({ realName: this.data.uname, phone: this.data.phone, idCard: this.data.idcard, signUpSubjectId: parseInt(this.data.subjectId)}).then(data => {
      console.log(data);
      wx.navigateTo({
        url: '../regcompleted/regcompleted',
      })
    },error => {
      wx.showToast({
        title: error.msg,
        icon: 'none'
      })
    })
  },
  getuname(e){
    this.setData({
      uname : e.detail.value
    })
  },
  getphone(e){
    this.setData({
      phone: e.detail.value
    })
  },
  getidcard(e){
    this.setData({
      idcard: e.detail.value
    })
  }
})