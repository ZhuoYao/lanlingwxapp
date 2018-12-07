// pages/examrecord/examrecord.js
const app = getApp();
import {
  _getExamList,
  _questionOneByOne,
  _questionState
} from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recordlist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    _getExamList({
      subjectId: 14,
      page: 0
    }).then(data => {
      // console.log(data);
      this.setData({
        recordlist: data.data
      })
    })
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
  gocheckexam(e) {
    // console.log(e.currentTarget.dataset.examid);
    // wx.navigateTo({
    //   url: '../exam/exam?examId=' +e.currentTarget.dataset.examid+'&ispush=2',
    // })
    _questionOneByOne({
      sort: 1,
      examId: e.currentTarget.dataset.examid
    }).then(data => {
      app.setcurrentOptions(data.data);
      _questionState({
        examId: e.currentTarget.dataset.examid
      }).then(data => {
        app.changeexammenu(data.data, 0);
        wx.navigateTo({
          url: '../exam/exam?examId=' + e.currentTarget.dataset.examid + '&ispush=2&heading=' + app.globalData.practiceheading,
        })
      })
    })
  }
})