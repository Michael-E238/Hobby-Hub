const $ = document.querySelector('.dollar1');
const $$ = document.querySelector('.dollar2');
const $$$ = document.querySelector('.dollar3');
const time1 = document.querySelector('.time1');
const time2 = document.querySelector('.time2');
const time3 = document.querySelector('.time3');
const indoors = document.querySelector('.indoors');
const outdoors = document.querySelector('.outdoors');
const hobby = document.querySelector('.flex-item hobby');
const submit = document.getElementById('submit');

const hobbyForm = document.getElementById("hobby-form");

hobbyForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event);

    const checkedItems = [];
    //loop over checked elements
    //for loop
    for (let index = 0; index < event.target.length; index++) {
        const element = event.target[index];
        //if checked === true push items to array
        if (element.checked === true) {
            checkedItems.push(element)
        }
    }

    element.classlist.toggle



    console.log(checkedItems);


});

//function to make sure all boxes are filled in before submitting, and also adding everything to local storage.
const footerForm = document.getElementById("footer-form");
const errorMessage = document.getElementById("error");

function FormSubmit(event) {

    event.preventDefault();
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    if (!name || !email) {
        errorMessage.textContent = "Please complete the form.";
        return;
    }
    const formData = {
        name,
        email,
    };

    storeLocalStorage(formData);
}
//Added an event listener to the form on submit. Call the function to handle the form submission.
footerForm.addEventListener("submit", FormSubmit);







