function saveData() {
    var firstname = document.getElementById("firstname").value
    var age = document.getElementById("age").value
    var lastname = document.getElementById("lastname").value
    var email = document.getElementById("email").value
    var phonenumber = document.getElementById("phonenumber").value
    
    sessionStorage.firstname = firstname
    sessionStorage.lastname = lastname
    sessionStorage.email = email
    sessionStorage.phonenumber = phonenumber
    sessionStorage.age = age

    var occupationArray = document.getElementById("radioOccupation").getElementsByTagName("input")
    var classType = document.getElementById("classType").getElementsByTagName("input")

    for (var i=0; i < occupationArray.length; i++) {
        if (occupationArray[i].checked == true) {
            sessionStorage.occupationArray = occupationArray[i].value;            
        }
    }

    for (var i=0; i < classType.length; i++) {
        if (classType[i].checked == true) {
            sessionStorage.classType = classType[i].value;            
        }
    }


    var Toefl = document.getElementById("toefl").checked
    var Toeic = document.getElementById("toeic").checked
    var Textbook_and_Other_books = document.getElementById("textbook").checked
    var Ielts = document.getElementById("ielts").checked

    sessionStorage.Toefl = Toefl
    sessionStorage.Toeic = Toeic
    sessionStorage.Textbook_and_Other_books = Textbook_and_Other_books
    sessionStorage.Ielts = Ielts
    
    var payment = document.getElementById("payment")
    sessionStorage.payment = payment.value
}

function prefillData() {
    
    if (sessionStorage.firstname != null) {
        document.getElementById("firstname").value = sessionStorage.firstname
    }
    if (sessionStorage.lastname != null) {
        document.getElementById("lastname").value = sessionStorage.lastname
    }
    if (sessionStorage.age != null) {
        document.getElementById("age").value = sessionStorage.age
    }
    if (sessionStorage.email != null) {
        document.getElementById("email").value = sessionStorage.email
    }
    if (sessionStorage.phonenumber != null) {
        document.getElementById("phonenumber").value = sessionStorage.phonenumber
    }
    if (sessionStorage.Toefl == "true") {
        document.getElementById("toefl").checked = true
    }
    if (sessionStorage.Toeic == "true") {
        document.getElementById("toeic").checked = true
    }
    if (sessionStorage.Ielts == "true") {
        document.getElementById("ielts").checked = true
    }
    if (sessionStorage.Textbook_and_Other_books == "true") {
        document.getElementById("textbook").checked = true
    }
    if (sessionStorage.occupationArray == "University") {
        document.getElementById("university").checked = true
    }
    if (sessionStorage.occupationArray == "Primary") {
        document.getElementById("primary").checked = true
    }
    if (sessionStorage.occupationArray == "Highschool") {
        document.getElementById("highschool").checked = true
    }
    if (sessionStorage.occupationArray == "Secondary") {
        document.getElementById("secondary").checked = true
    }

    if (sessionStorage.classType == "Tutor") {
        document.getElementById("tutor").checked = true
    }
    if (sessionStorage.classType == "Two to Three") {
        document.getElementById("2_3").checked = true
    }
    if (sessionStorage.classType == "Five to Twenty") {
        document.getElementById("5_20").checked = true
    }
    
    if (sessionStorage.payment != null) {
        document.getElementById("payment").value = sessionStorage.payment
    } else {
        document.getElementById("payment").value = none
    }
    
    

}

function init() {
    var regForm = document.getElementById("registerForm")
    regForm.onsubmit = saveData
    prefillData()
}

window.onload = init
 