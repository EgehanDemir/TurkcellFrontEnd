// vars

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

// call event listeners
eventListeners();
function eventListeners() {
  // submit event
  form.addEventListener("submit", addNewItem);

  // delete an item
  taskList.addEventListener("click", deleteItem);

  // delete all items
  btnDeleteAll.addEventListener("click", deleteAllItems);
}

//add new item
function addNewItem(e) {
  if (input.value === "") {
    alert("Add new item");
  }

  // create li
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(input.value));

  // create a
  const a = document.createElement("a");
  a.className = "delete-item"; // a'ya class ekleme
  a.setAttribute("href", "#");
  a.innerHTML = '<i class="fas fa-times"></i>'; // html ekleme

  // add a to li - li etiketi altına a etiketi ekleme
  li.appendChild(a);

  // add li to ul - ul etiketi içerisine li liste etiketi eklemek
  taskList.appendChild(li); // taskList ul etiketinin id'si Yukarında tanımladık.

  // clear input
  input.value = "";

  e.preventDefault();
}

// delete an item
function deleteItem(e) {
  // console.log(e.target);
  if(confirm("are you sure ??")){
    if (e.target.className === "fas fa-times") {
        e.target.parentElement.parentElement.remove(); // 2 üst elemente çıkıp kaldırma işlemi yaptık
      
    }
  }  // silme onayı
  

  e.preventDefault();
}

// delete all items
function deleteAllItems(e) {
  if (confirm("are you serious ???!!!")) {
    /*   taskList.innerHTML=""; // ul listesi direk silinir */
    taskList.childNodes.forEach(function (item) {
      /* childNodes yaptığımızda foreach metodunuı kullanabiliriz. */ 
      if (item.nodeType === 1){
        /* nodeType = 1 bunun element olduğunu gösterir. NodeType araştır.!!!  */
        // console.log(item);
        item.remove();
      }
    });
  }

  e.preventDefault();
}
