function checkBanned(bannedWord, oldList) {
  var newList = [];
  for (var i = 0; i < oldList.length; i++) {
    if (oldList[i] != bannedWord)
      newList.push(oldList[i]);
  }
  return newList;
};

function checkWord(bannedWord, listElement) {
  if (listElement != bannedWord)
    return true;
  else
    return false;
};

//Use checkWord as callback function
function checkBannedHigherOrder(bannedWord, oldList, callback) {
  var newList =[];
  for (var i =0; i < oldList.length; i++) {
  if (callback(bannedWord, oldList[i]))
    newList.push(oldList[i]);
  }
  return newList;
};
