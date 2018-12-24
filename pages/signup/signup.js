// pages/ signup/signup.js
import {
  _getSchoolList,
  _getSchool,
  _getAd
} from '../../utils/request.js'
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperdata: [],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    categoryindex: 0,
    cityname: '城市',
    menufix: false,
    maskshow: false,
    alltype: 1,
    distance: 0,
    priced: 0,
    evaluate: 0,
    lat: 0,
    lng: 0,
    screen: 0,
    schoollist: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      cityname: app.globalData.city ? app.globalData.city : '城市'
    })
    if (this.data.cityname != '城市') {
      this.setlocation();
    }else{
      
    }
    _getAd({ adPositionId:1}).then(data => {
        console.log(data);
        let a = [];
        data.data.forEach((item,index) => {
            a.push({url:item.imageUrl,link:item.link});
        })
        this.setData({
          swiperdata : a
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
  onPageScroll: function(e) {
    // console.log(e);//{scrollTop:99}
    const query = wx.createSelectorQuery()
    const _this = this;
    query.select('#school').boundingClientRect()
    query.selectViewport().scrollOffset()
    query.exec(function(res) {
      res[0].top; // #the-id节点的上边界坐标
      res[1].scrollTop // 显示区域的竖直滚动位置
      if (res[0].top <= 0) {
        _this.setData({
          menufix: true
        })
      } else {
        _this.setData({
          menufix: false
        })
      }
    })
  },
  changecity(e) {
    wx.navigateTo({
      url: '../choosecity/choosecity',
    })
  },
  showchoosetype(e) {
    this.setData({
      maskshow: true
    })
  },
  move(e) {

  },
  getschoollist(data) {
    wx.showLoading({
      title: '',
      mask: true
    })
    _getSchool(data).then(data => {
      wx.hideLoading();
      this.setData({
        schoollist: data.data
      })
    })
  },
  changetype(e) {
    // console.log(e.currentTarget.dataset.id);
    let basedata = 0;
    switch (e.currentTarget.dataset.id) {
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
  hidemask() {
    this.setData({
      maskshow: !this.data.maskshow
    })
  },
  notapfather(e) { //点击本元素的时候,不触发父元素mask的tap事件

  },
  changekind(e) {
    this.setData({
      categoryindex: e.currentTarget.dataset.id
    })
    console.log(this.data.categoryindex)
  },
  gosignup(e) {
    wx.navigateTo({
      url: '../fastregistration/fastregistration',
    })
  },
  chooseshool(e) {
    wx.navigateTo({
      url: '../chooseschool/chooseschool?lat='+this.data.lat+'&lng='+this.data.lng,
    })
  },
  gonotice(e) {
    wx.navigateTo({
      url: '../notice/notice',
    })
  },
  goschooldetail(e) {
    wx.navigateTo({
      url: '../schooldetail/schooldetail?schoolid='+e.currentTarget.dataset.id,
    })
  },
  setlocation(e) {
    let _this = this;
    wx.getLocation({
      success: function(res) {
        _this.setData({
          lat: res.latitude,
          lng: res.longitude
        })
        _this.getschoollist({
          city: _this.data.cityname,
          longitude: _this.data.lng,
          latitude: _this.data.lat
        });
      },
    })
  },
  resetscreen(e) {
    this.setData({
      alltype: 1,
      distance: 0,
      priced: 0,
      evaluate: 0,
      categoryindex: 0
    })
  },
  submitscreen(e) {
      let data = {}
      if(this.data.alltype){
        if (this.data.categoryindex){
          data = {
            city: this.data.cityname,
            longitude: this.data.lng,
            latitude: this.data.lat,
            type:this.data.categoryindex
            }
        }else{
          data = {
            city: this.data.cityname,
            longitude: this.data.lng,
            latitude: this.data.lat
          } 
        }
      }
    if (this.data.distance) {
      if (this.data.categoryindex) {
        data = {
          city: this.data.cityname,
          longitude: this.data.lng,
          latitude: this.data.lat,
          location: this.data.distance,
          type: this.data.categoryindex
        }
      } else {
        data = {
          city: this.data.cityname,
          longitude: this.data.lng,
          latitude: this.data.lat,
          location: this.data.distance
        }
      }
    }
    if (this.data.priced) {
      if (this.data.categoryindex) {
        data = {
          city: this.data.cityname,
          longitude: this.data.lng,
          latitude: this.data.lat,
          price: this.data.priced,
          type: this.data.categoryindex
        }
      } else {
        data = {
          city: this.data.cityname,
          longitude: this.data.lng,
          latitude: this.data.lat,
          price: this.data.priced
        }
      }
    }
    if (this.data.evaluate) {
      if (this.data.categoryindex) {
        data = {
          city: this.data.cityname,
          longitude: this.data.lng,
          latitude: this.data.lat,
          evaluate: this.data.evaluate,
          type: this.data.categoryindex
        }
      } else {
        data = {
          city: this.data.cityname,
          longitude: this.data.lng,
          latitude: this.data.lat,
          evaluate: this.data.evaluate
        }
      }
    }
    this.getschoollist(data);
    this.setData({
      maskshow: false
    })
  } 
})