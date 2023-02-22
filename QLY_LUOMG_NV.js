var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NV = /** @class */ (function () {
    function NV(month, money) {
        this._month = month;
        this._money = money;
    }
    Object.defineProperty(NV.prototype, "month", {
        get: function () {
            return this._month;
        },
        set: function (value) {
            this._month = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NV.prototype, "money", {
        get: function () {
            return this._money;
        },
        set: function (value) {
            this._money = value;
        },
        enumerable: false,
        configurable: true
    });
    return NV;
}());
var QLY = /** @class */ (function (_super) {
    __extends(QLY, _super);
    function QLY(month, money) {
        var _this = _super.call(this, month, money) || this;
        _this.next = null;
        return _this;
    }
    return QLY;
}(NV));
var QL_LUONG = /** @class */ (function () {
    function QL_LUONG() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    QL_LUONG.prototype.add = function (month, money) {
        var nv = new QLY(month, money);
        nv.next = this.head;
        this.head = nv;
        if (!this.tail) {
            this.tail = nv;
        }
        else {
            this.size++;
        }
    };
    QL_LUONG.prototype.show = function () {
        var arr = [];
        var curren = this.head;
        while (curren != null) {
            arr.push(new QLY(curren.month, curren.money));
            curren = curren.next;
        }
        return arr;
    };
    QL_LUONG.prototype.total = function () {
        var total = 0;
        var curren = this.head;
        while (curren != null) {
            total += curren.month;
            curren = curren.next;
        }
        return total;
    };
    QL_LUONG.prototype.maxmoney = function () {
        var curren = this.head;
        var max = curren.money;
        while (curren != null) {
            if (max < curren.money) {
                max = curren.money;
            }
            curren = curren.next;
            return max;
        }
    };
    return QL_LUONG;
}());
var qy = new QL_LUONG();
qy.add(5, 12);
qy.add(6, 22);
qy.add(7, 32);
qy.add(8, 42);
console.log(qy.show());
console.log(qy.maxmoney());
console.log(qy.total());
