document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const dataTable = document.getElementById('dataTable').querySelector('tbody');

    const storedData = JSON.parse(localStorage.getItem('userData')) || [];
    storedData.forEach(user => addRow(user));

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const age = parseInt(document.getElementById('age').value.trim());

        if (age >= 18) {
            const user = { firstName, lastName, age };
            addRow(user);
            storedData.push(user);
            localStorage.setItem('userData', JSON.stringify(storedData));
        } else {
            alert('Only adults (18 years or older) can be added.');
        }

        form.reset();
    });

    function addRow(user) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.age}</td>
        `;
        dataTable.appendChild(row);
    }
});
