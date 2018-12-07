// pages/notice/notice.js
import {
  _getNotice
} from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noticedata: [
      {
        "id": 2,
        "title": "报名资料哦",
        "url": "撒旦发生发",
        "content": "发生飞洒打法防守打法是"
      },
      {
        "id": 1,
        "title": "报名条件",
        "url": "士大夫撒旦发生",
        "content": "放大看是否就爱看洛杉矶发看到拉法基"
      }
    ],
    noticeId:1

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // _getNotice().then(data =>{
    //     console.log(data);
    // })
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
  changenotice(e){
        this.setData({
          noticeId : e.currentTarget.dataset.id
        })
    }
})