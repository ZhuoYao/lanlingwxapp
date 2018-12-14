//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    let _this =this;
    wx.getStorage({
      key: 'token',
      success: function(res) {
        console.log(res);
        _this.globalData.token = res.data 
      },
      fail : function(error){
        console.log(error);
      }
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  changepraticelsit(data,type){
    console.log(data, type);
      switch(type){
         case 0 :
          this.globalData.practicelist.push(data);
         break;
         case 1:
          this.globalData.practicelist[data.num].studentAnswer = data.studentAnswer;
          this.globalData.practicelist[data.num].trueAnswer = data.trueAnswer;
         break;
         case 2:
          this.globalData.practicelist[data.num].isCollection = data.isCollection;
         break;
      }
  },
  changetoken(data){
    this.globalData.token = data;
    wx.setStorage({
      key: 'token',
      data: data,
    })
  },
  changesubject(data){
    this.globalData.subjectName = data.subjectName;
    this.globalData.subjectId = data.subjectId
  },
  changecategory(data){
      this.globalData.category = data;
  },
  changepraticemenu(data,type){
      if(type == 0){
        this.globalData.practicemenu = data;
      }else{
        this.globalData.practicemenu[data.num].state = data.state; 
      }
  },
  changeexammenu(data,type){
      if(type ==0){
        this.globalData.exammenu = data;
      }else{
        this.globalData.exammenu[data.num].state = 2;
      }
  },
  changeexamlsit(data, type) {
    console.log(data, type);
    switch (type) {
      case 0:
        this.globalData.examlist.push(data);
        break;
      case 1:
        this.globalData.examlist[data.num].studentAnswer = data.studentAnswer;
        break;
      case 2:
        this.globalData.examlist[data.num].isCollection = data.isCollection;
        break;
      case 3:
        this.globalData.examlist = []
        break;
    }
  },
  changecity(data){
      this.globalData.city = data;
  },
  setcurrentOptions(data){
      this.globalData.currentOptions = data;
  },
  setallsubject(data){
      this.globalData.allsubject = data;
  },
  setrichschool(data){
    console.log(data);
      this.globalData.richschool = data;
  },

  globalData: {
    userInfo: null,
    token:'',
    practicemenu:[],
    practicelist:[],
    subjectName:'',
    subjectId:'',
    category:0,
    currentOptions:{},
    exammenu:[],
    examlist:[],
    city:'佛山',
    allsubject:[],
    richschool:''
  }
})