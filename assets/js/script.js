const items = document.querySelectorAll('.item');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        filterItems();
    });
});

function filterItems() {
    const selectedValue = Array.from(document.querySelectorAll('input[name="valued"]:checked')).map(el => el.value);
    const selectedActivity = Array.from(document.querySelectorAll('input[name="activity"]:checked')).map(el => el.value);
    const selectedTime = Array.from(document.querySelectorAll('input[name="time"]:checked')).map(el => el.value);

    items.forEach(item => {
        const itemValue = item.className.split(' ').filter(className => className.startsWith('valued'));
        const itemActivity = item.className.split(' ').filter(className => className.startsWith('activity'));
        const itemTime = item.className.split(' ').filter(className => className.startsWith('time'));

        const matchValue = selectedValue.length === 0 || selectedValue.some(valued => itemValue.includes(`valued-${valued}`));
        const matchActivity = selectedActivity.length === 0 || selectedActivity.some(activity => itemActivity.includes(`activity-${activity}`));
        const matchTime = selectedTime.length === 0 || selectedTime.some(time => itemTime.includes(`time-${time}`));

        if (matchValue && matchActivity && matchTime) {
            item.style.display = 'block';
            console.log(matchActivity);
        } else {
            item.style.display = 'none';
        }
    });
}




//function to make sure all boxes are filled in before submitting, and also adding everything to local storage.
const footerForm = document.getElementById("footer-form");
const submitButton = document.getElementById("submitButton");
const name = document.getElementById("name");
const email = document.getElementById("email");
const userName = document.getElementById("userName");
const msgDiv = document.getElementById("msg");

formSubmit();

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

function formSubmit() {


    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    if (!name || !email) return;

    name.textContent = name;
    msg.textContent = `Thank you for signing up for Hobby Hub, ${name}!`;


}

//Added an event listener to the form on submit. Call the function to handle the form submission.
// footerForm.addEventListener("submit", formSubmit);

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    if (name === "" && email === "") {
        msg.textContent = "Name and email cannot be blank.";
    } else if (name === "") {
        msg.textContent = "Name cannot be blank.";
        return;
    } else if (email === "") {
        msg.textContent = "Email cannot be blank.";
        return;
    } else {
        msg.textContext = "";

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        formSubmit();
    }
});







