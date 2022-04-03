document.getElementById("alert").style.display = "none";
let count = 0;
document.getElementById("button").addEventListener("click", function () {
  let input = document.getElementById("input").value;
  console.log("input", input);
  if (input == "") {
    document.getElementById("alert").style.display = "inline-block";
  } else {
    document.getElementById("alert").style.display = "none";
    let ul = document.getElementById("list");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input));
    count++;
    if (count % 3 === 0) li.style.color = "rgba(255, 0, 0, 0.63)";
    ul.appendChild(li);

    document.getElementById("input").value = "";
  }
});
