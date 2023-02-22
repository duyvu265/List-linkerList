class QL_hs {
    public _name: string;
    public _score: number;

    constructor(name: string, score: number) {
        this._name = name;
        this._score = score;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get score(): number {
        return this._score;
    }

    set score(value: number) {
        this._score = value;
    }
}

class QLY_score extends QL_hs {
    next: QLY_score | null = null;

    constructor(name: string, score: number) {
        super(name, score);

    }

}

class QLY_Linkerlist {
    head: QLY_score | null = null;
    tail: QLY_score | null = null;
    size: number = 0;

    constructor() {
    }

    insertFirst(name: string, score: number): void {
        let ql = new QLY_score(name, score);
        ql.next = this.head;
        this.head = ql;
        if (!this.tail) {
            this.tail = ql;
        }
        this.size++;
    }

    insertLast(name: string, score: number): void {

        if (!this.head) {
            this.insertFirst(name, score);
        } else {
            let ql = new QLY_score(name, score)
            this.tail.next = ql
            this.tail = ql;

        }
        this.size++;
    }

    showList(): QL_hs[] {
        let arr: QL_hs[] = [];
        let curren = this.head;
        while (curren != null) {
            arr.push(new QL_hs(curren.name, curren.score));
            curren = curren.next;

        }
        return arr;
    }

    totalStudentsFail(): void {
        let a: number = 5;
        let count = 0;
        let curren = this.head;
        while (curren != null) {
            if (curren.score <= a) {
                count++;
            }
            curren = curren.next;
        }
        console.log(`${count} la so nguoi co diem thap`)
    }

    listStudentMaxScore(): any {
        let curren = this.head;
        let arr: QL_hs[] = [];
        let scoremax = curren.score
        while (curren != null) {
            if (scoremax < curren.score) {
                scoremax = curren.score;
                arr.pop();
                arr.push(new QL_hs(curren.name, curren.score));
            } else if(scoremax === curren.score) {
                arr.push(new QL_hs(curren.name, curren.score));
            }
            curren = curren.next;

        }
        console.log(arr)

    }
    findByName(name:string):void{
        let curren=this.head;
       while (curren!=null){
           if (curren.name===name){
               console.log(`co ten la ${curren.name}va co diem la ${curren.score}`);

           }curren = curren.next;
       }

    }


}

let QLY = new QLY_Linkerlist();
QLY.insertFirst("phong", 6);
QLY.insertFirst("duy", 4);
QLY.insertLast("long", 8);
QLY.insertLast("long", 9);
QLY.insertLast("tan", 9);
console.table(QLY.showList());
QLY.listStudentMaxScore();
QLY.totalStudentsFail();
QLY.findByName("phong");
