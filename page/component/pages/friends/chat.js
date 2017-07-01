Page({
  data: {
    msgList: {
      "John": [
        {
          'type': 'friend',
          'msg': '你好 我是John'
        },
        {
          'type': 'self',
          'msg': '你好'
        },
        {
          'type': 'friend',
          'msg': '你来自哪里'
        },
        {
          'type': 'self',
          'msg': '不知道啊'
        },
        {
          'type': 'friend',
          'msg': '什么'
        }
      ],
      "Joel": [
        {
          'type': 'friend',
          'msg': '你好 我是Joel'
        },
        {
          'type': 'self',
          'msg': '很高兴认识你'
        },
        {
          'type': 'friend',
          'msg': '哈哈'
        }
      ],
      "James": [
        {
          'type': 'friend',
          'msg': '你好 我是james'
        },
        {
          'type': 'self',
          'msg': '你好'
        },
        {
          'type': 'friend',
          'msg': '祝你开心'
        }
      ],
      "Jimmy": [
        {
          'type': 'friend',
          'msg': 'Jimmy'
        },
        {
          'type': 'self',
          'msg': '你好'
        }
      ],
      "Jackson": [
        {
          'type': 'friend',
          'msg': 'Jackson'
        },
        {
          'type': 'self',
          'msg': '你好'
        },
        {
          'type': 'friend',
          'msg': ' 不做饭的'
        },
        {
          'type': 'self',
          'msg': '饿呢'
        }
      ],
      "Jillian": [
        {
          'type': 'friend',
          'msg': 'jillian'
        }
      ],
      "Julie": [
        {
          'type': 'friend',
          'msg': '哦哈'
        },
        {
          'type': 'self',
          'msg': '稀有娜娜'
        },
        {
          'type': 'friend',
          'msg': '栝蒌素'
        },
        {
          'type': 'self',
          'msg': '尸王殿'
        },
        {
          'type': 'friend',
          'msg': '范德萨胡椒粉和看电视啦恢复了第三款'
        },
        {
          'type': 'self',
          'msg': '倒计时卡了解到，打算'
        },
        {
          'type': 'friend',
          'msg': '的撒'
        }
      ],
      "Devin": [
        {
          'type': 'friend',
          'msg': '哦哈'
        },
        {
          'type': 'self',
          'msg': '稀有娜娜'
        },
        {
          'type': 'friend',
          'msg': '栝蒌素'
        },
        {
          'type': 'self',
          'msg': '尸王殿'
        },
        {
          'type': 'friend',
          'msg': '范德萨胡椒粉和看电视啦恢复了第三款'
        },
        {
          'type': 'self',
          'msg': '倒计时卡了解到，打算'
        },
        {
          'type': 'friend',
          'msg': '的撒'
        }
      ]
    },
    friends: [
      {
        'id': 1,
        'name': 'John',
        'avatarPath': '../../resources/avatars/avatar1.jpeg'
      }, {
        'id': 2,
        'name': 'Joel',
        'avatarPath': '../../resources/avatars/avatar2.jpeg'
      }, {
        'id': 3,
        'name': 'James',
        'avatarPath': '../../resources/avatars/avatar3.jpeg'
      }, {
        'id': 4,
        'name': 'Jimmy',
        'avatarPath': '../../resources/avatars/avatar4.jpeg'
      }, {
        'id': 5,
        'name': 'Jackson',
        'avatarPath': '../../resources/avatars/avatar5.jpeg'
      }, {
        'id': 6,
        'name': 'Jillian',
        'avatarPath': '../../resources/avatars/avatar6.jpeg'
      }, {
        'id': 7,
        'name': 'Julie',
        'avatarPath': '../../resources/avatars/avatar7.jpeg'
      }, {
        'id': 8,
        'name': 'Devin',
        'avatarPath': '../../resources/avatars/avatar8.jpeg'
      }
    ],
    chatInfo: {
      userInfo: null,
      msg: null
    },
    inputValue: ''
  },
  msgContent: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
  },
  onReady: function () {
    let that = this,
      userInfo = that.data.friends.filter(it => (it.id == that.data.id))[0],
      msg = that.data.msgList[userInfo.name];
    this.setData({
      chatInfo: {
        userInfo: userInfo,
        msg: msg
      }
    })
  },
  sendMsg: function () {
    let newMsg = this.data.chatInfo.msg;
    newMsg.push({
      'type': 'self',
      'msg': this.data.inputValue
    })
    this.setData({
      inputValue: '',
      chatInfo: {
        userInfo: this.data.chatInfo.userInfo,
        msg: newMsg
      }
    })
  }
})
