function addListItem(){
    var ul = document.getElementById('lista');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode("elemento " + (ul.childElementCount + 1)));
    ul.appendChild(li);
}