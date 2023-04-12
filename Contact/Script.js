const btn = document.getElementById("navbtn");
const toggledata = document.getElementById("toggledata");
btn.addEventListener("click", function () {
  if (toggledata.children.length === 0) {
    const newdiv = document.createElement("div");
    newdiv.setAttribute("class", "newdivdata");
    
    const ul1 = document.createElement("ul");
    ul1.setAttribute("class", "ul1");
    
    const l1 = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.innerHTML = "Home";
    anchor.href = "../index.html";
    l1.appendChild(anchor);
    
    const l2 = document.createElement("li");
    const anchor2 = document.createElement("a");
    anchor2.innerHTML = "About";
    anchor2.href = "../About/index.html";
    l2.appendChild(anchor2);
    
    const l3 = document.createElement("li");
    const anchor3 = document.createElement("a");
    anchor3.innerHTML = "Contact";
    anchor3.href = " ";
    l3.appendChild(anchor3);
    
    ul1.appendChild(l1);
    ul1.appendChild(l2);
    ul1.appendChild(l3);
    newdiv.appendChild(ul1);
    toggledata.append(newdiv)
} else if (toggledata.style.display === "none") {
    toggledata.style.display = "block";
  } else {
    toggledata.style.display = "none";
  }
});
