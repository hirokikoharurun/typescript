let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;

let single: string = 'hello';

const person = {
    name: {
        first: 'Jack',
        last : 'Smith'
    },
    age: 21
}

//stringとnumberの配列
const fruits: (String| number)[] = [
    'Apple', 'Banana', 'Frape', 4
]

//Tuple型 配列の型の中身を決める
const book: [string, number, boolean] = [ 'business', 1500, false ]

//Enum型　厳格な型を作れるもの
enum CoffeeSize {
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE'
}

const coffee = {
    hot: true,
    size: CoffeeSize.TALL
}

//any型　なんでも入る
let anything = true;