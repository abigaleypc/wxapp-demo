Page({
  data: {
    greeting: 'hello',
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
    ]
  },
  onLoad: function (options) {
    wx.connectSocket({
      url: 'wss://youngdze.co:8443',
      header: {
        'content-type': 'application/json'
      }
    });
    wx.onSocketOpen(function() {
      console.log('socket connects successfully!');
    })
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    // Do something when page show.
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
});
