showNote()

let addBtn = document.getElementById('addBtn');
let addTxt = document.getElementById('addTxt');
let title = document.getElementById('title');
 
let d = new Date();
let currentMonth = ['Jan','feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec'];
let day = d.getDate();
let month = currentMonth[d.getMonth()];
let year = d.getFullYear();
let hour = d.getHours();
let Min = d.getMinutes();
let time = `${day}.${month}.${year}.${hour}:${Min}`  

console.log(time)
addBtn.addEventListener("click",getNotes);

function getNotes(){
   let notes= localStorage.getItem("note");
   if(notes == null){
       notesArray = [];
   }
   else{
       notesArray = JSON.parse(notes);
   }
  
   notesArray.unshift(addTxt.value);
   console.log(notesArray)
   localStorage.setItem("note" , JSON.stringify(notesArray));
   addTxt.value = "";
   
   showNote()
}

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
 
   
 } 
 ) }
   function closeEditBox(){
    document.getElementById('edit-box').style.display= "none";
    document.getElementById('addBtn').style.display= "block";

   }
   closeEditBox()   

function cancel(){
     document.getElementById('edit-box').style.display= "none";
      document.getElementById('addTxt').value="";
    
}
 
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


let input = document.getElementById('input');
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
         }
     })
 });