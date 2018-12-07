// pages/schooldetail/schooldetail.js
import { _getSchoolDetail} from '../../utils/request.js'
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    piclength:2,
    schooldetail: {
      "schoolPic": [
        {
          "picUrl": "http://pic.nataliee.top/upload/20181130/f90bae7cf9d6475195025b656c6f493f.jpeg",
          "sortOrder": 1,
          "id": 63
        },
        {
          "picUrl": "http://pic.nataliee.top/upload/20181130/18d41f8223f2418f94620f636ce3c71c.jpeg",
          "sortOrder": 0,
          "id": 62
        }
      ],
      "star": 5,
      "schoolSubject": [
        {
          "subjectPrice": 6666,
          "type": "交通类",
          "signSubjectName": "测试",
          "signUpSubjectId": 13
        },
        {
          "subjectPrice": 1000,
          "type": "人社类",
          "signSubjectName": "熔化焊接与热切割作业 - 初训",
          "signUpSubjectId": 12
        }
      ],
      "schoolDetail": {
        "schoolPhone": "88682348",
        "cityName": "佛山",
        "schoolId": 1,
        "latitude": "22.9818439999",
        "schoolDetail": "<p>佛山市高明区育安职业培训学校（前身佛山市高明区育人职业培训学校）!</p>",
        "schoolName": "佛山市育安职业培训学校",
        "schoolLocaltion": "高明区永安路016号",
        "longitude": "113.1097412109"
      }
    },
    picurl:[],
    maskshow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // _getSchoolDetail({schoolId:1}).then(data => {
    //     console.log(data)
    // })
    app.setallsubject(this.data.schooldetail.schoolSubject);
    this.getimgurllist(this.data.schooldetail.schoolPic);
    this.getaddress();
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
  getscholldetail(){
      wx.getLocation({
        success: function(res) {
          _getSchoolDetail({ schoolId: 1, longitude:res.longitude, latitude:res.latitude}).then(data => {
            console.log(data);
          })
        },
      })
  },
  showimgbox(e){
    wx.previewImage({
      urls: this.data.picurl,
    })
  },
  getimgurllist(data){
    let url =[]
    data.forEach((item, index) => {
       url.push(item.picUrl)
    })
    this.setData({
        picurl : url
    })
  },
  getaddress(e){
    let lat1 = '';
    let lng1 = '';
    let address= '';
    let _this = this;
    wx.getLocation({
      success: function(res) {
        lat1 = res.latitude;
        lng1 = res.longitude;
        // address = _this.getDistance(lat1, lng1, parseFloat( _this.data.schooldetail.schoolDetail.latitude), parseFloat( _this.data.schooldetail.schoolDetail.longitude));
        console.log(address);
      },
    })
  },
  getDistance(lat1, lng1, lat2, lng2) {
    console.log(lat1,lng1,lat2,lng2);
    lat1 = lat1 || 0;
    lng1 = lng1 || 0;
    lat2 = lat2 || 0;
    lng2 = lng2 || 0;

    var rad1 = lat1 * Math.PI / 180.0;
    var rad2 = lat2 * Math.PI / 180.0;
    var a = rad1 - rad2;
    var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;

    var r = 6378137;
    return (r * 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(rad1) * Math.cos(rad2) * Math.pow(Math.sin(b / 2), 2)))).toFixed(0);
  },
  gomap(e){
    wx.openLocation({
      latitude: Number(this.data.schooldetail.schoolDetail.latitude),
      longitude: Number(this.data.schooldetail.schoolDetail.longitude),
      name:'佛山市育安职业培训学校',
      address: '高明区永安路016号'
    })
  },
  goallsubject(e){
      wx.navigateTo({
        url: '../allsubject/allsubject',
      })
  },
  goenlist(e){
    wx.navigateTo({
      url: '../enlist/enlist?subjectId='+e.currentTarget.dataset.subjectid,
    })
  },
  cancel(){
    this.setData({
        maskshow: false
    })
  },
  consulation(){
    this.setData({
        maskshow: true
    })
  },
  makecall(){
    wx.makePhoneCall({
      phoneNumber: '18814129287',
    })
  }
})