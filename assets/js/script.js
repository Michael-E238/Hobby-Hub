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

hobbyForm.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(event);
    
    const checkedItems =[];
    //loop over checked elements
    //for loop
    for (let index = 0; index < event.target.length; index++) {
        const element = event.target[index];
        //if checked === true push items to array
        if(element.checked === true){
            checkedItems.push(element)
        }
    } 
    
    element.classlist.toggle


    
    console.log(checkedItems);


});







