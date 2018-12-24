// pages/evaluate/evaluate.js
import { _evaluateSubject} from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: 0,
    value2: 0,
    value3: 0,
    value4: 0,
    isname: 0,
    content:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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
  onChange(e) {
    // console.log(e);
    switch (e.currentTarget.dataset.id) {
      case '1':
        this.setData({
          value1: parseFloat(e.detail.value)
        })
        break;
      case '2':
        this.setData({
          value2: parseFloat(e.detail.value)
        })
        break;
      case '3':
        this.setData({
          value3: parseFloat(e.detail.value)
        })
        break;
      case '4':
        this.setData({
          value4: parseFloat(e.detail.value)
        })
        break;
    }

  },
  switchChange(e){
    console.log(e);
    if(e.detail.value){
      this.setData({
        isname : 1
      })
    }else{
      this.setData({
        isname: 0
      })
    }
  },
  getcontent(e){
     this.setData({
       content: e.detail.value
     })
  },
  submit(e){
    // console.log(this.data)
  _evaluateSubject({
    serverStar :this.data.value1,
    payStar : this.data.value2,
    teachStar : this.data.value3,
    envStar : this.data.value4,
    contentDesc: this.data.content,
    isName : this.data.isname
  }).then(data => {
    wx.navigateBack({
      delta: 1
    })
  })
  }
})