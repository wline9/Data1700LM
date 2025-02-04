document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('submit-button').addEventListener('click', function () {
        const form = document.getElementById('potion-form');
        const table = document.getElementById('potion-table');

        // If the table header is empty, create it based on form fields
        if (table.querySelector('thead tr').children.length === 0) {
            const headerRow = table.querySelector('thead tr');
            const processedNames = new Set(); // To track processed radio groups

            Array.from(form.elements).forEach(element => {
                if ((element.name || element.id) && element.type !== 'button' && element.type !== 'submit') {
                    if (element.type === 'radio') {
                        if (processedNames.has(element.name)) return; // Skip duplicate radio names
                        processedNames.add(element.name);
                    }
                    const th = document.createElement('th');
                    th.textContent = element.name || element.id;
                    headerRow.appendChild(th);
                }
            });
        }

        // Create a new row for the table
        const newRow = document.createElement('tr');
        const processedNames = new Set(); // Track radio groups to avoid duplicate <td>

        Array.from(form.elements).forEach(element => {
            if ((element.name || element.id) && element.type !== 'button' && element.type !== 'submit') {
                if (element.type === 'radio') {
                    if (processedNames.has(element.name)) return; // Skip duplicate radio groups
                    processedNames.add(element.name);
                    const selectedRadio = form.querySelector(`input[name="${element.name}"]:checked`);
                    if (selectedRadio) {
                        const td = document.createElement('td');
                        td.textContent = selectedRadio.value;
                        newRow.appendChild(td);
                    } else {
                        const td = document.createElement('td');
                        td.textContent = ""; // Empty cell if no radio selected
                        newRow.appendChild(td);
                    }
                } else {
                    const td = document.createElement('td');
                    if (element.type === 'checkbox') {
                        td.textContent = element.checked ? 'Yes' : 'No';
                    } else if (element.type === "select-multiple") {
                        td.textContent = Array.from(element.selectedOptions)
                            .map(option => option.value).join(", ");
                    } else {
                        td.textContent = element.value;
                    }
                    newRow.appendChild(td);
                }
            }
        });

        // Add the new row to the table
        table.querySelector('tbody').appendChild(newRow);

        // Clear the form
        form.reset();
    });
});
