var globalId = 0,globalId1 = 0,globalId2 = 0;
var deletItem = document.getElementsByClassName("deletbtn");
var moreItem = document.getElementsByClassName("addbtn");
let allCards=[];
let deletedCards=[];
var curopen;
var finalModal;


// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


function openModal(){
  modal.style.display = "block";
}

document.getElementById("closeItem").addEventListener('click',()=>{
  modal.style.display = "none";
})

function validation(e){
    for(let i=1; i<=globalId; i++){
        if(e.id==("delete"+i)){
            delEvent(e)
            break;
        }
    }
    for(let i=1; i<=globalId; i++){
        if(e.id==("more"+i)){
            addEvent(e)
            break;
        }
    }
    for(let i=1; i<=globalId; i++){
        if(e.id==("toptext"+i)){
            newModal(e)
            break;
        }
    }
    for(let i=1; i<=globalId1; i++){
        if(e.id==("bttn"+i)){
            markDone(e)
            break;
        }
    }
    for(let i=1; i<=globalId2; i++){
        if(e.id==("backk"+i)){
            back(e)
            break;
        }
    }
}

document.addEventListener('click',()=>{
    validation(event.target)
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById("addItem").addEventListener('click',()=>{
  let valueInsideInput = document.getElementById("val").value;
  globalId++;
  var card = `<div id="item${globalId}" class="card">
        <p class="toptext" id="toptext${globalId}" >${valueInsideInput}</p>
        <hr>
        <div id="maincontent${globalId}" class="maincontent" style="overflow: auto;">
            
        </div> 
        <div class="buttons" >
            <span class="contbtns"></span>
                <button class="insidebtn deletbtn"  id="delete${globalId}" >Delete</button>
                <button class="insidebtn addbtn" id="more${globalId}">Add More</button>
            </span>
        </div>
    </div>`;
  document.getElementById("items").innerHTML += card;
  modal.style.display = "none";
  document.getElementById("val").value = "";
  allCards.push(globalId);
})

function delEvent(e) {
  e.parentNode.parentNode.style.display = "none";
  deletedCards.push(e.parentNode.parentNode.id[4]);
}

function addEvent(e) {
  modal1.style.display = "block";
  curopen = e;
}

document.getElementById("addInside").addEventListener('click',()=>{
  globalId1++;
  let inputValue = document.getElementById("val1").value;
  let p = curopen.parentNode.parentNode.childNodes[5].id;
  var cardd = `<div id="dd${globalId1}" style="background-color:white;">
  <span id="text${globalId1}" style="background-color:white;">${inputValue}</span>
  <span style="background-color:white;">
  &nbsp;&nbsp;<button style="background-color: rgb(90, 80, 240); 
  color:white; border: none;" 
  id='bttn${globalId1}'
  >Mark Done</button></span><br>
  </div>`;
  document.getElementById(p).innerHTML += cardd;
  modal1.style.display = "none";
  document.getElementById("val1").value="";
})

document.getElementById("closeInside").addEventListener('click',()=>{
  modal1.style.display = "none";
})

function markDone(e) {
  let taskToBeDone = e.parentNode.parentNode.childNodes[1].id;
  document.getElementById(taskToBeDone).style.textDecoration = "line-through";
  let markButton = e.parentNode.parentNode.childNodes[3].childNodes[1].id;
  document.getElementById(markButton).style.display = "none";
}

function newModal(e) {
  globalId2++;
  document.getElementById("task").style.display = "none";
  document.getElementById("list").style.display = "none";
  document.getElementById("myBtn").style.display = "none";
  let itemIndex = e.parentNode.id;
  let itemValue = "";
  var but = `<button id="backk${globalId2}" style="background-color: rgb(90, 80, 240); 
  width:150px; height:50px; font-size:20px; color:white; position: relative; top:-10px;">Go Back</button>`;
  bb.innerHTML += but;
  for (let i = 4; i < itemIndex.length; i++) {
    itemValue += itemIndex[i];
  }
  let cardNumber = parseInt(itemValue);
  for (let i = 1; i <= globalId; i++) {
    if (i != cardNumber) {
      allCards.push(i);
      let actualCard = "item";
      actualCard += i;
      document.getElementById(actualCard).style.display = "none";
    }
  }
}

function back(e) {
  document.getElementById("task").style.display = "inline-block";
  document.getElementById("list").style.display = "inline-block";
  document.getElementById("myBtn").style.display = "block";
  document.getElementById(e.id).style.display = "none";
  let newAllCards=[]
  for(let i = 0; i < allCards.length; i++){
    let f=true;
    for(let j=0; j<deletedCards.length; j++){
      if(allCards[i]==deletedCards[j]){
        f=false; break;
      }
    }
    if(f==true){
      newAllCards.push(allCards[i]);
      let actualCard = "item";
      actualCard += allCards[i];
      document.getElementById(actualCard).style.display = "block";
    }
  }
  allCards=newAllCards;
}