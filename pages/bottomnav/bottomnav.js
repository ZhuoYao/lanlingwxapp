// pages/bottomnav/bottomnav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      navIndex:{
        type:String,
        value:0
      }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    gopage: function(e){
      console.log(e);
      switch(e.currentTarget.dataset.index){
        case '0':
          wx.redirectTo({
            url: '../signup/signup',
          })
        break;
        case '1':
          wx.redirectTo({
            url: '../index1/main',
          })
        break;
        case '2':
          wx.redirectTo({
            url: '../recruit/recruit',
          })
        break;
        case '3':
        console.log(3)
        break;
      }
    }
  }
})
