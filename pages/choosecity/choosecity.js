// pages/choosecity/choosecity.js
import { _getCity} from '../../utils/request.js'
var app = getApp(); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toView: 'A',
    viewdata: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    cityname:'',
    citydata: [
      {
        "city": "佛山",
        "letter": "F"
      },
      {
        "city": "广州",
        "letter": "G"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // _getCity().then(data => {
    //     console.log(data);
    // })
    this.test(this.data.citydata);
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
      py: data1[0].letter,
      citylist: [{
        city:data1[0].city
      }]
    }
    let currentPy = data1[0].letter;
    data1.forEach((item, index) => {
      if (index > 0) {
        if (currentPy == item.letter) {
          currentdata.citylist.push({
            city:item.city
          });
        } else {
          data2.push(currentdata);
          currentPy = item.letter;
          currentdata = {
            py: item.letter,
            citylist: [{
              city:item.city
            }]
          };
        }
        if (index == data1.length - 1) {
          data2.push(currentdata);
        }
      }
    })
    console.log(data2);
    this.setData({
      citydata: data2
    })
  }
})