document.addEventListener('DOMContentLoaded', () => {
    const myButton = document.getElementById('myButton');

    if (myButton) {
        myButton.addEventListener('click', () => {
            alert('Вы нажали на кнопку!');
        });
    }
});
