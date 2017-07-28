/* converted by appconverter    	      		  
   on Thursday, June 29th, 2017, 6:44:23 PM
*/
Page({
    data: {
        focus: false,
        inputValue: ''
    },
    bindKeyInput: function (e) {
        this.setData({ inputValue: e.detail.value });
    },
    bindReplaceInput: function (e) {
        var value = e.detail.value;
        var pos = e.detail.cursor;
        var left;
        if (pos !== -1) {
            left = e.detail.value.slice(0, pos);
            pos = left.replace(/11/g, '2').length;
        }
        return {
            value: value.replace(/11/g, '2'),
            cursor: pos
        };
    },
    bindHideKeyboard: function (e) {
        if (e.detail.value === '123') {
            abridge.hideKeyboard();
        }
    }
});