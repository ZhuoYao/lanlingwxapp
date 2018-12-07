// pages/practice/practice.js
const getanswer = require('../../utils/answer.js')
const app = getApp();
import {
  _recordAnswer,
  _getQuestionList,
  _insertCollection
} from '../../utils/request.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questioninfo: '',
    practicetype: 0,
    questionoptions: [],
    isanswer: false, //判断当前题目是否已经答题
    errorindex: false,
    trueindex: false,
    trueanswer: '',
    menushow: false,
    explain: '',
    showanswer: false,
    heading: '',
    menudata: '',
    menuallnum: '',
    menuhaddo: '',
    menutruenum: '',
    menuerrornum: '',
    subjectId: '', //科目的ID
    sort: 1 //用于随机和错题练习的序号
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // console.log(options.type);
    switch (options.type) {
      case '1':
        this.setData({
          practicetype: parseInt(options.type),
          subjectId: options.subjectId,
          questioninfo: app.globalData.currentOptions
        })
        wx.setNavigationBarTitle({
          title: "随机练习",
          success: function(data) {}
        })
        this.changequestionoptions(app.globalData.currentOptions.optionInfoList, 0);
        break;
      case '2':
        this.setData({
          practicetype: parseInt(options.type),
          subjectId: options.subjectId,
          questioninfo: app.globalData.currentOptions,
          isanswer: app.globalData.currentOptions.studentAnswer ? true : false,
          trueanswer: app.globalData.currentOptions.trueAnswer,
          menudata: app.globalData.practicemenu,
          menuallnum: app.globalData.practicemenu.length
        })
        this.changequestionoptions(app.globalData.currentOptions.optionInfoList, app.globalData.currentOptions.studentAnswer);
        this.resetmenu(this.data.menudata);
        wx.setNavigationBarTitle({
          title: "顺序练习",
          success: function(data) {}
        })
        break;
      case '3':
        this.setData({
          practicetype: parseInt(options.type),
          subjectId: options.subjectId,
          questioninfo: app.globalData.currentOptions
        })
        wx.setNavigationBarTitle({
          title: "错题练习",
          success: function(data) {}
        })
        this.changequestionoptions(app.globalData.currentOptions.optionInfoList, 0);
        break;
      case '4':
        this.setData({
          practicetype: parseInt(options.type),
          subjectId: options.subjectId,
          questioninfo: app.globalData.currentOptions
        })
        wx.setNavigationBarTitle({
          title: "收藏",
          success: function(data) {}
        })
        this.changequestionoptions(app.globalData.currentOptions.optionInfoList, 0);
        break;
    }
    this.setData({
      heading: app.globalData.subjectName
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
  showmenu() {
    this.setData({
      menushow: !this.data.menushow
    })
  },
  chooseanswer(e) {
    if (!this.data.isanswer) {
      if (this.data.practicetype == 2) {
        _recordAnswer({
          questionId: this.data.questioninfo.questionId,
          exercisesType: 1,
          studentAnswer: e.currentTarget.dataset.xuanxiang
        }).then(data => {
          // console.log(data);
          let num = this.listexistence(this.data.questioninfo.sort);
          app.changepraticelsit({
            num: num,
            studentAnswer: e.currentTarget.dataset.xuanxiang,
            trueAnswer: data.data.trueAnswer
          }, 1);
          if (e.currentTarget.dataset.xuanxiang == data.data.trueAnswer) {
            let answerdata = this.data.questionoptions;
            let answerindex = getanswer.getindex(e.currentTarget.dataset.xuanxiang);
            app.changepraticemenu({
              num: this.data.questioninfo.sort - 1,
              state: 2
            }, 1);
            answerdata.forEach((data, index) => {
              if (index == answerindex) {
                answerdata[index].showtext = false;
              } else {
                answerdata[index].showtext = true;
              }
            })
            this.setData({
              questionoptions: answerdata,
              isanswer: true,
              trueindex: answerindex,
              errorindex: false,
              menudata: app.globalData.practicemenu
            })
            this.resetmenu(app.globalData.practicemenu);
          } else {
            let answerdata = this.data.questionoptions;
            let trueindex = getanswer.getindex(data.data.trueAnswer);
            let errorindex = getanswer.getindex(e.currentTarget.dataset.xuanxiang);
            app.changepraticemenu({
              num: this.data.questioninfo.sort - 1,
              state: 3
            }, 1);
            answerdata.forEach((data, index) => {
              if (index == trueindex || index == errorindex) {
                answerdata[index].showtext = false;
              } else {
                answerdata[index].showtext = true;
              }
            })
            this.setData({
              questionoptions: answerdata,
              isanswer: true,
              trueindex: trueindex,
              errorindex: errorindex,
              menudata: app.globalData.practicemenu
            })
            this.resetmenu(app.globalData.practicemenu);
          }
        })
      } else {
        let exercisesType = 3;
        if (this.data.practicetype == 2) {
          exercisesType = 2;
        }
        _recordAnswer({
          questionId: this.data.questioninfo.questionId,
          exercisesType: exercisesType,
          studentAnswer: e.currentTarget.dataset.xuanxiang
        }).then(data => {
          if (e.currentTarget.dataset.xuanxiang == data.data.trueAnswer) {
            let answerdata = this.data.questionoptions;
            let answerindex = getanswer.getindex(e.currentTarget.dataset.xuanxiang);
            answerdata.forEach((data, index) => {
              if (index == answerindex) {
                answerdata[index].showtext = false;
              } else {
                answerdata[index].showtext = true;
              }
            })
            this.setData({
              questionoptions: answerdata,
              isanswer: true,
              trueindex: answerindex,
              errorindex: false,
              showanswer: true,
              trueanswer: data.data.trueAnswer
            })
          } else {
            let answerdata = this.data.questionoptions;
            let trueindex = getanswer.getindex(data.data.trueAnswer);
            let errorindex = getanswer.getindex(e.currentTarget.dataset.xuanxiang);
            answerdata.forEach((data, index) => {
              if (index == trueindex || index == errorindex) {
                answerdata[index].showtext = false;
              } else {
                answerdata[index].showtext = true;
              }
            })
            this.setData({
              questionoptions: answerdata,
              isanswer: true,
              trueindex: trueindex,
              errorindex: errorindex,
              showanswer: true,
              trueanswer: data.data.trueAnswer
            })
          }
        })
      }
    }
  },
  changequestionoptions(data, type) {
    // console.log(data,type);
    if (type) {
      // console.log(this.data.questioninfo)
      if (this.data.questioninfo.studentAnswer == this.data.questioninfo.trueAnswer) {
        let answerindex = getanswer.getindex(this.data.questioninfo.studentAnswer);
        let answerdata = this.data.questioninfo.optionInfoList;
        answerdata.forEach((data, index) => {
          if (index == answerindex) {
            answerdata[index].showtext = false;
          } else {
            answerdata[index].showtext = true;
          }
        })
        this.setData({
          questionoptions: answerdata,
          isanswer: true,
          trueindex: answerindex,
          errorindex: false,
          showanswer: true
        })
      } else {
        let answerdata = this.data.questioninfo.optionInfoList;
        let trueindex = getanswer.getindex(this.data.trueanswer);
        let errorindex = getanswer.getindex(this.data.questioninfo.studentAnswer);
        answerdata.forEach((data, index) => {
          if (index == trueindex || index == errorindex) {
            answerdata[index].showtext = false;
          } else {
            answerdata[index].showtext = true;
          }
        })
        // console.log(answerdata);
        this.setData({
          questionoptions: answerdata,
          isanswer: true,
          trueindex: trueindex,
          errorindex: errorindex,
          showanswer: true
        })
      }
    } else {
      data.forEach((item, index) => {
        data[index].showtext = true;
      })
      this.setData({
        questionoptions: data,
        showanswer: false
      })
    }
  },
  gonext(e) {
    switch (this.data.practicetype) {
      case 1:
        let sort = this.data.sort + 1;
        _getQuestionList({
          subjectId: this.data.subjectId,
          exercisesType: 2,
          sort: sort,
          state: 2
        }).then(data => {
          this.setData({
            sort: sort
          })
          this.datareset(data.data.questionInfo);
        })
        break;
      case 2:
        let sort1 = parseInt(this.data.questioninfo.sort) + 1;
        let num = this.listexistence(sort1)
        // console.log(num);
        if (num || num === 0) {
          this.datareset(app.globalData.practicelist[num]);
        } else {
          _getQuestionList({
            subjectId: this.data.subjectId,
            sort: sort1,
            exercisesType: 1,
            state: 2
          }).then(data => {
            this.datareset(data.data.questionInfo);
            app.changepraticelsit(data.data.questionInfo, 0);
          })
        }
        break;
      case 3:
        let sort2 = this.data.sort + 1;
        _getQuestionList({
          subjectId: this.data.subjectId,
          exercisesType: 3,
          sort: sort2,
          state: 2,
          type: 1
        }).then(data => {
          this.setData({
            sort: sort2
          })
          this.datareset(data.data.questionInfo);
        })
        break;
      case 4:
        let sort3 = this.data.sort + 1;
        _getQuestionList({
          subjectId: this.data.subjectId,
          exercisesType: 3,
          sort: sort3,
          state: 2,
          type: 2
        }).then(data => {
          this.setData({
            sort: sort3
          })
          this.datareset(data.data.questionInfo);
        })
        break;
    }
  },
  goprevious(e) {
    let sort1 = parseInt(this.data.questioninfo.sort) - 1;
    let num = this.listexistence(sort1);
    // console.log(num);
    if (num || num === 0) {
      this.datareset(app.globalData.practicelist[num]);
    } else {
      _getQuestionList({
        subjectId: 14,
        sort: sort1,
        exercisesType: 1,
        state: 2
      }).then(data => {
        this.datareset(data.data.questionInfo);
        app.changepraticelsit(data.data.questionInfo, 0);
      })
    }
  },
  listexistence(data) {
    let num = ''
    app.globalData.practicelist.forEach((item, index) => {
      if (item.sort === data) {
        num = index
      }
    })
    return num;
  },
  datareset(data) {
    // console.log(data);
    this.setData({
      questioninfo: data,
      isanswer: data.studentAnswer ? true : false,
      trueanswer: data.trueAnswer,
      errorindex: false,
      trueindex: false
    })
    this.changequestionoptions(data.optionInfoList, data.studentAnswer);
  },
  resetmenu(data) {
    let truenum = 0;
    let errornum = 0;
    let allnum = 0;
    data.forEach((item, index) => {
      if (item.state == 2) {
        truenum = truenum + 1;
        allnum = allnum + 1;
      }
      if (item.state == 3) {
        errornum = errornum + 1;
        allnum = allnum + 1;
      }
    })
    this.setData({
      menuhaddo: allnum,
      menutruenum: truenum,
      menuerrornum: errornum
    })
  },
  goother(e) {
    let sort = e.currentTarget.dataset.index + 1;
    // console.log(sort);
    let num = this.listexistence(sort);
    // console.log(num);
    this.setData({
      menushow: false
    })
    wx.showToast({
      title: '',
      icon: 'loading',
      duration: 10000
    })
    if (num || num === 0) {
      this.datareset(app.globalData.practicelist[num]);
      wx.hideToast();
    } else {
      _getQuestionList({
        subjectId: 14,
        sort: sort,
        exercisesType: 1,
        state: 2
      }).then(data => {
        this.datareset(data.data.questionInfo);
        app.changepraticelsit(data.data.questionInfo, 0);
        wx.hideToast();
      })
    }
  },
  insertcollection(e) {
    if (this.data.questioninfo.isCollection) {
      wx.showModal({
        title: '',
        content: '你已经将该题添加到收藏夹,无需重复添加',
        showCancel: false,
        confirmColor: 'black'

      })
    } else {
      _insertCollection({
        questionId: this.data.questioninfo.questionId
      }).then(data => {
        let a = this.data.questioninfo;
        a.isCollection = true;
        let num = this.listexistence(this.data.questioninfo.sort);
        app.changepraticelsit({
          num: num,
          isCollection: true
        }, 2);
        this.setData({
          questioninfo: a
        })
      }, err => {

      })
    }
  }
})