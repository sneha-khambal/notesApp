//welcome to note app
//function showing data on page load
showNote()

//getting html element
let addBtn = document.getElementById('addBtn');
let addTxt = document.getElementById('addTxt');
let title = document.getElementById('title');
 //addEventListner to addbBtn to add note
addBtn.addEventListener("click",getNotes);
//funtion to add note
 function getNotes(){
 
  let notes= localStorage.getItem("note");
   if(notes == null){
       notesArray = []; 
    }
   else{
       notesArray = JSON.parse(notes); 
    }

    notesArray.unshift(addTxt.value);
   console.log(notesArray);
   localStorage.setItem("note" , JSON.stringify(notesArray));
   addTxt.value = "";
   showNote()
}
//show note on html page
function showNote(){
    let notes= localStorage.getItem("note");
   if(notes == null){
       notesArray = [];
   }
   else{
       notesArray = JSON.parse(notes);
   }
   let html ='';
notesArray.forEach((element , index )=> {
    html +=`
   <div class="noteCard my-3 mx-3 card" style="width: 18rem;  ">
   <button  onclick="deleteNote(${index})" class="btn p-2 mt-2"  style="margin-left:90%; margin-top:0;margin-bottom:0;text-align:center">x</button>
  <div class="card-body">
   <h5 class="card-title">${index +1 }</h5>
    <p class="card-text"style="overflow:hidden"> ${element}</p>
   </div>
   <button id="${index}" onclick="editNote(this.id)" class="btn btn-dark my-2" style="width:100% ; margin-bottom:0;" >edit</button>
 </div>
   `});
  let notesElm = document.getElementById("noteTxt");
   if (notesArray.length != 0) {
     notesElm.innerHTML = html;
   } else {
     notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
   }
}
//function to edit note
function editNote(index){
   let notes= localStorage.getItem("note");
    if(notes == null){
        notesArray = [];
    }
    else{
        notesArray = JSON.parse(notes);
    }
  addTxt.value= notesArray[index];
    document.getElementById('addBtn').style.display= "none";
    document.getElementById('edit-box').style.display= "block";
    document.getElementById('save').addEventListener("click" , function(){
if(confirm('confirm') == false){
  notesArray[index]
    localStorage.setItem("note" , JSON.stringify(notesArray));
    addTxt.value="";
}
else{var  task = addTxt.value;
     notesArray.splice(index,1,task);
        
        localStorage.setItem("note" , JSON.stringify(notesArray));
        addTxt.value="";
    } 
    showNote();
  closeEditBox()
 })}
 //function to hide when ading note and show while editing.
   function closeEditBox(){
    document.getElementById('edit-box').style.display= "none";
    document.getElementById('addBtn').style.display= "block";
}
 closeEditBox()   
 //function to cancel editing.
function cancel(){
     document.getElementById('edit-box').style.display= "none";
      document.getElementById('addTxt').value="";
 }
 //function to delete note.
function deleteNote(index){
    console.log('delete note')
    localStorage.removeItem(index)
    let notes= localStorage.getItem("note");
   if(notes == null){
       notesArray = [];
   }
   else{
       notesArray = JSON.parse(notes);
   }
 if(confirm("are you sure ?") == false){
     notesArray[index];
     localStorage.setItem("note", JSON.stringify(notesArray));
     console.log("unchanged")
 }else{
     notesArray.splice(index,1)
     localStorage.setItem("note", JSON.stringify(notesArray));
     console.log('delte')
 }
 showNote()
}
//search note
 let input = document.getElementById('input');
 //addEventListner to search inputbox to find matching note  
 input.addEventListener("input" , function(){
     let inputVal = input.value ;
     console.log('input value' , inputVal);
     let card = document.getElementsByClassName('row');
     Array.from(card).forEach(function(ele){
         let cardEle =ele.innerText;
         if(cardEle.includes(inputVal)){
             ele.style.display = "block"
         } 
         else{
            ele.style.display = "none"
         }})});