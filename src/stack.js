//栈的实现

function Stack(){
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(element){
  this.dataStore[this.top++] = element;
}

function pop(){
  return this.dataStore[--this.top];
}

// peek方法返回栈顶元素
//若栈是空栈，那么返回的将是 undefined
function peek(){
  return this.dataStore[this.top - 1];
}

// length方法返回栈中的元素个数
function length(){
  return this.top;
}

// clear方法
function clear(){
  this.top = 0;
}


// -----------------------------TEST------------------

// test-1
var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length of stack:"+s.length());
console.log(s.peek());
var popped = s.pop();
console.log("The popped element is :"+popped);
console.log(s.peek());
s.push("Cynthis");
console.log(s.peek());

// test-2 数制转换(将一个十进制数转换为以2-9为基的数字)
function mulBase(num,base){
  var s = new Stack();
  do{
    s.push(num%base);
    num = Math.floor(num/=base);
  }while(num>0);
  var converted = "";
  while(s.length() > 0){
    converted += s.pop();
  }
  return converted;
}

//测试 10进制转2进制
var num = 32;
var base = 2;
var newNum = mulBase(num,base);
console.log(num + " converted to base " + base + " is " + newNum);

num = 120;
base = 8;
var newNum2 = mulBase(num,base);
console.log(num + " converted to base " + base + " is " + newNum2);

// test-3 关于回文(palindromes)
// 回文即顺着，逆着读都一样的单词。数字
// 我们可以利用stack结构，判断一个字符串是否为 回文
function isPalindrome(word){
  var s = new Stack();
  for(var i=0;i<word.length;i++){
    s.push(word[i]);
  }
  var rword = "";
  while (s.length()>0) {
    rword += s.pop();
  }
  if(word == rword){
    return true;
  }else{
    return false;
  }
}

var word = "hello";
if(isPalindrome(word)){
  console.log(word + " is a palindromes");
}else{
  console.log(word + " is not a palindromes");
}

word = "racecar";
if(isPalindrome(word)){
  console.log(word + " is a palindromes");
}else{
  console.log(word + " is not a palindromes");
}

// test-4 栈结构可以实现递归的算法
// 用栈实现阶乘的方法
function fact(n){
  var s = new Stack();
  while (n >1) {
    s.push(n--);
  }
  var product = 1;
  while (s.length()>0) {
    product *= s.pop();
  }
  return product;
}

// 递归是这么实现的:
function factorial(n){
  if(n === 0){
    return 1;
  }else{
    return n*factorial(n-1);
  }
}

console.log(factorial(5));
console.log(fact(5));

// ----------------------------TEST------------------
