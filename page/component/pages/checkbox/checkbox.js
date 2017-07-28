/* converted by appconverter    	      		  
   on Thursday, June 29th, 2017, 6:44:23 PM
*/
Page({
    data: {
        items: [
            {
                value: 'USA',
                name: '美国'
            },
            {
                value: 'CHN',
                name: '中国',
                checked: 'true'
            },
            {
                value: 'BRA',
                name: '巴西'
            },
            {
                value: 'JPN',
                name: '日本'
            },
            {
                value: 'ENG',
                name: '英国'
            },
            {
                value: 'FRA',
                name: '法国'
            }
        ]
    },
    checkboxChange: function (e) {
        console.log('checkbox发生change事件\uFF0C携带value值为\uFF1A', e.detail.value);
        var items = this.data.items, values = e.detail.value;
        for (var i = 0, lenI = items.length; i < lenI; ++i) {
            items[i].checked = false;
            for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
                if (items[i].value == values[j]) {
                    items[i].checked = true;
                    break;
                }
            }
        }
        this.setData({ items: items });
    }
});