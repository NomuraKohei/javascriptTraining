//表示する
console.log('aiueo');

//変数の宣言をする
var test = 2;
console.log(test); 

//値を足し算する
var num1 = 1;
var num2 = 2;
var sum = num1 + num2;
console.log(sum);

//１ずつ足す
var add = 1;
add++;
console.log(add);

//文字列を連結
var name = 'yamada';
var str = 'hello, ';
console.log(str + name);

//文字と数字を連結してみる
var name = 'tanaka';
var num = 3;
console.log(name + num);

//関数を使ってみる
function sayHello(name, old) {
    console.log('Hello! ' + name);
    console.log(name + ' is ' + old);
}
sayHello('jun',23);

//無名関数を使ってみる
var bmi = function(weight, height){
    return weight / (height * height);
}
console.log(bmi(65, 1.7));
