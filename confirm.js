function loadDataAndCalcPrice() {
    var total = 0
    var prices = [500, 300, 60]

    var confirmName = document.getElementById("nameConfirm")
    var confirmAge = document.getElementById("ageConfirm")
    var confirmMail = document.getElementById("mailConfirm")
    var confirmPhone = document.getElementById("phoneConfirm")
    var occupationConfirm = document.getElementById("occupationConfirm")
    var classType = document.getElementById("classType")
    var courses = document.getElementById("courses")
    var payment = document.getElementById("payment")
    var totalPrice = document.getElementById("total")

    confirmName.textContent = sessionStorage.firstname + " " + sessionStorage.lastname
    confirmMail.textContent = sessionStorage.email
    confirmPhone.textContent = sessionStorage.phonenumber
    confirmAge.textContent = sessionStorage.age
    occupationConfirm.textContent = sessionStorage.occupationArray
    classType.textContent = sessionStorage.classType
    
    var yourCourses = ""
    if (sessionStorage.Toeic == "true") {
        yourCourses += "Toeic, ";
    }
    if (sessionStorage.Ielts == "true") {
        yourCourses += "Ielts, ";
    }
    if (sessionStorage.Toefl == "true") {
        yourCourses += "Toefl, ";
    }
    if (sessionStorage.Textbook_and_Other_books == "true") {
        yourCourses += "Textbook and Other books, ";
    }
    yourCourses = yourCourses.substring(0, yourCourses.length - 2)
    courses.textContent = yourCourses

    payment.textContent = sessionStorage.payment


    if (sessionStorage.classType == "Tutor") {
        total += prices[0]
    }
    if (sessionStorage.classType == "Two to Three") {
        total += prices[1]
    }
    if (sessionStorage.classType == "Five to Twenty") {
        total += prices[2]
    }
    total += ".000 VND / Class"
    totalPrice.textContent = total
}

function cancleButton() {
    window.location = "register.html"
}

function init() {
    loadDataAndCalcPrice()
    var cancle = document.getElementById("cancleButton")
    cancle.onclick = cancleButton    
}

window.onload = init