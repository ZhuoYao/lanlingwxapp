// pages/examdata/examdata.js
const app = getApp();
import {
  _getExamInfo,
  _createExamPaper,
  _questionOneByOne,
  _questionState
} from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    examdata: {},
    subjectId: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      subjectId: options.subjectId
    })
    _getExamInfo({
      subjectId: options.subjectId
    }).then(data => {
      // console.log(data);
      this.setData({
        examdata: data.data
      })
    },error => {
      wx.showToast({
        title: '该题库无可用试卷',
        icon:'none'
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
  goexam() {
    _createExamPaper({
      subjectId: this.data.subjectId
    }).then(data => {
      console.log(data);
      // this.getexamdata(data.examId)
    }, err => {
      // console.log(err)
      if (err.code == -3) {
        // wx.navigateTo({
        //   url: '../exam/exam?examId='+err.examId
        // })
        this.getexamdata(err.examId);
      }
    })
    // wx.navigateTo({
    //   url: '../exam/exam',
    // })
  },
  getexamdata(examId) {
    _questionOneByOne({
      sort: 1,
      examId: examId
    }).then(data => {
      // console.log(data);
      app.setcurrentOptions(data.data);
      _questionState({
        examId: examId
      }).then(data => {
        app.changeexammenu(data.data, 0);
        wx.navigateTo({
          url: '../exam/exam?examId=' + examId + '&ispush=1&heading=' + this.data.examdata.examName,
        })
      })
    })
  }
})