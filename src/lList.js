// 链表的实现
// Linked list

// The node class
function Node(element){
  this.element = element;
  this.next = null;
}

// Linked list类
function LList(){
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.findPrevious = findPrevious;
  this.remove = remove;
  this.display = display;
}

// 插入新的节点
// 在某个节点后面插入新的节点之前需要先找到插入的位置
function find(item){
  var currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}

function insert(newElement,item){
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.netx;
  current.next = newNode;
}

// remove
function findPrevious(item){
  var currNode = this.head;
  while (!(currNode.next == null) && (currNode.next.element != item)) {
    currNode = currNode.next;
  }
  return currNode;
}

function remove(item){
  var prevNode = this.findPrevious(item);
  if(!(prevNode.next == null)){
    prevNode.next = prevNode.next.next;
  }
}

function display(){
  var currNode = this.head;
  while (!(currNode.next == null)) {
    console.log(currNode.next.element);
    currNode = currNode.next;
  }
}

// 还有双向链表和循环链表的代码没有写进来

// ---------TEST----------
// test1
var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();

// -----------------------
