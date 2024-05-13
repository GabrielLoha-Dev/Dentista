document.addEventListener('DOMContentLoaded', () => {
    const radiosRecep = document.querySelectorAll('input[name="options-outlined-recep"]');
    const radiosDent = document.querySelectorAll('input[name="options-outlined-dent"]');
    const radiosConfirm = document.querySelectorAll('input[name="options-confirm"]');
    const commentDiv = document.querySelector('.comment');

    function checkRadios() {
        const recepChecked = Array.from(radiosRecep).some(radio => radio.checked);
        const dentChecked = Array.from(radiosDent).some(radio => radio.checked);
        const confirmChecked = Array.from(radiosConfirm).some(radio => radio.checked);

        if (recepChecked && dentChecked && confirmChecked) {
            commentDiv.style.display = 'block';
        } else {
            commentDiv.style.display = 'none';
        }
    }

    radiosRecep.forEach(radio => radio.addEventListener('change', checkRadios));
    radiosDent.forEach(radio => radio.addEventListener('change', checkRadios));
    radiosConfirm.forEach(radio => radio.addEventListener('change', checkRadios));

    checkRadios();
});
