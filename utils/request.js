const Globalurl = 'https://test.nataliee.top/lanling-api/api';
// const Globalurl = 'http://192.168.1.15:8081/lanling-api/api';
var app = getApp();
var Token = app.globalData.token;
const _SetToken = function(token) {
  Token = token;
  app.changetoken(token);
  // console.log(token);
};
const _GetSubject = function(data) {
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/subject/getXSubjectList`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
        if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if (res.data.code == 400) {
            wx.navigateTo({
              url: '../login/login',
            })
          } else {
            reject(res.data);
          }
        }
      }
    })
  })
}

const _login = function(data) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/student/login`,
      data: {
        account: '15626160835',
        password: '123456'
      },
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: res => {
        console.log(res);
        resolve(res);
        _SetToken(res.data.data.token);
      }
    })
  })
}

const _getQuestionList = function(data) {
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/subject/getQuestionList`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _recordAnswer = function(data) {
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/subject/recordAnswer`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _insertCollection = function(data) {
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/question/insertErrorQuestion`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _getExamInfo = function(data) {
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/exam/getExamInfo`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _createExamPaper = function(data) {
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/exam/createExamPaper`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _questionOneByOne = function(data) {
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/exam/questionOneByOne`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _questionState = function(data) {
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/exam/questionState`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _submitQuestion = function(data) {
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/exam/submitQuestion`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _submitExam = function(data) {
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/exam/submitExam`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _getExamList = function(data) {
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/exam/getExamList`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _getXSubjectList = function(data) {
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/subject/getXSubjectList`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _getSchoolList = function(data) {
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/school/getSchoolList`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _getSchool = function(data) {
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/school/getSchool`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
        if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}
const _signUpRecord = function(data) {
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/student/signUpRecord`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _getNotice = function(data) {
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/school/getNotice`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _getSchoolDetail = function(data) {
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/school/getSchoolDetail`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _getCity = function(data) {
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/school/getCity`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _getSchoolEvaluate = function(data) {
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/school/getSchoolEvaluate`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _getSignUpSubjectId = function(data) {
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/student/getSignUpSubjectId`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _getCenterInfo = function(data){
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/student/getCenterInfo`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _getOrderList = function(data){
  if(app.globalData.token != '' && Token == ''){
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/student/getOrderList`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _getHotCity =function(data){
  if (app.globalData.token != '' && Token == '') {
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/school/getHotCity`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _getCertificate = function(data){
  if (app.globalData.token != '' && Token == '') {
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/student/getCertificate`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _smsCode = function(data){
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/student/smsCode`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _XLogin = function(data){
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/student/XLogin`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
        if (res.data.code == 0) {
          resolve(res.data);
          _SetToken(res.data.data.token);
        } else {
          reject(res.data);
        }
      }
    })
  })
}

const _getRelatedSchool = function(data){
  if (app.globalData.token != '' && Token == '') {
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/student/getRelatedSchool`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _setCenterInfo = function(data){
  if (app.globalData.token != '' && Token == '') {
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/student/setCenterInfo`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _evaluateSubject = function(data){
  if (app.globalData.token != '' && Token == '') {
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/student/evaluateSubject`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
         if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if(res.data.code == 400){
            wx.navigateTo({
              url: '../login/login',
            })
          }else{
          reject(res.data);
          }
        }
      }
    })
  })
}

const _getAd = function(data){
  if (app.globalData.token != '' && Token == '') {
    _SetToken(app.globalData.token);
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/ad/getAd`,
      data: data,
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        "token": Token
      },
      success: res => {
        if (res.data.code == 0) {
          resolve(res.data);
        } else {
          if (res.data.code == 400) {
            wx.navigateTo({
              url: '../login/login',
            })
          } else {
            reject(res.data);
          }
        }
      }
    })
  })
}

module.exports = {
  _SetToken,
  _GetSubject,
  _login,
  _getQuestionList,
  _recordAnswer,
  _insertCollection,
  _getExamInfo,
  _createExamPaper,
  _questionOneByOne,
  _questionState,
  _submitQuestion,
  _submitExam,
  _getExamList,
  _getXSubjectList,
  _getSchoolList,
  _getSchool,
  _signUpRecord,
  _getNotice,
  _getSchoolDetail,
  _getCity,
  _getSchoolEvaluate,
  _getSignUpSubjectId,
  _getCenterInfo,
  _getOrderList,
  _getHotCity,
  _getCertificate,
  _smsCode,
  _XLogin,
  _getRelatedSchool,
  _setCenterInfo,
  _evaluateSubject,
  _getAd
}