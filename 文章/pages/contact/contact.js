// pages/contact/contact.js
const { $Message } = require('../../dist/base/index');

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
    current: 'contact'
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
    },

    copyWeChat({ detail }) {
      wx.setClipboardData({
        data: 'Leroi-Liu',
      })
    },

    dialing({ detail }){
      wx.makePhoneCall({
        phoneNumber: '17682100208' //仅为示例，并非真实的电话号码
      })
    },

    addPhoneContact({detail}){
      wx.addPhoneContact({
        firstName:"亚历山大科技刘立陈",
        nickName:"Leroi Liu",
        remark:"亚历山大科技",
        mobilePhoneNumber:"+8617682100208",
        weChatNumber:"Leroi-Liu",
        addressCountry:"中国",
        addressState:"广东省",
        addressCity:"深圳市",
        organization:"亚历山大科技",
        title:"创始人",
        email:"LeroiLiu@163.com",
      })
    },

    /**
* 用户点击右上角分享（index.js）
*/
 onShareAppMessage: function (ops) {
      if (ops.from === 'button') {
        // 来自页面内转发按钮
        console.log(ops.target)
      }
      return {
        title: '压力山大机器人',
        path: 'pages/show/show',
        success: function (res) {
          // 转发成功
          console.log("转发成功:" + JSON.stringify(res));
        },
        fail: function (res) {
          // 转发失败
          console.log("转发失败:" + JSON.stringify(res));
        }
      }
    }

  },





})

