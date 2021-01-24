/**
 * Hanz Musterman bizden calistigi okul icin bir dijital kayit takip sistemi yapmamizi istemistir.
 * Hanz Bey ogrenci bilgi girisinin sayfanin sol tarafinda bulunan bir form araciligi ile yapilmasini istemektedir
 * istenilen bilgiler arasinda Ogrencinin ADI SOYADI YASI gibi bilgiler girilecektir
 * Programda kayit olan ogrenci listesi ise sayfanin sag tarafinda DETAYLI bir sekilde gosterilecektir.
 * Listenin en altinda da guncel olarak toplam kayit olan ogrenci sayisi gosterilecektir
 * Gerektiginde listeden kayit silinebilecektir
 * 
 * Bu programda olusturdugumuz fonksiyon ile sayfanin sol tarafinda bir form olusturacagiz
 * kullanici burdan veri girisinde bulundugu zaman veriyi cekip olusturdugumuz kayitli ogrenci arrayi icine atacagiz
 * ve bu arrayi surekli guncel tutarak ekrana yazdiracagiz
 * olusturdugumuz bir baska fonksiyon ile bu listede bulunnan ogrenci sayisini alttaki toplam ogrenci bolumune guncel olarak yazacagiz
 */

let formContent = document.getElementById("input-value")
let listContent=document.getElementById("reg-list")
 formContent.innerHTML = printForm()
listContent.innerHTML=printList()

let table=document.getElementById("student-list")
let registeredStudents=[];
let nameInput=document.getElementById("name-input")
let surnameInput=document.getElementById("surname-input")
let ageInput=document.getElementById("age-input")
let totalInput=document.getElementById("totalstudent")
let validName=nameInput.value
let validsurName=surnameInput.value
let validAge=ageInput.value



formContent.addEventListener("click",function (pEvent) {
    if (pEvent.target.tagName.toLowerCase()==="button") {
        takeValue()
      totalStudent()
     
    }
})




 


