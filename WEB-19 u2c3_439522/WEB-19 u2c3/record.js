// fill in javascript code here

var form1 = document.querySelector("form");
form1.addEventListener("submit", function () {
    getData();
})
var arr = [];
function getData() {
    event.preventDefault();
    var name1 = document.getElementById("name1").value;
    var employeeID = document.getElementById("employeeID").value;
    var department = document.getElementById("department").value;
    var exp = document.getElementById("exp").value;
    var email = document.getElementById("email").value;
    var mb = document.getElementById("mbl").value;
    var obj = {
        name: name1,
        employeeID: employeeID,
        department: department,
        exp: exp,
        email: email,
        mobile: mb,
    }

    arr.push(obj);
    console.log(arr);

    displayData();

}

function displayData() {
    console.log("display", arr);
    var tbody = document.querySelector("tbody");
    tbody.innerHTML = null;

    arr.forEach(function (ele, i) {
        var tr1 = document.createElement("tr");
        var tdName = document.createElement("td");
        tdName.innerText = ele.name;
        var tdEmpid = document.createElement("td");
        tdEmpid.innerText = ele.employeeID
        var tdDep = document.createElement("td");
        tdDep.innerText = ele.department
        var tdExp = document.createElement("td");
        tdExp.innerText = ele.exp
        var tdEmail = document.createElement("td");
        tdEmail.innerText = ele.email
        var tdMob = document.createElement("td");
        tdMob.innerText = ele.mobile
        var tdRole = document.createElement("td");
        if (ele.exp > 5) {
            tdRole.innerText = "Senoir";
        }
        else if (ele.exp < 5 && ele.exp > 2) {
            tdRole.innerText = "Junior";
        } else {
            tdRole.innerText = "Fresher";
        }
        var btn = document.createElement("button");
        btn.innerText = "delete";
        btn.addEventListener("click", function () {
            deleteData(ele, i);
        })
        tr1.append(tdName, tdEmpid, tdDep, tdExp, tdEmail, tdMob, tdRole, btn);
        tbody.append(tr1);
    })
}

function deleteData(ele, i) {
    arr.splice(i, 1);
    console.log(arr);
    displayData();
}