import { getCyborgs, deleteCyborg, saveCyborg } from "./api.js";

export function loadCyborgs() {
    getCyborgs((data) => {
        const tableBody = $("#cyborgTable");
        tableBody.empty();
        data.forEach(cyborg => {
            tableBody.append(`
                <tr data-id="${cyborg.id}" data-name="${cyborg.name}" data-birthyear="${cyborg.birthYear}" data-country="${cyborg.country}" data-bio="${cyborg.bio}">
                    <td>${cyborg.id}</td>
                    <td>${cyborg.name}</td>
                    <td>${cyborg.birthYear}</td>
                    <td>${cyborg.country}</td>
                    <td>${cyborg.bio}</td>
                    <td>
                        <button class="btn btn-info btn-sm manage-enhancements">Manage Enhancements</button>
                        <button class="btn btn-warning btn-sm edit-cyborg">Edit</button>
                        <button class="btn btn-danger btn-sm delete-cyborg">Delete</button>
                    </td>
                </tr>
            `);
        });
    });
}

export function editCyborg(id, name, birthYear, country, bio) {
    $("#cyborgId").val(id);
    $("#cyborgName").val(name);
    $("#cyborgBirthYear").val(birthYear);
    $("#cyborgCountry").val(country);
    $("#cyborgBio").val(bio);
}

export function handleCyborgForm(event) {
    event.preventDefault();

    const cyborgId = $("#cyborgId").val();
    const cyborgData = {
        name: $("#cyborgName").val(),
        birthYear: $("#cyborgBirthYear").val(),
        country: $("#cyborgCountry").val(),
        bio: $("#cyborgBio").val()
    };

    saveCyborg(cyborgData, cyborgId, () => {
        alert(cyborgId ? "Cyborg updated!" : "Cyborg added!");
        $("#cyborgForm")[0].reset();
        $("#cyborgId").val("");
        toggleCyborgFormButtons(false)
        loadCyborgs();
    });
}

export function toggleCyborgFormButtons(isEditing) {
    $("#cancelCyborgEdit").toggleClass("d-none", !isEditing);
    $("#createCyborgButton").toggleClass("d-none", isEditing);
    $("#updateCyborgButton").toggleClass("d-none", !isEditing);
}