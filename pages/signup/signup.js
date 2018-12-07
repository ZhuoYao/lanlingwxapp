// pages/ signup/signup.js
import { _getSchoolList, _getSchool} from '../../utils/request.js'
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperdata: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542609906222&di=57df3b29facfb145563395fb1d58f256&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201501%2F02%2F20150102204647_dj2t8.jpeg', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542609906222&di=57df3b29facfb145563395fb1d58f256&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201501%2F02%2F20150102204647_dj2t8.jpeg'],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    categoryindex: 0,
    cityname:'城市',
    menufix:false,
    maskshow:false,
    alltype:0,
    distance:0,
    priced:0,
    evaluate:0,
    screen:0,
    schoollist: [{
      "star": 5,
      "price": 3,
      "schoolId": 1,
      "latitude": null,
      "schoolName": "佛山市育安职业培训学校",
      "schoolLogo": "http://pcojhmbte.bkt.clouddn.com/upload/20181105/5396934fe9854af781c49b7bcec150b3.png",
      "longitude": null
    },
      {
        "star": 2.5,
        "price": null,
        "schoolId": 2,
        "latitude": null,
        "schoolName": "安联",
        "schoolLogo": null,
        "longitude": null
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      cityname: app.globalData.city ? app.globalData.city:'城市'
    })
    if(this.data.cityname){
      // this.getschoollist({ city:this.data.cityname});
    }
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
  onPageScroll: function (e) {
    // console.log(e);//{scrollTop:99}
    const query = wx.createSelectorQuery()
    const _this = this;
    query.select('#school').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function (res) {
      res[0].top;       // #the-id节点的上边界坐标
      res[1].scrollTop // 显示区域的竖直滚动位置
      if (res[0].top <= 0){
          _this.setData({
            menufix: true
          })
      }else{
        _this.setData({
          menufix: false
        })
      }
    })
  },
  changecity(e){
    wx.navigateTo({
      url: '../choosecity/choosecity',
    })
  },
  showchoosetype(e){
    this.setData({
      maskshow: true
    })
  },
  move(e){

  },
  getschoollist(data){
    _getSchool(data).then(data => {
      this.setData({
        schoollist: data.data
      })
    })
  },
  changetype(e){
    // console.log(e.currentTarget.dataset.id);
    let basedata = 0;
    switch(e.currentTarget.dataset.id){
      case '0':
        this.setData({
          alltype: 1,
          distance: 0,
          priced: 0,
          evaluate: 0
        })
      break;
      case '1':
        basedata = this.data.distance;
        if(basedata){
          if(basedata == 1){
            basedata = 2
          }else{
            basedata = 1
          }
        }else{
          basedata = 1
        }
        this.setData({
          alltype: 0,
          distance: basedata,
          priced: 0,
          evaluate: 0
        })
      break;
      case '2':
        basedata = this.data.priced;
        if (basedata) {
          if (basedata == 1) {
            basedata = 2
          } else {
            basedata = 1
          }
        } else {
          basedata = 1
        }
        this.setData({
          alltype: 0,
          distance: 0,
          priced: basedata,
          evaluate: 0
        })
      break;
      case '3':
        basedata = this.data.evaluate;
        if (basedata) {
          if (basedata == 1) {
            basedata = 2
          } else {
            basedata = 1
          }
        } else {
          basedata = 1
        }
        this.setData({
          alltype: 0,
          distance: 0,
          priced: 0,
          evaluate: basedata
        })
      break;
      case '4':
      this.setData({
        screen: !this.data.screen
      })
      break;
    }
  },
  hidemask(){
     this.setData({
       maskshow : !this.data.maskshow
     })
  },
  notapfather(e){ //点击本元素的时候,不触发父元素mask的tap事件

  },
  changekind(e){
      this.setData({
        categoryindex: e.currentTarget.dataset.id
      })
      console.log(this.data.categoryindex)
  },
  gosignup(e){
    wx.navigateTo({
      url: '../fastregistration/fastregistration',
    })
  },
  chooseshool(e){
    wx.navigateTo({
      url: '../chooseschool/chooseschool',
    })
  },
  gonotice(e){
    wx.navigateTo({
      url: '../notice/notice',
    })
  },
  goschooldetail(e){
    wx.navigateTo({
      url: '../schooldetail/schooldetail?schoolid=1',
    })
  }
})