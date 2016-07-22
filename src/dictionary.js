// dictionary的实现
// 字典数据结构的实现

function Dictionary(){
  this.dataStore = new Array();
  this.add = add;
  this.find = find;
  this.remove = remove;
  this.showAll = showAll;
  this.count = count;
  this.clear = clear;
}

function add(key,value){
  this.dataStore[key] = value;
}

function find(key){
  return this.dataStore[key];
}

function remove(key){
  delete this.dataStore[key];
}

// 展示所有的 key-value值
// 在JS中 Array也是一个对象，
// 可以用过 key in object 去遍历这个对象，
// 并取得里面的值
function showAll(){
  // 排序后输出
  var keysArr = Object.keys(this.dataStore).sort();//通过对object的keys排序，后生成新的一个装有所有key值得数组
  for(var i=0;i<keysArr.length;i++){
    console.log(keysArr[i] + " -> "+this.dataStore[keysArr[i]]);
  }
}

// 计算dic中有多少元素的方法
function count(){
  var n = 0;
  for(var key in this.dataStore){
    ++n;
  }
  return n;
}

function clear(){
  for(var key in this.dataStore){
    delete this.dataStore[key];
  }
}


// ----------TEST-----------
var pbook = new Dictionary();
pbook.add("Mike","123");
pbook.add("David","321");
pbook.add("Cynthia","456");
console.log(pbook.count());
pbook.showAll();
console.log("David's extension:"+pbook.find("David"));
pbook.remove("David");
pbook.showAll();
console.log(pbook.count());
pbook.clear();
console.log(pbook.count());

// ------------------------
