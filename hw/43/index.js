"use strict";
const INPUT_EMAIL = document.getElementById("email");
const INTPUT_TITLE = document.getElementById("title");
const INPUT_TEXTAREA = document.getElementById("text");
const CHECKBOX = document.getElementById("checkbox");
const BTNS_SUBMIT = document.getElementsByClassName("btn");
const EMAIL_FORM = document.getElementById("emailForm");
// Я остановился на проверке данных. Дальше нужно описать функцию которая проверяет заполненность данных validateFormData , а потом проверку наличия имейлов в БД
EMAIL_FORM.addEventListener("change", (e) => {
    console.log(formData);
});
Array.from(BTNS_SUBMIT).forEach((btn) => {
    btn.addEventListener("click", (event) => {
        event.preventDefault();
        validateFormData(formData);
    });
});
if (INPUT_EMAIL && INTPUT_TITLE && INPUT_TEXTAREA && CHECKBOX) {
    INPUT_EMAIL.addEventListener("input", (event) => {
        const target = event.target;
        formData.email = target.value;
    });
    INTPUT_TITLE.addEventListener("input", (event) => {
        const target = event.target;
        formData.title = target.value;
    });
    INPUT_TEXTAREA.addEventListener("input", (event) => {
        const target = event.target;
        formData.text = target.value;
    });
    CHECKBOX.addEventListener("input", (event) => {
        const target = event.target;
        formData.checkbox = target.checked;
    });
}
else {
    console.log("Inputs are not found");
}
const formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false,
};
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
function validateFormData(data) {
    // Если каждое из свойств объекта data правдиво...
    if (Object.keys(data).length > 0 && data.checkbox) {
        console.log("Thank you for complite the form! We will send you our feedeback.");
        checkFormData(data);
        return true;
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
function checkFormData(data) {
    const { email } = data;
    const emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    // Если email совпадает хотя бы с одним из массива
    if (emails.includes(email)) {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
    }
}
