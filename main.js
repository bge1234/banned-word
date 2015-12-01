function checkBanned(banned, list) {
  var newList = [];
  for (var i = 0; i < list.length; i++) {
    if (list[i] != banned)
      newList.push(list[i]);
  }
  return newList;
};
