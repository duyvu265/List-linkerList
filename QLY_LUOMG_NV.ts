class NV {
    _month: number;
    _money: number;

    constructor(month: number, money: number) {
        this._month = month;
        this._money = money;
    }

    get month(): number {
        return this._month;
    }

    set month(value: number) {
        this._month = value;
    }

    get money(): number {
        return this._money;
    }

    set money(value: number) {
        this._money = value;
    }
}

class QLY extends NV {
    next: QLY | null = null;

    constructor(month: number, money: number) {
        super(month, money);

    }
}

class QL_LUONG {
    head: QLY | null = null;
    tail: QLY | null = null;
    size: number = 0;

    constructor() {
    }

    add(month: number, money: number): void {
        let nv = new QLY(month, money);
        nv.next = this.head;
        this.head = nv;
        if (!this.tail) {
            this.tail = nv;
        } else {
            this.size++;
        }
    }

    show(): QLY[] {
        let arr: QLY[] = [];
        let curren = this.head
        while (curren != null) {
            arr.push(new QLY(curren.month, curren.money));
            curren = curren.next
        }
        return arr;
    }

    total(): number {
        let total = 0;
        let curren = this.head;
        while (curren != null) {
            total += curren.month;
            curren=curren.next;
        }
        return total;
    }

    maxmoney(): any {
        let curren = this.head;
        let max = curren.money;
        while (curren != null) {
            if (max < curren.money) {
                max = curren.money
            }
            curren = curren.next;
            return max;
        }

    }

}

let qy = new QL_LUONG();
qy.add(5, 12);
qy.add(6, 22);
qy.add(7, 32);
qy.add(8, 42);
console.log(qy.show())
console.log(qy.maxmoney())
console.log(qy.total())





