// pages/index/index.js
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
    current: 'show',
    show_av_lists:[
      { title: '标题一', description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',url: 'https://cloud.video.taobao.com/play/u/434522220/p/1/e/6/t/1/50061254681.mp4', autoplay: true },
      { title: '标题二', description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',url: 'https://cloud.video.taobao.com/play/u/434522220/p/1/e/6/t/1/50061254681.mp4', autoplay: false },
      { title: '标题三', description: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述',url: 'https://cloud.video.taobao.com/play/u/434522220/p/1/e/6/t/1/50061254681.mp4', autoplay: false }
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
  },

})
