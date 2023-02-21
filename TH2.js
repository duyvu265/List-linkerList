var NODE = /** @class */ (function () {
    function NODE(data) {
        this.next = null;
        this.data = data;
    }
    NODE.prototype.readdData = function () {
        return this.data;
    };
    return NODE;
}());
var LinkerList = /** @class */ (function () {
    function LinkerList() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    LinkerList.prototype.insertfistnode = function (data) {
        var node1 = new NODE(data);
        node1.next = this.head;
        this.head = node1;
        if (!this.tail) {
            this.tail = node1;
        }
        this.size++;
    };
    LinkerList.prototype.inserlastnode = function (data) {
        if (!this.head) {
            this.insertfistnode(data);
        }
        else {
            var node = new NODE(data);
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };
    LinkerList.prototype.getSize = function () {
        return this.size;
    };
    LinkerList.prototype.readlis = function () {
        var listdata = [];
        var currentnode = this.head;
        while (currentnode !== null) {
            listdata.push(currentnode.readdData());
            currentnode = currentnode.next;
        }
        return listdata;
    };
    return LinkerList;
}());
var linkerlis = new LinkerList();
linkerlis.insertfistnode(1);
linkerlis.insertfistnode(2);
linkerlis.insertfistnode(3);
linkerlis.inserlastnode(30);
linkerlis.inserlastnode(40);
console.log(linkerlis.getSize());
console.log(linkerlis.readlis());
