const Globalurl = 'http://test.nataliee.top/lanling-api/api';
// const Globalurl = 'http://192.168.0.10:8081/lanling-api/api';
var Token = 'cd361c510c1f423d9b4a57b1b112b6b4';
const _SetToken = function (token) {
  Token = token;
  console.log(Token)
};
const _GetSubject = function(data){
  return new Promise((resolve, reject) => {
      wx.request({
        url: `${Globalurl}/subject/getXSubjectList`,
        data:data,
        method:'POST',
        header: {
          "Content-Type": "application/x-www-form-urlencoded",
          "token": Token
        },
        success : res => {
          console.log(res);
          resolve(res);
        }
      })
  })
}

const _login = function(data){
  return new Promise((resolve,reject) => {
    wx.request({
      url: `${Globalurl}/student/login`,
      data: { account: '15626160835', password:'123456'},
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success : res => {
          console.log(res);
          resolve(res);
      }
    })
  })
}

const _getQuestionList = function(data){
    return new Promise((resolve,reject) => {
      wx.request({
        url: `${Globalurl}/subject/getQuestionList`,
        data:data,
        method:'POST',
        header: {
          "Content-Type": "application/x-www-form-urlencoded",
          "token": Token
        },
        success : res => {
          if(res.data.code == 0){
          resolve(res.data);
          }else{
            reject(res.data);
          }
        }
      })
    })
}

const _recordAnswer = function(data){
  return new Promise((resolve,reject) => {
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
          reject(res.data);
        }
      }
    })
  })
}

const _insertCollection = function(data){
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
          reject(res.data);
        }
      }
    })
  })  
}

const _getExamInfo = function(data){
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
          reject(res.data);
        }
      }
    })
  })  
}

const _createExamPaper = function(data){
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
          reject(res.data);
        }
      }
    })
  })  
}

const _questionOneByOne = function(data){
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
          reject(res.data);
        }
      }
    })
  })  
}

const _questionState = function(data){
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
          reject(res.data);
        }
      }
    })
  })  
}

const _submitQuestion = function(data){
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
          reject(res.data);
        }
      }
    })
  })  
}

const _submitExam = function(data){
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
          reject(res.data);
        }
      }
    })
  })
}

const _getExamList = function(data){
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
          reject(res.data);
        }
      }
    })
  })
}

const _getXSubjectList = function(data){
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
          reject(res.data);
        }
      }
    })
  })
}

const _getSchoolList = function(data){
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
          reject(res.data);
        }
      }
    })
  })
}

const _getSchool = function(data){
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
          reject(res.data);
        }
      }
    })
  })
}
const _signUpRecord = function(data){
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
          reject(res.data);
        }
      }
    })
  })
}

const _getNotice = function(data){
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${Globalurl}/user/getNotice`,
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
          reject(res.data);
        }
      }
    })
  })
}

const _getSchoolDetail = function(data){
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
          reject(res.data);
        }
      }
    })
  })
}

const _getCity = function(data){
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
          reject(res.data);
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
  _getCity
}