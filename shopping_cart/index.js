var app = new Vue({
    el: "#app",
    data: {
        itemList: [
            {id: 1, name: "iphone7", price: 6188, count: 1, isSelect: ''},
            {id: 2, name: "iPad2", price: 5888, count: 1, isSelect: ''},
            {id: 3, name: "MacBook", price: 18888, count: 1, isSelect: ''}
        ]
    },
    computed: {
        totalPrice: function () {
            var total = 0;
            for (var i = 0; i < this.itemList.length; i++) {
                if (this.itemList[i].isSelect === 'checked') {
                    total += this.itemList[i].price * this.itemList[i].count;
                }
            }

            return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }
    },
    methods:{
        minus: function (index) {
            this.itemList[index].count--;
        },
        add: function (index) {
            this.itemList[index].count++;
        },
        remove: function (index) {
            this.itemList.splice(index);
        },
        selectAll: function () {
            for (var i = 0; i < this.itemList.length; i++) {
                this.itemList[i].isSelect = 'checked';
            }
        },
        unSelectAll: function () {
            for (var i = 0; i < this.itemList.length; i++) {
                this.itemList[i].isSelect = 0;
            }
        }
    },
});