const $ = document.getElementById('$');
const $$ = document.getElementById('$$');
const $$$ = document.getElementById('$$$');
const time1 = document.getElementById('time|');
// const time2 = document.getElementById('time||');
// const time3 = document.getElementById('time|||');
// const indoors = document.getElementById('indoors');
// const outdoors = document.getElementById('outdoors');
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
            checkedItems.push(element.value)
        }
    }
    
    console.log(checkedItems);

    //
});







