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
var QL_hs = /** @class */ (function () {
    function QL_hs(name, score) {
        this._name = name;
        this._score = score;
    }
    Object.defineProperty(QL_hs.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(QL_hs.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (value) {
            this._score = value;
        },
        enumerable: false,
        configurable: true
    });
    return QL_hs;
}());
var QLY_score = /** @class */ (function (_super) {
    __extends(QLY_score, _super);
    function QLY_score(name, score) {
        var _this = _super.call(this, name, score) || this;
        _this.next = null;
        return _this;
    }
    return QLY_score;
}(QL_hs));
var QLY_Linkerlist = /** @class */ (function () {
    function QLY_Linkerlist() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    QLY_Linkerlist.prototype.insertFirst = function (name, score) {
        var ql = new QLY_score(name, score);
        ql.next = this.head;
        this.head = ql;
        if (!this.tail) {
            this.tail = ql;
        }
        this.size++;
    };
    QLY_Linkerlist.prototype.insertLast = function (name, score) {
        if (!this.head) {
            this.insertFirst(name, score);
        }
        else {
            var ql = new QLY_score(name, score);
            this.tail.next = ql;
            this.tail = ql;
        }
        this.size++;
    };
    QLY_Linkerlist.prototype.showList = function () {
        var arr = [];
        var curren = this.head;
        while (curren != null) {
            arr.push(new QL_hs(curren.name, curren.score));
            curren = curren.next;
        }
        return arr;
    };
    QLY_Linkerlist.prototype.totalStudentsFail = function () {
        var a = 5;
        var count = 0;
        var curren = this.head;
        while (curren != null) {
            if (curren.score <= a) {
                count++;
            }
            curren = curren.next;
        }
        console.log("".concat(count, " la so nguoi co diem thap"));
    };
    QLY_Linkerlist.prototype.listStudentMaxScore = function () {
        var curren = this.head;
        var arr = [];
        var scoremax = curren.score;
        while (curren != null) {
            if (scoremax < curren.score) {
                scoremax = curren.score;
                arr.pop();
                arr.push(new QL_hs(curren.name, curren.score));
            }
            else if (scoremax === curren.score) {
                arr.push(new QL_hs(curren.name, curren.score));
            }
            curren = curren.next;
        }
        console.log(arr);
    };
    QLY_Linkerlist.prototype.findByName = function (name) {
        var curren = this.head;
        while (curren != null) {
            if (curren.name === name) {
                console.log("co ten la ".concat(curren.name, "va co diem la ").concat(curren.score));
            }
            curren = curren.next;
        }
    };
    return QLY_Linkerlist;
}());
var QLY = new QLY_Linkerlist();
QLY.insertFirst("phong", 6);
QLY.insertFirst("duy", 4);
QLY.insertLast("long", 8);
QLY.insertLast("long", 9);
QLY.insertLast("tan", 9);
console.table(QLY.showList());
QLY.listStudentMaxScore();
QLY.totalStudentsFail();
QLY.findByName("phong");
