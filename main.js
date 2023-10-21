
const yearsOutput = document.querySelector('.years-result');
const monthsOutput = document.querySelector('.months-result');
const daysOutput = document.querySelector('.days-result');


const yearsInput = document.querySelector('#years');
const monthsInput = document.querySelector('#months');
const daysInput = document.querySelector('#days');

const errorDay= document.querySelector('.day-error');  
const errorMonth= document.querySelector('.month-error');
const errorYear= document.querySelector('.year-error');
const calculateBtn = document.querySelector('#btn');


let data = false;

daysInput.addEventListener('input', () => {
    if(+daysInput.value > 31) {
        errorDay.textContent = 'Please input a valid day!';
        data = false;
        return;
    } else {
        data = true;
        errorDay.textContent = '';
    }
    if(+daysInput.value === 0 || +daysInput.value < 0) {
        data = false;
        errorDay.textContent = 'Please input a valid day!';
        data = false;
        return;
    } else {
        errorDay.textContent = '';
    }
});

monthsInput.addEventListener('input', () => {
    if(+monthsInput.value > 12) {
        errorMonth.textContent = 'Please input a valid month!';
        data = false;
        return;
    } else {
        data = true;
        errorMonth.textContent = '';
    }
    if(+monthsInput.value === 0 || +monthsInput.value < 0) {
        data = false;
        errorMonth.textContent = 'Please input a valid month!';
        data = false;
        return;
    } else {
        errorMonth.textContent = '';
    }
});

yearsInput.addEventListener('input', () => {
    if(+yearsInput.value > 2023) {
        errorYear.textContent = 'Please input a valid year!';
        data = false;
        return;
    } else {
        data = true;
        errorYear.textContent = '';
    }
    if(+yearsInput.value === 0 || +yearsInput.value < 0) {
        data = false;
        errorYear.textContent = 'Please input a valid year!';
        data = false;
        return;
    } else {
        errorYear.textContent = '';
    }
});

function calculateAge() {
    if(!data) {
        alert('Check your input!');
    }

    const years = +yearsInput.value;
    const months = +monthsInput.value;
    const days = +daysInput.value;

    const currentDate = new Date();
    const birthDate = new Date(years, months -1, days);

    if(birthDate > currentDate || isNaN(birthDate)) {
        errorYear.textContent = 'Invalid Data';
        return;
    }

    const ageInMill = currentDate - birthDate;
    const ageDate = new Date(ageInMill);
    const yearsDiff = Math.abs(ageDate.getUTCFullYear() - 1970);
    const monthsDiff = ageDate.getUTCMonth();
    const daysDiff = ageDate.getUTCDate() - 1;

    yearsOutput.textContent = yearsDiff;
    monthsOutput.textContent = monthsDiff;
    daysOutput.textContent = daysDiff;

    errorYear.textContent = '';
    errorMonth.textContent = '';
    errorDay.textContent = ''
}

calculateBtn.addEventListener('click', calculateAge);