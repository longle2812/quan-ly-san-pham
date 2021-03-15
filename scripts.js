document.getElementById("button").addEventListener("click", addItems);
let list = [];
let index = 0;
function addItems () {
    let item = document.getElementById("input").value;
    list [index] = item;
    index++;
    displayOutput(list.length);
    alert("Add Item Succesfully");
}

function edit(i) {
    let change = prompt("Please enter new name");
    list[i] = change;
    displayOutput(list.length);
    alert("Edit Item Succesfully");

}

function del(i) {
    list.splice(i, 1);
    displayOutput(list.length);
    alert ("Delete Item Succesfully");
}

function displayOutput (length) {
    let output = "<h2> Display all product</h2> <table> <tr> <td class='td'> Product name </td> </tr>"
    for (i = 0; i < length; i++) {
        output += "<tr>";
        output += "<td>" +list[i]+ "</td>";
        output += "<td> <button class ='editButton' type='button' id='edit' onclick='edit(" +i+ " )'> edit</button> </td>"
        output += "<td> <button class='delButton' type='button' id='delete' onclick='del(" +i+ " )'> delete </button> </td>"
        output += "</tr>"
    }
    output += "</table>";
    document.getElementById("output").innerHTML = output;
}
