// pages/scenes/scenes.js
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
    current: 'scenes',
    scenes:[
      { title: '服务机器人集成', description:'多大点儿的事多大点点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事'},
      { title: 'ROS机器人研发', description: '多大点儿的事多大点点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事' },
      { title: 'ROS机器人教学', description: '多大点儿的事多大点点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事' },
      { title: '智能仓储', description: '多大点儿的事多大点点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事' },
      { title: '服务机器人集成', description: '多大点儿的事多大点点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事多大点儿的事' }
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
