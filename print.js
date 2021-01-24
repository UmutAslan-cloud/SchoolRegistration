function printForm() {
    return `
     <div><p>Student</p></div>
     <div class="text-input">
         <label for="name">Name</label>
         <input id="name-input" type="text" placeholder="name">
     </div>
     <div class="text-input">
         <label for="surname">Surname</label>
         <input id="surname-input" type="text" placeholder="surname">
     </div>
     <div class="text-input">
         <label for="age">Age</label>
         <input id="age-input" type="text" placeholder="age">
     </div>
     <div>
         <button id="add-button">ADD</button>
     </div>
     `
}


function printList() {
    return ` <table id="student-list">
    <tbody id="table-body">
     <tr id="t-head">
         <th>Name</th>
         <th>Surname</th>
         <th>Age</th>
     </tr>
     </tbody>
 </table>
 <div class="total">
     <label for="total">Total Student</label>
     <input  id="totalstudent"type="text" value="0">
 </div>`
}

function printListContent()  {
    let content=registeredStudents.map(function (student,index) { 
   return  `
   <tr class="student-text" id="registration">
    <td>${student.name}</td>
    <td>${student.surname}</td>
    <td>${student.age}</td>
    <td><button id="${index}">Remove</button></td>
    <tr/>
`}).join("")
  spanTag.innerHTML=content
  removeStudent()
}
