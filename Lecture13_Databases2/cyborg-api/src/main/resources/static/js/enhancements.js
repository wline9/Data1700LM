import { getEnhancements, saveEnhancement, deleteEnhancement } from "./api.js";

export function loadEnhancements(cyborgId) {
    $("#cyborgEnhancementId").val(cyborgId);
    $("#enhancementsList").empty();

    getEnhancements(cyborgId, (data) => {
        data.forEach(enhancement => {
            $("#enhancementsList").append(`
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${enhancement.name} - ${enhancement.type} (${enhancement.manufacturer})</span>
                    <div>
                        <button class="btn btn-warning btn-sm edit-enhancement" data-id="${enhancement.id}" data-name="${enhancement.name}" data-desc="${enhancement.description}" data-type="${enhancement.type}" data-manufacturer="${enhancement.manufacturer}" data-cyborg-id = "${enhancement.cyborgId}">Edit</button>
                        <button class="btn btn-danger btn-sm delete-enhancement" data-id="${enhancement.id}">Delete</button>
                    </div>
                </li>
            `);
        });
    });

    $("#enhancementsModal").modal("show");
}

export function handleEnhancementForm(event) {
    event.preventDefault();

    const enhancementId = $("#enhancementId").val();
    const cyborgId = $("#cyborgEnhancementId").val();
    const enhancementData = {
        name: $("#enhancementName").val(),
        description: $("#enhancementDescription").val(),
        type: $("#enhancementType").val(),
        manufacturer: $("#enhancementManufacturer").val(),
        cyborgId: cyborgId
    };

    saveEnhancement(enhancementData, enhancementId, () => {
        alert(enhancementId ? "Enhancement updated!" : "Enhancement added!");
        $("#enhancementForm")[0].reset();
        $("#enhancementId").val("");
        toggleEnhancementFormButtons(false)
        loadEnhancements(cyborgId);
    });
}

export function toggleEnhancementFormButtons(isEditing) {
    $("#cancelEnhancementEdit").toggleClass("d-none", !isEditing);
    $("#createEnhancementButton").toggleClass("d-none", isEditing);
    $("#updateEnhancementButton").toggleClass("d-none", !isEditing);
}