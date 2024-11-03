const $Toggle = document.getElementById('dollar1Toggle');
const $$Toggle = document.getElementById('dollar2Toggle');
const $$$Toggle = document.getElementById('dollar3Toggle');
const time1Toggle = document.getElementById('time1Toggle');
const time2Toggle = document.getElementById('time2Toggle');
const time3Toggle = document.getElementById('time3Toggle');
const indoorsToggle = document.getElementById('indoorsToggle');
const outdoorsToggle = document.getElementById('outdoorsToggle');
const submit = document.getElementById('submit');

const hobbyForm = document.querySelector("#hobby-form");
const $ = document.querySelector('.dollar1');
const $$ = document.querySelector('.dollar2');
const $$$ = document.querySelector('.dollar3');
const time1 = document.querySelector('.time1');
const time2 = document.querySelector('.time2');
const time3 = document.querySelector('time3');
const indoors = document.querySelector('.indoors');
const outdoors = document.querySelector('.outdoors');

const elementsToToggle = [$Toggle, $$Toggle, $$$Toggle, time1Toggle, time2Toggle, time3Toggle, indoorsToggle, outdoorsToggle];


const checkbox = document.getElementById('filterCheckbox');
        const itemList = document.getElementById('itemList');

        checkbox.addEventListener('change', filterItems);

        function filterItems() {
            const showChecked = checkbox.checked;
            const items = itemList.getElementsByTagName('li');

            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                const isChecked = item.getAttribute('data-checked') === 'true';

                if (showChecked && !isChecked) {
                    item.style.display = 'none'; // Hide unchecked items
                } else {
                    item.style.display = 'list-item'; // Show item
                }
            }
        }




// hobbyForm.addEventListener('submit', function(event){
//     event.preventDefault();
//     const element = event.target;

//     if (element.matches('input[type="checkbox"')){
//         if (element.unchecked){
//             elementsToToggle.forEach((e)=> {e.style.display = 'none'})
//         }else{
//             elementsToToggle.forEach((e)=> {e.style.display ='inline'})
//         }
//     };
// })



// hobbyForm.addEventListener('submit', function(event){
//     event.preventDefault();
    // console.log(event);
    
    // const uncheckedItems =[];
    // //loop over checked elements
    // //for loop
    // for (let index = 0; index < event.target.length; index++) {
    //     const element = event.target[index];
    //     //if checked === true push items to array
    //     if(element.checked === false){
    //         uncheckedItems.push(element)
    //     }
    // }

//     uncheckedItems.style('display','none');

//     if(element.checked === false){
//         uncheckedItems.push(element.value);
//     };

//     uncheckedItems.forEach((item) => uncheckedItems.setAttribute('display','none'));

//     if(uncheckedItems.includes($Toggle)){
//         $.setAttribute('style','display: none')
//         };

//     if(uncheckedItems.includes($$Toggle)){
//         $$.setAttribute('style','display: none')
//     };

//     if(uncheckedItems.includes($$$Toggle)){
//         $$$.setAttribute('style','display: none')
//     };

//     if(uncheckedItems.includes(time1Toggle)){
//         time1.setAttribute('style','display: none')
//     };

//     if(uncheckedItems.includes(time2Toggle)){
//         time2.setAttribute('style','display: none')
//     };

//     if(uncheckedItems.includes(time3Toggle)){
//         time3.setAttribute('style','display: none')
//     };

//     if(uncheckedItems.includes(indoorsToggle)){
//         indoors.setAttribute('style','display: none')
//     };

//     if(uncheckedItems.includes(outdoors)){
//         outdoors.setAttribute('style','display: none')
//     };
// });


















