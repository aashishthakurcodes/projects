const btn=document.getElementById("navbtn");
// const ul=document.getElementById("navul");

const newdiv=document.createElement("div");
newdiv.setAttribute('class','newdivdata')

const ul1=document.createElement("ul");
const l1=document.createElement("li");
l1.innerHTML="Home"
const l2=document.createElement("li");
l2.innerHTML="Contact Us"
const l3=document.createElement("li");
l3.innerHTML="More"


ul1.appendChild(l1);
ul1.appendChild(l2);
ul1.appendChild(l3);

console.log(ul1);

newdiv.appendChild(ul1);
console.log(newdiv);
const toggledata=document.getElementById("toggledata");
btn.addEventListener('click',function(){
    if(toggledata.style.display === 'none'){
        toggledata.append(newdiv)
        toggledata.style.display ='block';
        // console.log("if block");
        // x.append(toggledata
    }
    else{
        toggledata.style.display ='none';
    
    }
    
})
// toggledata.removeChild(newdiv)