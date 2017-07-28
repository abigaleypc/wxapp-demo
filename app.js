/* converted by appconverter    	      		  
   on Thursday, June 29th, 2017, 6:44:23 PM
*/
const openIdUrl = require('./config').openIdUrl;
App({
    onLaunch: function () {
        console.log('App Launch');
    },
    onShow: function () {
        console.log('App Show');
    },
    onHide: function () {
        console.log('App Hide');
    },
    globalData: {
        hasLogin: false,
        openid: null
    },
    getUserOpenId: function (callback) {
        var self = this;
        if (self.globalData.openid) {
            callback(null, self.globalData.openid);
        } else {
            abridge.getAuthCode({
                success: function (data) {
                    abridge.httpRequest({
                        url: openIdUrl,
                        data: { code: data.code },
                        success: function (res) {
                            console.log('拉取openid成功', res);
                            self.globalData.openid = res.data.openid;
                            callback(null, self.globalData.openid);
                        },
                        fail: function (res) {
                            console.log('拉取用户openid失败\uFF0C将无法正常使用开放接口等服务', res);
                            callback(res);
                        }
                    });
                },
                fail: function (err) {
                    console.log('wx.login 接口调用失败\uFF0C将无法正常使用开放接口等服务', err);
                    callback(err);
                }
            });
        }
    }
});
