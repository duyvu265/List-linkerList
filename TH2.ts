class NODE<T> {
    data: T;
    next: NODE<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }

    readdData(): T {
        return this.data;

    }
}

class LinkerList<T> {
    head: NODE<T> | null;
    tail: NODE<T> | null ;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;

    }

    insertfistnode(data: T): void {
        let node1 = new NODE(data);
        node1.next = this.head;
        this.head = node1;
        if (!this.tail) {
            this.tail = node1;
        }
        this.size++;
    }

    inserlastnode(data: T): void {
        if (!this.head) {
            this.insertfistnode(data);
        } else {
            let node = new NODE(data);
            this.tail.next = node
            this.tail = node;
            this.size++;

        }
    }

    getSize(): number {
        return this.size;
    }

    readlis(): T[] {
        let listdata = [];
        let currentnode = this.head;
        while (currentnode !== null) {
            listdata.push(currentnode.readdData())
            currentnode = currentnode.next;
        }
        return listdata;
    }

}

let linkerlis = new LinkerList();
linkerlis.insertfistnode(1);
linkerlis.insertfistnode(2);
linkerlis.insertfistnode(3);
linkerlis.inserlastnode(30);
linkerlis.inserlastnode(40);
console.log(linkerlis.getSize());
console.log(linkerlis.readlis())



