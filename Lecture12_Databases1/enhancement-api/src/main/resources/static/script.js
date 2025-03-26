$(document).ready(function() {
    const apiUrl = "api/enhancements"; // Replace with your actual API URL
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const tableBody = $("#deviceTableBody");
            data.forEach(device => {
                const row = `<tr>
                            <td>${device.id}</td>
                            <td>${device.name}</td>
                            <td>${device.description}</td>
                            <td>${device.type}</td>
                            <td>${device.manufacturer}</td>
                        </tr>`;
                tableBody.append(row);
            });
        })
        .catch(error => console.error("Error fetching data:", error));
});