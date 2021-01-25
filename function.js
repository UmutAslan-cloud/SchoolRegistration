/**
 * Bu fonksiyonumuz verileri Ui a yazdiriyor.
 */
function printForm() {
    return `
    <div><p>Student Info</p></div>
    <div class="text-input">
        <label for="name">Name</label>
        <input id="name-input" type="text" placeholder="Name">
    </div>
    <div class="text-input">
        <label for="surname">Surname</label>
        <input id="surname-input" type="text" placeholder="Surname">
    </div>
    <div class="text-input">
        <label for="age">Age</label>
        <input id="age-input" type="text" placeholder="Age">
        
    </div>
    <div>
        <button id="add-button">ADD</button>
    </div>
     `
}


function printList() {
    return ` <table >
    <tbody id="table-body">
     <tr id="t-head">
         <th>Name</th>
         <th>Surname</th>
         <th>Age</th>
     </tr>
     </tbody>
     <table id="student-list">
     </table>
 </table>
 <div class="total">
     <label for="total">Total Student</label>
     <input  id="totalstudent"type="text" value="0">
 </div>`
}
/**
 * Bu fonksiyonumuz ise eklenen verilerin olusturdugu listeyi ekrana yazdiriyor
 */
function printListContent() {
    let content = registeredStudents.map(function (student, index) {
        return `
   <tr class="student-text" id="registration">
    <td>${student.name}</td>
    <td>${student.surname}</td>
    <td>${student.age}</td>
    <td><button id="${index}">Remove</button></td>
    <tr/>
`
    }).join("")
    table.innerHTML = content
    removeStudent()
}
/**
 * Bu fonksiyonumuz ise girilen degerleri aliyor ve listeyi guncelleyip tekrar yazdiriyor
 */
function takeValue() {
    registeredStudents.push({
        "name": nameInput.value,
        "surname": surnameInput.value,
        "age": Number(ageInput.value)
    })

    printListContent()

}
/**
 * Bu fonksiyonumuz ise listemizden veriyi siliyor ve listeyi guncel haliyle tekrar yazdiriyor
 */
let removeStudent = () => {
    registeredStudents.map((pdelete, index) => {
        document.getElementById(`${index}`).addEventListener("click", function (e) {
            registeredStudents.splice(index, 1)
            printListContent()
            totalStudent()
        })
    })
}

/**
 * Toplam ogrenci sayisini bulan fonksiyonumuz
 */
function totalStudent() {
    let result = registeredStudents.length
    return totalInput.value = result
}
/**
 * Bu da inputlarin degerlereini sorgulayarak kullaniciya uyari mesaji gonderiyor
 */
function validation2() {
    if (nameInput.value == null || nameInput.value == "") {
        alert("Name can't be blank");
        return false;
    } else if (surnameInput.value == null || surnameInput.value == "") {
        alert("Surname can't be blank");
        return false;
    } else {
        takeValue()
    }
}