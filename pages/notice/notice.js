// pages/notice/notice.js
import {
  _getNotice
} from '../../utils/request.js'
var WxParse = require('../../wxParse/wxParse.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noticedata: [],
    noticeId:1,
    currentdata:{}

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    _getNotice({type:1}).then(data =>{
        // console.log(data);
        this.setData({
          noticedata : data.data,
        })
        data.data.forEach((item,index) => {
            if(item.id == 1){
              var article = item.content;
              WxParse.wxParse('article', 'html', article, this, 0);
              this.setData({
                currentdata : item
              })
              return;
            }
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
  changenotice(e){
        this.setData({
          noticeId : e.currentTarget.dataset.id
        })
        this.data.noticedata.forEach((item,index) => {
            if(item.id == e.currentTarget.dataset.id){
              var article = item.content;
              WxParse.wxParse('article', 'html', article, this, 0);
                  this.setData({
                    currentdata : item
                  })
                  return ;
            }
        })
    }
})