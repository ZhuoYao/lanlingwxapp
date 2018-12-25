// pages/pernsonaldata/personaldata.js
import { _getCenterInfo, _setCenterInfo} from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
      uname:'',
      phone:'',
      idcard:'',
      truename:'',
      sex:'',
      sextype:0,
      userdata:'',
      array:['男','女' ,'保密']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      _getCenterInfo().then(data =>{
        // console.log(data);
        this.setData({
          userdata: data.data,
          sextype: data.data.sex -1
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
    var pages = getCurrentPages();
    var prePage = pages[pages.length - 2];
    prePage.onLoad();
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
  changeicon(e){
    wx.chooseImage({
      success: function(res) {
        
      },
    })
  },
  changename(e){
    this.setData({
      uname: e.detail.value
    })
  },
  changephone(e){
    this.setData({
      phone: e.detail.value
    })
  },
  changeidcard(e) {
    this.setData({
      idcard: e.detail.value
    })
  },
  changename1(e) {
    this.setData({
      truename: e.detail.value
    })
  },
  bindPickerChange(e){
    // console.log(e);
    this.setData({
      sextype : e.detail.value
    })
  },
  submit(e){
    console.log(this.data);
    let data = [this.data.uname, this.data.phone, this.data.idcard, this.data.truename, parseInt(this.data.sextype) + 1 == this.data.userdata.sex ? "" :parseInt(this.data.sextype) + 1];
    let data1 = {}
   data.forEach((item,index) => {
    //  console.log(item,index);
    if(item != ''){
        switch(index){
          case 0:
            data1.userName = item;
          break;
          case 1:
            data1.phone = item;
          break;
          case 2:
            data1.idCard = item;
          break;
          case 3:
            data1.realName = item;
          break;
          case 4:
            data1.sex = item
          break;
        }
    }
   })
  //  console.log(data1);
    _setCenterInfo(data1).then(data => {
      // console.log(data);
      wx.navigateBack({
        delta :1
      })
    },error => {
      wx.showToast({
        title: error.msg,
        icon:'none'
      })
    })
  }
})