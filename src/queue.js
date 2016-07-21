//加载需要的模块
var fs = require("fs");
//队列的实现Queue

function Queue(){
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this.empty = empty;
  this.count = count;
}

function enqueue(element){
  this.dataStore.push(element);
}

function dequeue(element){
  return this.dataStore.shift();
}

function front(){
  return this.dataStore[0];
}

function back(){
  return this.dataStore[this.dataStore.length - 1];
}

function toString(){
  var retStr = "";
  for(var i=0;i<this.dataStore.length;i++){
    retStr += this.dataStore[i] + "\n";
  }
  return retStr;
}

function empty(){
  if(this.dataStore.length == 0){
    return true;
  }else{
    return false;
  }
}

function count(){
  return this.dataStore.length;
}


// ----------TEST----------
// test1
var q = new Queue();
q.enqueue("Meredith")
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue "+q.front());
console.log("Back of queue "+q.back());

// test2
// squre dance
// 每一个舞者都存放在一个Dancer对象中
function Dancer(name,sex){
  this.name = name;
  this.sex = sex;
}
// 下一步，需要一个方法去加载txt文件中的数据到程序中来
function getDancers(males,females){
  var datas = fs.readFileSync("datas/dance.txt","utf-8");
  var names = datas.split("\n");
  for(var i=0;i<names.length;i++){
    names[i] = names[i].trim();
  }
  for(var i=0;i<names.length;i++){
    var dancer = names[i].split(" ");
    var sex = dancer[0];
    var name = dancer[1];
    if(sex == "F"){
      females.enqueue(new Dancer(name,sex));
    }else{
      males.enqueue(new Dancer(name,sex));
    }
  }
}

// 匹配男女舞者
function dance(males,females){
  console.log("The dance partners are: \n");
  while (!females.empty() && !males.empty()) {
    person = females.dequeue();
    console.log("Female dancer is: "+person.name);
    person = males.dequeue();
    console.log(" and the male dancer is: "+person.name);
  }
}

// 测试
var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers,femaleDancers);
dance(maleDancers,femaleDancers);

if(maleDancers.count()>0){
  console.log("There are " + maleDancers.count()+" male dancers waiting to dance.");
}
if(femaleDancers.count()>0){
  console.log("There are " + femaleDancers.count()+" female dancers waiting to dance.");
}

// 利用队列结构实现基数排序(radix sort)

// 分组
function distribute(nums,queues,n,digit){
  for(var i=0;i<n;i++){
    if(digit == 1){
      queues[nums[i]%10].enqueue(nums[i]);
    }else{
      queues[Math.floor(nums[i]/10)].enqueue(nums[i]);
    }
  }
}
// 收集
function collect(queues,nums){
  var i = 0;
  for(var digit=0;digit<10;++digit){
    while (!queues[digit].empty()) {
      nums[i++] = queues[digit].dequeue();
    }
  }
}

function dispArray(arr){
  for(var i=0;i<arr.length;i++){
    console.log(arr[i]+" ");
  }
}

// main test
var queues = [];
for(var i=0;i<10;i++){
  queues[i] = new Queue();
}

var nums = [];
for(var i=0;i<10;i++){
  nums[i] = Math.floor(Math.floor(Math.random()*101));
}

console.log("Before radix sort: ");
dispArray(nums)
distribute(nums,queues,10,1);
collect(queues,nums)
distribute(nums,queues,10,10);
collect(queues,nums);
console.log("\n\nAfter radix sort : ");
dispArray(nums)


// Priority Queues 优先队列
function Patient(name,code){
  this.name = name;
  this.code = code;
}

// 重新定义的dequeue方法
function dequeue(){
  var priority = this.dataStore[0].code;
  for(var i=1;i<this.dataStore.length;++i){
    if(this.dataStore[i].code < priority){
      priority = i;
    }
  }
  return this.dataStore.splice(priority,1);
}

// ------------------------
