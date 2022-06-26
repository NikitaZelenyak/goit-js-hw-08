
import throttle  from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
form.addEventListener("submit", onStandartBehaivor);
form.addEventListener("input", throttle(onDataStorageFeedback));


const STORAGE_FEEDBACK = "feedback-form-state";


const dataForm = {};

ensureProvideLocalStorage();

function onStandartBehaivor(e) {
    stopDefAction(e);
    const emailValue = e.currentTarget.elements.email.value
    const messageValue = e.currentTarget.elements.message.value
    
if (emailValue ===''||messageValue ==='' ) {
    return alert('Attention!!! All input must be feeling')
}

    
    e.currentTarget.reset()

     
    localStorage.removeItem(STORAGE_FEEDBACK);
    console.table(dataForm);
}

function stopDefAction(e) {
    e.preventDefault();
}

function onDataStorageFeedback(e) {
    const formElements = e.currentTarget.elements;
    const email = formElements.email.value;
    const message = formElements.message.value;

    dataForm.email = email;
    dataForm.message = message;

    const dataFormStringify = JSON.stringify(dataForm);
    localStorage.setItem(STORAGE_FEEDBACK, dataFormStringify);

 



    
};

function ensureProvideLocalStorage() {
    const dataFormParse = JSON.parse(localStorage.getItem(STORAGE_FEEDBACK));


    if (dataFormParse !== null) {
        form.elements.email.value = dataFormParse.email;
        form.elements.message.value = dataFormParse.message;
    }
};  





