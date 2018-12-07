// pages/index1/main.js
const app = getApp();
import { _getQuestionList} from '../../utils/request.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperdata: ['https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542609906222&di=57df3b29facfb145563395fb1d58f256&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201501%2F02%2F20150102204647_dj2t8.jpeg','https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542609906222&di=57df3b29facfb145563395fb1d58f256&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201501%2F02%2F20150102204647_dj2t8.jpeg'],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    categoryindex:0,
    subjectName:'',
    subjectId:''

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData)
      this.setData({
        categoryindex: app.globalData.category,
        subjectName: app.globalData.subjectName,
        subjectId : app.globalData.subjectId
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
  choosesubject(e){
    app.changecategory(parseInt(e.currentTarget.dataset.id));
      this.setData({
        categoryindex: e.currentTarget.dataset.id
      })
  },
  gopractice(e){
    switch(e.currentTarget.dataset.id){
      case '1' :
        wx.showToast({
          title: '加载中',
          icon: 'loading',
          mask: true,
          duration: 10000,
          success: () => {
          }
        })
        _getQuestionList({ subjectId: this.data.subjectId, exercisesType: 2, sort: 1, state: 2}).then(data => {
              app.setcurrentOptions(data.data.questionInfo);
              wx.hideToast();
              wx.navigateTo({
                url: '../practice/practice?type=1&subjectId='+this.data.subjectId
              })
        })
      
      break;
      case '2' :
      wx.showToast({
        title: '加载中',
        icon: 'loading',
        mask: true,
        duration: 10000,
        success : ()=>{

        }
      })
        _getQuestionList({ subjectId: this.data.subjectId, exercisesType: 1, state:1}).then(data => {
          console.log(data);
          wx.hideToast();
          let practicedata = app.globalData.practicelist;
          app.changepraticemenu(data.data.menuSortInfoList,0);
          app.setcurrentOptions(data.data.questionInfo);
          if(practicedata.length == 0){
            app.changepraticelsit(data.data.questionInfo,0);
             wx.navigateTo({
               url: '../practice/practice?type=2&subjectId='+this.data.subjectId
             })
          }else{
            let flag = ''
            practicedata.forEach((item,index) => {
               if(item.questionId == data.data.questionInfo.questionId){
                  flag = false;
               }else{
                 flag = true;
               }
            })
            if(flag){
                changepraticelsit(data.data.questionInfo,0);
            }
            wx.hideToast();
            wx.navigateTo({
              url: '../practice/practice?type=2&subjectId='+this.data.subjectId
            })
          }
        },err => {
          wx.hideToast();
          console.log(err);
        })
      break;
      case '3' :
      wx.navigateTo({
        url: '../collectionmenu/collectionmenu?type=1'
      })
      break;
      case '4':
      wx.navigateTo({
        url: '../collectionmenu/collectionmenu?type=2'
      })
      break;
    }
  },
  goexam(){
    wx.navigateTo({
      url: '../examdata/examdata?subjectId='+this.data.subjectId,
    })
  },
  goscore(){
    wx.navigateTo({
      url: '../score/score',
    })
  },
  choosesubject1(){
    wx.navigateTo({
      url: '../choosesubject/choosesubject',
    })
  }
})