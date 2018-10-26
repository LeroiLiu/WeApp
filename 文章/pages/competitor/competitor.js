// pages/competitor/competitor.js
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
    current: 'competitor',
    competitors: [
      {
        产品: ['DashGo', 'TMROB'],
        图片: ['../../image/comp.jpg', '../../image/comp.jpg'],
        整体尺寸: ['406*322', '604*956'],
        轮子数量: ['4', '3'],
        悬空高度: ['10', '23'],
        对比: '你好你好你好你好你好'
      }, 
      {
          产品: ['DashGo', 'DaGo'],
          图片: ['../../image/comp.jpg', '../../image/comp.jpg'],
          整体尺寸: ['406*322', '604*956'],
          轮子数量: ['4', '3'],
          悬空高度: ['10', '23'],
          对比: 'fgdhgj'
      }
    ]
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
