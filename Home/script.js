const btn=document.getElementById("navbtn");
// const ul=document.getElementById("navul");

const newdiv=document.createElement("div");
newdiv.setAttribute('class','newdivdata')

const ul1=document.createElement("ul");
ul1.setAttribute("class","ul1")

const l1=document.createElement("li");
const anchor=document.createElement("a");
anchor.innerHTML = 'Home';
anchor.href = '';
l1.appendChild(anchor)


const l2=document.createElement("li");
const anchor2=document.createElement("a");
anchor2.innerHTML = 'About';
anchor2.href = '../About/index.html';
l1.appendChild(anchor2);


const l3=document.createElement("li");
const anchor3=document.createElement("a");
anchor3.innerHTML = 'Contact';
anchor3.href = '../Contact/index.html';
l1.appendChild(anchor3)


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


