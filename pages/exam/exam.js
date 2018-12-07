// pages/exam/exam.js
const app = getApp();
import {
  _questionOneByOne,
  _submitQuestion,
  _submitExam
} from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    examtime: '',
    questionoptions: [],
    menushow: false,
    optionType: 1,
    ispush: 1,
    examId: '',
    examinfo: {},
    isCollection: false,
    sort: 0,
    allnum: 0,
    exammenu: [],
    heading: '',
    examlist: [],
    remainExamSecond: '',
    studentAnswer: 'A'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options);
    let list = [];
    list.push(app.globalData.currentOptions);
    this.setData({
      ispush: options.ispush,
      examId: options.examId,
      examinfo: app.globalData.currentOptions,
      isCollection: app.globalData.currentOptions.isCollection,
      allnum: app.globalData.exammenu.length,
      exammenu: app.globalData.exammenu,
      heading: options.heading,
      examlist: list,
      studentAnswer: app.globalData.currentOptions.studentAnswer
    })
    if (this.data.ispush == 1) {
      this.setData({
        remainExamSecond: app.globalData.currentOptions.remainExamSecond
      })
      this.getremainingtime(app.globalData.currentOptions.remainExamSecond);
    }
    this.examdatareset(app.globalData.currentOptions);
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
    clearInterval(time);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    wx.navigateBack({
      delta: 2
    })
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
  showmenu() {
    this.setData({
      menushow: !this.data.menushow
    })
  },
  chooseanswer(e) {
    if (this.data.ispush == 2) {
      
    } else {
      let examdata = this.data.questionoptions;
      examdata.forEach((item, index) => {
        if (index === parseInt(e.currentTarget.dataset.index)) {
          examdata[index].ischoose = true;
        } else {
          examdata[index].ischoose = false;
        }
      })
      // console.log(examdata)
      this.setData({
        questionoptions: examdata,
        studentAnswer: e.currentTarget.dataset.xuanxiang
      })
    }
  },
  examdatareset(data) {
    let examdata = data.optionInfo;
    examdata.forEach((item, index) => {
      if (item.optionLetter == data.studentAnswer) {
        examdata[index].ischoose = true;
      } else {
        examdata[index].ischoose = false;
      }
    })
    // console.log(examdata);
    this.setData({
      questionoptions: examdata,
      sort: data.sort,
      isCollection: data.isCollection,

    })
  },
  goother(e) {
    // console.log(e.currentTarget.dataset.index);
    let num = this.listexistence(e.currentTarget.dataset.index);
    // console.log(num)
    this.setData({
      menushow: !this.data.menushow
    })
    wx.showLoading({
      title: '',
    })
    if (num || num === 0) {
      this.setData({
        examinfo: this.data.examlist[num]
      })
      wx.hideLoading();
      this.examdatareset(this.data.examinfo);
    } else {
      _questionOneByOne({
        sort: parseInt(e.currentTarget.dataset.index),
        examId: this.data.examId
      }).then(data => {
        let list = this.data.examlist;
        list.push(data.data);
        this.setData({
          examinfo: data.data,
          examlist: list
        })
        this.examdatareset(this.data.examinfo);
        wx.hideLoading();
      })
    }
  },
  listexistence(data) {
    let list = this.data.examlist;
    // console.log(data);
    let num = '';
    list.forEach((item, index) => {
      if (item.sort == data) {
        num = index;
        return num;
      }
    })
    return num;
  },
  examsubmit(e) {
    // console.log(this.data.remainExamSecond,this.data.studentAnswer);
    if(this.data.ispush == 1){
    _submitQuestion({
      examId: this.data.examinfo.exam_id,
      questionId: this.data.examinfo.questionId,
      sort: this.data.examinfo.sort,
      remainExamSecond: this.data.remainExamSecond,
      studentAnswer: this.data.studentAnswer
    }).then(data => {
      let num = this.listexistence(this.data.examinfo.sort);
      let list = this.data.examlist;
      let menu = this.data.exammenu;
      list[num].studentAnswer = this.data.studentAnswer;
      menu[this.data.examinfo.sort - 1].state = 2;
      this.setData({
        examlist: list,
        exammenu: menu
      })
      this.gonext();
    })
    }else{
      this.gonext();
    }
  },
  gonext() {
    if (this.data.examinfo.sort < this.data.exammenu.length) {
      let num = this.listexistence(this.data.examinfo.sort + 1);
      // console.log(num)
      wx.showLoading({
        title: '',
      })
      if (num || num === 0) {
        this.setData({
          examinfo: this.data.examlist[num]
        })
        wx.hideLoading();
        this.examdatareset(this.data.examinfo);
      } else {
        _questionOneByOne({
          sort: parseInt(this.data.examinfo.sort + 1),
          examId: this.data.examId
        }).then(data => {
          let list = this.data.examlist;
          list.push(data.data);
          this.setData({
            examinfo: data.data,
            examlist: list
          })
          this.examdatareset(this.data.examinfo);
          wx.hideLoading();
        })
      }
    } else {
      console.log('fck');
    }
  },
  getremainingtime(data) { //获取倒计时
    let data1 = data;
    let time = setInterval(() => {
      if (data1 >= 0) {
        var h = Math.floor(data1 / 3600) < 10 ? '0' + Math.floor(data1 / 3600) : Math.floor(data1 / 3600);
        var m = Math.floor((data1 / 60 % 60)) < 10 ? '0' + Math.floor((data1 / 60 % 60)) : Math.floor((data1 / 60 % 60));
        var s = Math.floor((data1 % 60)) < 10 ? '0' + Math.floor((data1 % 60)) : Math.floor((data1 % 60));
        data1 = data1 - 1;
        if (h > 0) {
          this.setData({
            examtime: `${h}:${m}:${s}`,
            remainExamSecond: data1
          })
        } else {
          this.setData({
            examtime: `${m}:${s}`,
            remainExamSecond: data1
          })
        }
      } else {
        clearInterval(time);
      }
    }, 1000)
  },
  submitexam() {
    _submitExam({
      subjectId: 14,
      examId: this.data.examId
    }).then(data => {
      
    })
  }
})