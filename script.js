const checkMyList = document.getElementById("list")

  document.getElementById("go").onclick = function() {
    let text = document.getElementById("submission").value; 
    let list = document.createElement("li");
    list.textContent = text;
    document.getElementById("list").appendChild(list);
    document.getElementById("submission").value = "";
}

console.log(checkMyList)


document.getElementById("list").addEventListener("click",function(e) {
    const boop = e.target;
    if (boop.tagName.toUpperCase() == "LI") {
      boop.parentNode.removeChild(boop);
    }
  });