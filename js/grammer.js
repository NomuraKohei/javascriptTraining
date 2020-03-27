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
var greeeeed = 'hello, ';
console.log(greeeeed + name);

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

//グローバル変数とローカル変数（スコープ）
var global_var = 'aiu';

var func = function(){
    var global_var = 'eo';
    return global_var;
}

console.log(global_var);
console.log(func());


//即時実行される関数で、グローバル変数を利用することを防ぐ
(function(){
    var sokuji = '即時';
    console.log(sokuji);
})();

(function(){
    var sokuji = '実行';
    console.log(sokuji);
})();

//みんな最初に通るif文
var num = 'あ';

var judge_even = function(num){
    if(num % 2 === 0){
        console.log(num);
    } else if(num % 2 === 1) {
        console.log('この数字は奇数');
    } else {
        console.log('本当に数字？？')
    }
}

judge_even(num);

//みんな次に行うswitch文
var fish_name = 'ひめます';

switch(fish_name){
    case 'うぐい':
        console.log('繁殖期は赤い');
        break;
    case 'いわな':
        console.log('クールなボディ');
        break;
    default:
        console.log('うぐいといわな以外は魚と認めない');
}

//デフォルト値の設定
var fish_body = function(part){
    var fish_part = part || 'ヒレ';
    console.log('魚には' + fish_part + 'がある');
}
fish_body('口');
fish_body();

//配列を使ってみる
var alphabet = ['d', 'e', 'f'];

alphabet.push('g'); //cを後方に追加
console.log(alphabet);

var cut = alphabet.slice(1, 3); //1~3をカット！
console.log(cut);

//多次元配列をfor文で出力
var x = [
    [1, 0, 2],
    [0, 3, 0],
    [4, 0, 5]
];

for(i = 0; i < 3; i++){
    for(j = 0; j < 3; j++){
        console.log(x[i][j]);
    }
}

//THE オブジェクト↓↓
var fish = {
    name: 'iwana',
    feature: 'いい感じ'
};

for(key in fish){
    console.log(fish[key]);
}
console.log(fish.name + 'って' + fish.feature);

//オブジェクト指向　メソッド
var cat = {
    name: 'にゃんた',
    shape: '液体',
    language: function() {
        console.log('meow script');
    }
};

cat.language();

//thisとは？
var fn = function(){
    console.log(this);
};

fn();

//コンストラクタとインスタンス
var AnimalColor = function(color){
    this.color = color;
    this.description = function(){
        console.log(this.color + '色の動物');
    }
};

var toyota = new AnimalColor('茶');
toyota.description();

//上のCarを継承
var Animals = function(color, species){
    this.color = color;
    this.species = species;
};

Animals.prototype = new AnimalColor();
var animal = new Animals('銀', '魚');

animal.description();
console.log('は' + animal.species);
