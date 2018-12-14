// pages/choosesubject/choosesubject.js
import {
  _GetSubject,
  _login,
  _getXSubjectList,
  _getSignUpSubjectId
} from '../../utils/request.js'
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentSubject: '',
    toView: 'A',
    viewdata: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    maskshow: false,
    type:1,
    category:1,
    searchtext:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // _login().then(data => {
    //   console.log(data);
    // })
    if(options.type){
      this.setData({
        type: options.type,
        category: options.category
      })
      _getSignUpSubjectId({type:this.data.category}).then(data => {
            // console.log(data);
            this.test(data.data);
      })
    }else{
      _getXSubjectList().then(data => {
        console.log(data);
        this.test(data.data);
      })
      this.setData({
        currentSubject: app.globalData.subjectName
      })
    }
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
  goscroll(e) {
    this.setData({
      toView: e.currentTarget.dataset.py,
    })
  },
  test(data) {
    let data1 = data;
    let data2 = [];
    let currentdata = {
      py: data1[0].PY,
      subject: [{
        isChoose: data1[0].isChoose,
        subjectId: data1[0].subjectId?data1[0].subjectId:data1[0].id,
        subjectName: data1[0].subjectName
      }]
    }
    if(data1.length == 1){
      data2.push(currentdata);
      this.setData({
        subjectdata: data2
      })
    }else{
    let currentPy = data1[0].PY;
    data1.forEach((item, index) => {
      if (index > 0) {
        if (currentPy == item.PY) {
          currentdata.subject.push({
            isChoose: item.isChoose,
            subjectId: item.subjectId?item.subjectId:item.id,
            subjectName: item.subjectName
          });
        } else {
          data2.push(currentdata);
          currentPy = item.PY;
          currentdata = {
            py: item.PY,
            subject: [{
              isChoose: item.isChoose,
              subjectId: item.subjectId?item.subjectId:item.id,
              subjectName: item.subjectName
            }]
          };
        }
        if (index == data1.length - 1) {
          data2.push(currentdata);
        }
      }
    })
    // console.log(data2, currentdata);
    this.setData({
      subjectdata: data2
    })
    }
  },
  cancellock(e) {
    // console.log(11);
    this.setData({
      maskshow: !this.data.maskshow
    })
  },
  choosesubject(e) {
    let pages = getCurrentPages(); //当前页面
    let prevPage = pages[pages.length - 2]; //上一页面
    if(this.data.type == 1){
    app.changesubject({
      subjectName: e.currentTarget.dataset.subjectname,
      subjectId: e.currentTarget.dataset.subjectid
    });
    this.setData({
      currentSubject: e.currentTarget.dataset.subjectname
    })
    prevPage.setData({
      subjectName: e.currentTarget.dataset.subjectname,
      subjectId: e.currentTarget.dataset.subjectid
    })
    wx.navigateBack({
      delta: 1
    })
  }else{
    prevPage.setData({
      subjectName: e.currentTarget.dataset.subjectname,
      subjectId: e.currentTarget.dataset.subjectid
    })
      wx.navigateBack({
        delta: 1
      })
  }
  },
  search(e){
    console.log(e);
    if(this.data.type == 1){
      clearTimeout(this.timer);
      if (e.detail.value == '') {
        _getXSubjectList().then(data => {
          this.test(data.data);
        })
      } else {
        this.setData({
          searchtext: e.detail.value
        })
        this.timer = setTimeout(() => {
          _getXSubjectList({subjectName: this.data.searchtext }).then(data => {
            // console.log(data);
            if (data.data.length > 0) {
              this.test(data.data);
            } else {
              this.setData({
                subjectdata: []
              })
            }
          })
        }, 500)
      }
    }else{
      clearTimeout(this.timer);
      if(e.detail.value == ''){
        _getSignUpSubjectId({ type: this.data.category}).then(data => {
            this.test(data.data);
        })
      }else{
        this.setData({
          searchtext: e.detail.value
        })
        this.timer = setTimeout(() =>{
          _getSignUpSubjectId({ type: this.data.category, subjectName: this.data.searchtext}).then(data=>{
            // console.log(data);
            if(data.data.length > 0){
              this.test(data.data);
            }else{
              this.setData({
                subjectdata: []
              })
            }
          })
        },500)
      }
    }
  },
  gosignup(e){
    wx.reLaunch({
      url: '../signup/signup',
    })
  }
})