//加载需要的模块
var fs = require("fs");

//List类的实现

//构造函数
function List(){
  this.listSize = 0;
  this.pos = 0;
  this.dataStore = [];//初始化一个空的数组用来存放list元素
  this.clear = clear;
  this.find = find;
  this.toString = toString;
  this.insert = insert;
  this.append = append;
  this.remove = remove;
  this.front = front;
  this.end = end;
  this.prev = prev;
  this.next = next;
  this.length = length;
  this.currPos = currPos;
  this.moveTo = moveTo;
  this.getElement = getElement;
  this.contains = contains;
}

function append(element){
  this.dataStore[this.listSize++] = element;//元素添加之后，listSize自增加1
}

function find(element){
  for(var i=0;i<this.dataStore.length;i++){
    if(this.dataStore[i] == element){
      return i;
    }
  }
  return -1;
}

function remove(element){
  var foundAt = this.find(element);
  if(foundAt>-1){
    this.dataStore.splice(foundAt,1);
    --this.listSize;
    return true;
  }
  return false;
}

function length(){
  return this.listSize;
}

function toString(){
  return this.dataStore;
}

function insert(element,after){
  var insertPos = this.find(after);
  if(insertPos>-1){
    this.dataStore.splice(insertPos+1,0,element);//数组的splice()方法很巧妙
    ++this.listSize;
    return true;
  }
  return false;
}

function clear(){
  delete this.dataStore;
  this.dataStore = [];
  this.listSize = this.pos = 0;
}

//判断某个元素是否存在于list中
function contains(element){
  for(var i=0;i<this.dataStore.length;i++){
    if(this.dataStore[i] == element){
      return true;
    }
  }
  return false;
}

//下面是一些遍历list的方法

//将当前指针指向list的第一个位置
function front(){
  this.pos = 0;
}

//
function end(){
  this.pos = this.listSize-1;
}

function prev(){
  if(this.pos > 0){
    --this.pos;
  }
}

function next(){
  if(this.pos < this.listSize){
    ++this.pos;
  }
}

function currPos(){
  return this.pos;
}

function moveTo(position){
  this.pos = position;
}

function getElement(){
  return this.dataStore[this.pos];
}

//-----------------------------------//
// test-1
// var names = new List();
//
// names.append("Judy");
// names.append("Kelvin");
// console.log(names.toString());
// names.remove("Kelvin");
// console.log(names.toString());
//
// // test-2
// var names2 = new List();
// names2.append("Zhang");
// names2.append("Judy");
// names2.append("Hope");
// names2.append("Kelvin");
// names2.append("Danny");
// names2.append("Clayton");
//
// names2.front();
// console.log(names2.getElement());
//
// names2.next();
// console.log(names2.getElement());
//
// names2.next();
// names2.next();
// names2.prev();
// console.log(names2.getElement());

// test-3
function createArr(filePath){
  var data = fs.readFileSync(filePath,"utf-8");
  var arr = data.split("\n");
  for(var i=0;i<arr.length;i++){
    arr[i] = arr[i].trim();
  }
  return arr;
}

function Customer(name,movie){
  this.name = name;
  this.movie = movie;
}

function displayList(list){
  for(list.front();list.currPos() < list.length();list.next()){
    if(list.getElement() instanceof Customer){
      console.log(list.getElement()["name"]+", "+list.getElement()["movie"]);
    }else{
      console.log(list.getElement());
    }
  }
}


function checkOut(name,movie,filmList,customerList){
  if(filmList.contains(movie)){
    var c = new Customer(name,movie);
    customerList.append(c);
    filmList.remove(movie);
  }else{
    console.log(movie+" is not available.");
  }
}

var path = "datas/films.txt";
var movies = createArr(path);
// 利用List这个数据结构
var movieList = new List();
var customer = new List();
for(var i=0;i<movies.length;i++){
  movieList.append(movies[i]);
}
console.log("Available movies: \n");
displayList(movieList);
checkOut("Jane Doe","The Godfather",movieList,customer);
checkOut("Zhang Judy","The Godfather",movieList,customer);
checkOut("Zhang Judy","City of God",movieList,customer);

console.log("\n Customer Rentals: \n");
displayList(customer);


//----------------------------------//
