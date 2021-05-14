console.log('welcome to notes');
 showTxt()
//if user add note
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesArry = [];
  let myObj = {
    title: addTitle.value,
    text: addTxt.value
  }
  console.log(notesArry)
  notesArry.push(myObj)
  notesObj.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  addTitle.value = "";
//   console.log(notesObj);
  showTxt();
});

//show data from localstorage
function showTxt() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function(element, index) {
    html += `
            <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <p class="card-text"> ${element.text}</p>
                        <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                    </div>
                </div>`;
  });
  let notesElm = document.getElementById("noteTxt");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
  }
}//remove notes
function removeNote(index){
  
localStorage.removeItem(index);
 
let notes = localStorage.getItem("notes");
if(notes == null){
    notesObj =[]
}
else{
   notesObj = JSON.parse(notes)
}
if( confirm('Are you sure ?') == false){
    notesObj[index],
    localStorage.setItem("notes" , JSON.stringify(notesObj));
}else{
notesObj.splice(index ,1 );
localStorage.setItem("notes" , JSON.stringify(notesObj));
}
showTxt()
}

//search the note  
 
 let input = document.getElementById('input');
 input.addEventListener("input" , function(){
     let inputVal = input.value;
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

//edit note
 function edit(item){
    let notes = localStorage.getItem("notes");
   //get data from localstorage
    if(notes == null){
        notesObj =[]
      }
    else{
       notesObj = JSON.parse(notes)
    }
    var edit= document.getElementById('addTxt')
    edit.value = notesObj[item];
    document.getElementById('addBtn').style.display= "none";
    document.getElementById('edit-box').style.display= "block";
    
 document.getElementById('save').addEventListener("click" , function(){
    
if(confirm('confirm') == false){
  notesObj[item];
    localStorage.setItem("notes" , JSON.stringify(notesObj));
    edit.value="";
}
else{var  task = edit.value;
    if(task){
        notesObj.splice(item,1,task);
          }
         
          localStorage.setItem("notes" , JSON.stringify(notesObj));}

  
         edit.value="";
       showTxt();
  closeEditBox()
 
   
 } 
 )
  

  
   }
   function closeEditBox(){
    document.getElementById('edit-box').style.display= "none";
    document.getElementById('addBtn').style.display= "block";

   }
   closeEditBox()   

function cancel(){
     document.getElementById('edit-box').style.display= "none";
      document.getElementById('addTxt').value="";
    
}
 
 