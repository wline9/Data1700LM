export const apiBaseUrl = "http://localhost:8080/api/cyborgs";
export const enhancementsApiUrl = "http://localhost:8080/api/enhancements";

export function getCyborgs(callback) {
    $.get(apiBaseUrl, callback);
}

export function deleteCyborg(id, callback) {
    if (confirm("Are you sure you want to delete this cyborg?")) {
        $.ajax({
            url: `${apiBaseUrl}/${id}`,
            type: "DELETE",
            success: callback
        });
    }
}

export function saveCyborg(cyborgData, cyborgId, callback) {
    const url = cyborgId ? `${apiBaseUrl}/${cyborgId}` : apiBaseUrl;
    const method = cyborgId ? "PUT" : "POST";

    $.ajax({
        url: url,
        type: method,
        contentType: "application/json",
        data: JSON.stringify(cyborgData),
        success: callback
    });
}

export function getEnhancements(cyborgId, callback) {
    $.get(`${enhancementsApiUrl}?cyborgId=${cyborgId}`, callback);
}

export function saveEnhancement(enhancementData, enhancementId, callback) {
    const url = enhancementId ? `${enhancementsApiUrl}/${enhancementId}` : enhancementsApiUrl;
    const method = enhancementId ? "PUT" : "POST";

    $.ajax({
        url: url,
        type: method,
        contentType: "application/json",
        data: JSON.stringify(enhancementData),
        success: callback
    });
}

export function deleteEnhancement(enhancementId, cyborgId, callback) {
    if (confirm("Are you sure you want to delete this enhancement?")) {
        $.ajax({
            url: `${enhancementsApiUrl}/${enhancementId}`,
            type: "DELETE",
            success: () => callback(cyborgId)
        });
    }
}
