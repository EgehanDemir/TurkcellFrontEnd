// vars

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

// call event listeners
eventListeners();
function eventListeners(){
    // submit event
    form.addEventListener("submit",addNewItem);
}
//add new item
function addNewItem(e){

    if(input.value ===""){
        alert("Add new item");
    }

    // create li
    const li = document.createElement("li");
    li.className="list-group-item";
    li.appendChild(document.createTextNode(input.value));

    // create a
    const a = document.createElement("a");
    a.className = "delete-item";     // a'ya class ekleme
    a.setAttribute("href", "#")
    a.innerHTML='<i class="fas fa-times"></i>'; // html ekleme

    // add a to li - li etiketi altına a etiketi ekleme
    li.appendChild(a);

    // add li to ul - ul etiketi içerisine li liste etiketi eklemek
    taskList.appendChild(li);  // taskList ul etiketinin id'si Yukarında tanımladık.

    // clear input 
    input.value = "";
    
    

    e.preventDefault();

}