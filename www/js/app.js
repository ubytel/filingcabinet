/*
 * Please see the included README.md file for license terms and conditions.
 */


// This file is a suggested starting place for your code.
// It is completely optional and not required.
// Note the reference that includes it in the index.html file.


/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false app:false, dev:false, cordova:false */



// This file contains your event handlers, the center of your application.
// NOTE: see app.initEvents() in init-app.js for event handler initialization code.

// function myEventHandler() {
//     "use strict" ;
// // ...event handler code here...
// }


// ...additional event handlers here...
var taskList = [];

function addTask()
{
    var task = document.getElementById("inputValue").value;
    document.getElementById("inputValue").value ="";
    taskList.push(task);
    displayList();
}

function removeTask()
{
    var arrayId = this.getAttribute("id");
    taskList.splice(arrayId, 1);
    displayList();
}

function displayList()
{
    var taskListContent = "<ul>";
    for(var i = 0; i < taskList.length; i++)
    {
        
        taskListContent += "<li>"+taskList[i]+"  <button class='deleteTask' id='"+i+"'>-</button></li>";

    }
    taskListContent += "</ul>";
    document.getElementById("TaskListValue").innerHTML = taskListContent;

    var removeBtnList = document.getElementsByClassName("deleteTask");
    for(i = 0; i<removeBtnList.length; i++)
    {
        removeBtnList[i].addEventListener("click", removeTask);
    }

}

displayList();
document.getElementById("Add").addEventListener("click", addTask);