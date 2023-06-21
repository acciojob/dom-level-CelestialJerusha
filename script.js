//your JS code here. If required.
function getIdByLevel(level){
  var element = $("#level");  // 
  for (var i = 0; i < level; i++){
    element = $(element).find("li")[0]; // <- the first div in each level is being taken
  }
  return element.id;
}