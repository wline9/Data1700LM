document.addEventListener("DOMContentLoaded", () =>{


    document.getElementById('submit-button').addEventListener('click', function () {
        const form = document.getElementById('potion-form');
        const table = document.getElementById('potion-table');

        // If the table header is empty, create it based on form fields
        if (table.querySelector('thead tr').children.length === 0) {
            const headerRow = table.querySelector('thead tr');
            Array.from(form.elements).forEach(element => {
                if (element.name) {
                    const th = document.createElement('th');
                    th.textContent = element.name;
                    headerRow.appendChild(th);
                }
            });
        }

        // Create a new row for the table
        const newRow = document.createElement('tr');
        Array.from(form.elements).forEach(element => {
            if (element.name) {
                const td = document.createElement('td');
                if (element.type === 'checkbox') {
                    td.textContent = element.checked ? 'Yes' : 'No';
                } else if (element.type === 'radio') {
                    if (element.checked) td.textContent = element.value;
                } else {
                    td.textContent = element.value;
                }
                newRow.appendChild(td);
            }
        });

        // Add the new row to the table
        table.querySelector('tbody').appendChild(newRow);

        // Clear the form
        form.reset();
    });
})
