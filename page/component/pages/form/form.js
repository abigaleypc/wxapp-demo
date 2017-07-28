/* converted by appconverter    	      		  
   on Thursday, June 29th, 2017, 6:44:23 PM
*/
Page({
    data: {
        pickerHidden: true,
        chosen: ''
    },
    pickerConfirm: function (e) {
        this.setData({ pickerHidden: true });
        this.setData({ chosen: e.detail.value });
    },
    pickerCancel: function (e) {
        this.setData({ pickerHidden: true });
    },
    pickerShow: function (e) {
        this.setData({ pickerHidden: false });
    },
    formSubmit: function (e) {
        console.log('form发生了submit事件\uFF0C携带数据为\uFF1A', e.detail.value);
    },
    formReset: function (e) {
        console.log('form发生了reset事件\uFF0C携带数据为\uFF1A', e.detail.value);
        this.setData({ chosen: '' });
    }
});