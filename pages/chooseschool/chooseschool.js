// pages/chooseschool/chooseschool.js
import { _getHotCity, _getSchool} from '../../utils/request.js'
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
      hotschool:[],
      searchText:'',
      lng:0.0,
      lat:0.0,
      schoollist:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    this.setData({
      lat: options.lat,
      lng: options.lng
    })
    _getHotCity({city: app.globalData.city}).then(data => {
      // console.log(data);
      this.setData({
        hotschool : data.data
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
  getsearch(e){
    // console.log(e);
    clearTimeout(this.timer);
    if(e.detail.value == ''){
      this.setData({
        schoollist : ''
      })
    }else{
    this.setData({
      searchText : e.detail.value
    })
    this.timer = setTimeout(() => {
      _getSchool({ city: app.globalData.city, schoolName: this.data.searchText, longitude: this.data.lng, latitude:this.data.lat}).then(data => {
          // console.log(data);
          this.setData({
            schoollist : data.data
          })
      },500)
    })
    }
  },
  resetinput(e){
    this.setData({
      searchText : ''
    })
  },
  goschooldetail(e){
    wx.navigateTo({
      url: '../schooldetail/schooldetail?schoolid=' + e.currentTarget.dataset.id,
    })
  }
})