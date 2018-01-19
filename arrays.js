var chocolateBars = ["snicker","hundred grand","kitkat","skittles"];
var array=[1];
function
addElementToBeginningOfArray(array,element)
{return [element,...array]}

addElementToBeginningOfArray("foo",array);

function
destructivelyAddElementToBeginningOfArray(array,element) {return array.unshift(element)}

destructivelyAddElementToBeginningOfArray('foo');


/*
function addElementToBeginningOfArray()
{
  var array1=[1]
  var array2=["foo",...array1]
  return array2
}
addElementToBeginningOfArray()

function destructivelyAddElementToBeginningOfArray()
{
  var ArrayDestructAdd =[1]
  return ArrayDestructAdd.push("foo")
  function 
}
/*
{
  var arrayslicelast=[1,2,3]
  return arrayslicelast.slice(0,array1.length-1)
  
}
*/