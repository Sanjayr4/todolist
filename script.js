let Btn = document.getElementById('Btn');
let ToDo =
document.getElementById('ToBeDone');let Item =
document.getElementById('Textbox');
function Clicked() 
{
var List =
document.createElement('li');
List.innerText=Item.value;
ToDo.appendChild(List);
Item.value= ""
ToDo.style.display="flex";
}
