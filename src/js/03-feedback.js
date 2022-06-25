
var throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
form.addEventListener("submit", onStandartBehaivor);
form.addEventListener("input", throttle(onDataStorageFeedback, 250));


const STORAGE_FEEDBACK = "feedback-form-state";


const dataForm = {};

ensureProvideLocalStorage();

function onStandartBehaivor(e) {
    stopDefAction(e);


    
    e.currentTarget.reset()

     
    localStorage.removeItem(STORAGE_FEEDBACK);
    console.table(dataForm);
}

function stopDefAction(e) {
    e.preventDefault();
}

function onDataStorageFeedback(e) {
    const formElemets = e.currentTarget.elements;
    const email = formElemets.email.value;
    const message = formElemets.message.value;

    dataForm.email = email;
    dataForm.message = message;

    const dataFormStringify = JSON.stringify(dataForm);
    localStorage.setItem(STORAGE_FEEDBACK, dataFormStringify);

 



    
};

function ensureProvideLocalStorage() {
    const dataFormParse = JSON.parse(localStorage.getItem(STORAGE_FEEDBACK));


    if (dataFormParse) {
        form.elements.email.value = dataFormParse.email;
        form.elements.message.value = dataFormParse.message;
    }
};  


