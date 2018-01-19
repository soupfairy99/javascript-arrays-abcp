var chocolateBars = ["snicker","hundred grand","kitkat","skittles"];
var array=[1];
function
addElementToBeginningOfArray(array,element)
{return [element,...array]}

addElementToBeginningOfArray("foo",array);

function
destructivelyAddElementToBeginningOfArray(array,element) {return array.unshift(element)}

destructivelyAddElementToBeginningOfArray(array,'foo');


/*

*/