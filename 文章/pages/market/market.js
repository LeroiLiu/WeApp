// pages/market/market.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    current: 'market'
  },

  /**
   * 组件的方法列表
   */
  methods: {

    //底部导航栏
    handleChangeTabBar({ detail }) {
      wx.navigateTo({
        url: '/pages/' + detail.key + '/' + detail.key
      })
      this.setData({
        current: detail.key
      });
    }
    
  }
})
