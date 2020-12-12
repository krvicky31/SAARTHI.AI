function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function add() {
    var table = document.getElementById("employees").tBodies[0];
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(4);
    cell1.innerHTML = document.getElementById("name").value;
    cell2.innerHTML = document.getElementById("emp_id").value;
    cell3.innerHTML = document.getElementById("department").value;
    cell4.innerHTML = document.getElementById("email").value;
    cell5.innerHTML = document.getElementById("doj").value;
    cell5.innerHTML = "<form><input type=submit value='Remove' style='width:100%' onClick='delRow(this)'></form>";
    clear_input();
    closeForm();
}

function delRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    console.log(i);
    document.getElementById("employees").tBodies[0].deleteRow(i);
}

function clear_input() {
    var elements = document.getElementsByTagName("input");
    for (var ii = 0; ii < elements.length; ii++) {
        if (elements[ii].type == "text") {
            elements[ii].value = "";
        }
    }
}