// pages/collectionmenu/collectionmenu.js
const app = getApp();
import { _getQuestionList } from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:1,
    subjectId:'',
    collectiondata: [{ title: '人社类-高处安装、拆除、维护', num: 3 }, { title: '人社类-高处安装、拆除、维护', num: 4 }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    this.setData({
      type: options.type
    })
    wx.setNavigationBarTitle({
      title:this.data.type==1?'我的错题':'我的收藏',
      success:function(){
      }
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
  gopractice(e){
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      mask: true,
      duration: 10000,
      success: () => {
      }
    })
    _getQuestionList({ subjectId: 14, exercisesType: 3, sort: 1, state: 2,type:this.data.type}).then(data => {
      app.setcurrentOptions(data.data.questionInfo);
      wx.hideToast();
      wx.navigateTo({
        url: this.data.type == 1 ? '../practice/practice?type=3&subjectId=14' :'../practice/practice?type=4&subjectId=14'
      })
    })
  }
})