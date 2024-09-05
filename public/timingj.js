const datePicker = document.getElementById('date-picker');
const addTimerBtn = document.getElementById('add-timer-btn');
const timersList = document.getElementById('timers-list');
const emailInput = document.getElementById('email-input');

addTimerBtn.addEventListener('click', () => {
    const timerItem = document.createElement('li');
    timerItem.className = 'timer-item';

    const timerInput = document.createElement('input');
    timerInput.type = 'text';
    timerInput.placeholder = 'Enter notification description';

    const timeInput = document.createElement('input');
    timeInput.type = 'time';

    const setBtn = document.createElement('button');
    setBtn.type = 'button';
    setBtn.textContent = 'Set';

    timerItem.appendChild(timerInput);
    timerItem.appendChild(timeInput);
    timerItem.appendChild(setBtn);

    timersList.appendChild(timerItem);

    setBtn.addEventListener('click', () => {
        const timerDescription = timerInput.value;
        const selectedDate = datePicker.value;
        const selectedTime = timeInput.value;
        const userEmail = emailInput.value;

        // TO DO: implement logic to set the timer with the selected date and description
        console.log(`Timer set for ${selectedDate} at ${selectedTime} with description: ${timerDescription} and email: ${userEmail}`);
    });
});