function checkBanned(bannedWord, oldList) {
  var newList = [];
  for (var i = 0; i < oldList.length; i++) {
    if (oldList[i] != bannedWord)
      newList.push(oldList[i]);
  }
  return newList;
};
