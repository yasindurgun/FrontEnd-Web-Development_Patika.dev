const TEXTDOM = document.getElementById("task");
const ULDOM = document.querySelector("ul#list");

let mainList= new Array();
//Is there any defined local storage?
if(localStorage.getItem('todolist') == null)
{
  //Create local storage with empty array JSON.stringify using save data to localstorage as object array
  localStorage.setItem('todolist',JSON.stringify(mainList));
}
else
{
  //pull data from localstorage JSON.parse using pull object data from localstorage to local variable
  mainList = JSON.parse(localStorage.getItem('todolist'));
  //Show saved list
  showList();
}

//Button on click func
function newElement(){
  if(isInvalid(TEXTDOM.value))
  {
    addToList(TEXTDOM.value);
  }
  else
  {
    $(document).ready(function(){
      $('#attentionToast').toast('show')
    });
    TEXTDOM.value="";
  }
}
function addToList(taskName){
  //Add to list
  mainList.push(String(taskName));
  console.log(mainList);
  //Save array to localstorage
  localStorage.setItem('todolist',JSON.stringify(mainList));
  //Show task list
  showList();
  //Push toast 
  $(document).ready(function(){
    $('#successToast').toast('show')
  });
  //Clear the textbox
  TEXTDOM.value="";
}
function deleteItem(index){
  mainList.splice(index,1);
  localStorage.setItem('todolist',JSON.stringify(mainList));
  showList();
   //Push toast 
   $(document).ready(function(){
    $('#deleteItemToast').toast('show')
  });
}
function showList(){
  //Clear list
  ULDOM.innerHTML = "";
  //task is a name belongs we added as string form
  //key is a number depends index in array
  mainList.forEach((task, key) => { 

    //Create Li Element
    let liDOM = document.createElement('li');
    //Done Button Added
    liDOM.addEventListener("click",taskDone);
    //Standardized list element
    liDOM.innerHTML = `${task}<span id="closeButton" class="deleteButton" onclick=deleteItem(${key})><i class="fas fa-trash"></i></span>`;
    
    //Add Element to UL
    ULDOM.append(liDOM);

   });

}
function isInvalid(task){
  let res = task.trim() ? true : false;
  return res;
}
function taskDone(){
  //Change with boostrap succes style
  this.classList.toggle("bg-success");
}