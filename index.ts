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

//Union型 数字も文字列もいれたい時に使う
let unionType: number | string = 10;

//Literal型 特定の値のみを扱う
const apple: 'apple' = 'apple';

function add( num1: number,num2:number ):number{
    return num1 + num2;
}

add(2,3);

function sayHello(){
    console.log('hello!');
}

const doubleNumber = ( number: number ):number => number * 2 ;

