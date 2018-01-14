var chocolateBars = ["snicker","hundred grand","kitkat","skittles"];
function destructivelyAddElementToBeginningOfArray() {var firstArray = [1]; firstArray.push('foo');return firstArray}
function addElementToBeginningOfArray(){var secondArray = [1]; secondArrayplus=['foo',...secondArray];return secondArrayplus}
function destructivelyAddElementToEndOfArray() {var fourthArray = [1]; fourthArray.unshift('foo');return fourthArray}
function addElementToEndOfArray(){var thirdArray = [1]; thirdArrayplus=[...thirdArray,'foo'];return thirdArrayplus}
function accessElementInArray(){var sixArray=[1,2,3]; return sixArray[2];}
function destructivelyRemoveElementFromBeginningOfArray(){const months = [1,2,3]; months.shift; return months;}
  function removeElementFromBeginningOfArray() {var eightArray = [1,2,3]; eightArray.slice(1); return eightArray}
function   destructivelyRemoveElementFromEndOfArray(){var nineArray = [1,2,3];eightArray.pop; return eightArray;}
function removeElementFromEndOfArray(){var tenArray = [1,2,3]; tenArray.slice(0,tenArray.length - 1);return tenArray}