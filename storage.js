localStorage.setItem('userID', 871557888);

const addToLocalStorage = () => {
    const idInput = document.getElementById('Storage-id');
    const id = idInput.value;
    const ValueInput = document.getElementById('storage-value');
    const value = ValueInput.value;

    localStorage.setItem(id, value);
    idInput.value = '';
    ValueInput.value = '';
}