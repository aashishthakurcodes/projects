const btn=document.getElementById("navbtn");
const ul=document.getElementById("navul");
const toggledata=document.getElementById("toggledata");
const newdiv=document.createElement("div");
newdiv.appendChild(ul)
toggledata.appendChild(newdiv)



btn.addEventListener('click',function(){
    if(newdiv.style.display === 'none'){
        newdiv.style.display ='block';
        console.log("if block");
    }
    else{
        newdiv.style.display ='none';
        console.log("else block");

    }
})