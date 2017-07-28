/* converted by appconverter    	      		  
   on Thursday, June 29th, 2017, 6:44:23 PM
*/
var texts = [
    '2011年1月\uFF0C微信1.0发布',
    '同年5月\uFF0C微信2.0语音对讲发布',
    '10月\uFF0C微信3.0新增摇一摇功能',
    '2012年3月\uFF0C微信用户突破1亿',
    '4月份\uFF0C微信4.0朋友圈发布',
    '同年7月\uFF0C微信4.2发布公众平台',
    '2013年8月\uFF0C微信5.0发布微信支付',
    '2014年9月\uFF0C企业号发布',
    '同月\uFF0C发布微信卡包',
    '2015年1月\uFF0C微信第一条朋友圈广告',
    '2016年1月\uFF0C企业微信发布',
    '2017年1月\uFF0C小程序发布',
    '......'
];
Page({
    data: {
        text: '',
        canAdd: true,
        canRemove: false
    },
    extraLine: [],
    add: function (e) {
        var that = this;
        this.extraLine.push(texts[this.extraLine.length % 12]);
        this.setData({
            text: this.extraLine.join('\n'),
            canAdd: this.extraLine.length < 12,
            canRemove: this.extraLine.length > 0
        });
        setTimeout(function () {
            that.setData({ scrollTop: 99999 });
        }, 0);
    },
    remove: function (e) {
        var that = this;
        if (this.extraLine.length > 0) {
            this.extraLine.pop();
            this.setData({
                text: this.extraLine.join('\n'),
                canAdd: this.extraLine.length < 12,
                canRemove: this.extraLine.length > 0
            });
        }
        setTimeout(function () {
            that.setData({ scrollTop: 99999 });
        }, 0);
    }
});