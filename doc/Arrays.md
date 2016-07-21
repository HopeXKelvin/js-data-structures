# Arrays  
此文档主要说明JS中的Array定义和用法以及在什么情况下使用数组的什么方法比较适合  

## 声明数组的几种方法：  
- 最简单的方式是使用[]符号:  
```javascript
  var numbers = [];
  console.log(numbers.length);//0
```  
还可以在声明的时候把元素也填充到[]之中:  
```javascript
  var numbers = [1,2,3,4,5];
  console.log(numbers.length);//5
```  
- 另外一种方式是调用 数组的构造器函数:  
```javascript
  var numbers = new Array();
```  
当然也可以把数组元素一起填充进去:
```javascript
  var numbers = new Array(1,2,3,4,5);
  console.log(numbers.length);//5
```  
还可以在调用数组构造器的时候，只传入一个参数，表示要声明的数组的长度  
```javascript
  var numbers = new Array(10);
  console.log(numbers.length);//10
```  
> 需要注意的点:JS的数组，不像java或者c++中的数组，它不要求数组的元素是同一个类型的.  
我们可以通过 Array.isArray()方法来判断一个对象是否是数组  

## 通过Strings创建Arrays  
- 通过JS的字符串自带的split()方法，可以把一个字符串对象转换成一个字符串数组  
```javascript
  var sentence = "the quick brown fox jumped over the lazy dog";
  var words = sentence.split(" ");
  console.log(words);
  //["the", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]
```  

## 数组的浅复制和深复制  
- 浅复制  
```javascript
  var nums = [1,2,3,4,5,6,7,8,9];
  var sameNums = nums;
```  
- 深复制  
```javascript
  //利用一个函数方法
  function deepCopy(arr1,arr2){
    for(var i=0;i<arr1.length;i++){
      arr2[i] = arr1[i];
    }
  }
```
## 数组的可用方法  
- 查询数组中是否存在某个元素  
indexOf()方法  
该方法可以检测某个值是否存在于数组中，若存在则返回这个值在数组中的索引位置，若不存在则返回-1  
如果数组中有多个相同的值，那么返回的总是第一个在数组中出现的与此值相同的元素的索引位置  
lastIndexOf()方法  
此方法总是返回最后一个出现在数组中的元素的索引位置  

- 两个方法从Array到String:  
join()和toString()方法:  
```javascript
  var names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
  var namestr = names.join();
  console.log(namestr); // David,Cynthia,Raymond,Clayton,Mike,Jennifer
  namestr = names.toString();
  console.log(namestr); // David,Cynthia,Raymond,Clayton,Mike,Jennifer
```  

- 从已有的数组创建新数组  
有两个方法: concat()和splice():  
concat()方法允许拼接两个或多个数组变成一个新的数组  
splice()方法允许从一个已存在的数组的子集创建一个新的数组  
```javascript
  var itDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];
  var dmpDept = itDiv.splice(3,3);
  var cisDept = itDiv;
  console.log(dmpDept); // Raymond,Cynthia,Danny
  console.log(cisDept); // Mike,Clayton,Terrill,Jennifer
```
