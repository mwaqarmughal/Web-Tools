window.onload = function() {
  var btn = document.getElementById("mybtn");
  btn.onclick = handleAdd;
};

function handleAdd() {
  var adding = document.getElementById("adder");
  var newToDo = document.getElementById("list");
  var newTextNode = document.createTextNode(adding.value);
  var element = document.createElement("li");
  element.appendChild(newTextNode);
  newToDo.appendChild(element);
  var butt = document.createElement("button");
  var buttonNode = document.createTextNode("Delete");
  var AttributeNode = document.createAttribute("onClick");
  var btnatt = document.createAttribute("class");
  btnatt.value = "btn btn-primary";
  AttributeNode.value = "handleDelete(event)";
  butt.appendChild(buttonNode);
  butt.setAttributeNode(btnatt);
  butt.setAttributeNode(AttributeNode);
  element.appendChild(butt);
  var butt = document.createElement("button");
  var buttonNode = document.createTextNode("Edit");
  var AttributeNode = document.createAttribute("onClick");
  var btnatt = document.createAttribute("class");
  btnatt.value = "btn btn-primary";
  AttributeNode.value = "handleDelete(event)";
  butt.appendChild(buttonNode);
  butt.setAttributeNode(btnatt);
  butt.setAttributeNode(AttributeNode);
  element.appendChild(butt);
}

function handleDelete(e) {
  var tag = e.target;
  var parent = tag.parentNode;
  parent.parentNode.removeChild(parent);
}
