document.getElementById("addbtn").addEventListener("click", function() {

    console.log("Add button clicked");

    var task = document.getElementById("taskinput").value;
    var tasklist = document.getElementById("tasklist");
    var addbtn = document.getElementById("addbtn");

    if(task === "") {
        alert("Please enter a task");
        return;
    }
    var list = document.createElement("li");
    list.innerText = task;
    var deletebtn = document.createElement("button");
    deletebtn.innerText = "Delete";

    deletebtn.addEventListener("click", function() {
        list.remove();}
    );

    list.appendChild(deletebtn);
    tasklist.appendChild(list);
    task.value = "";
});